var photo;
(function (photo) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(filepickerService, $scope, photoService, $window, $location, $state) {
                this.filepickerService = filepickerService;
                this.$scope = $scope;
                this.photoService = photoService;
                this.$window = $window;
                this.$location = $location;
                this.$state = $state;
                this.photo = photoService.getPhoto();
            }
            HomeController.prototype.pickFile = function () {
                this.filepickerService.pick({
                    mimetype: 'image/*'
                }, this.fileUploaded.bind(this));
            };
            HomeController.prototype.fileUploaded = function (file) {
                this.file = file;
                this.url = this.file.url;
                this.$scope.$apply();
            };
            HomeController.prototype.deletePhoto = function (id) {
                var _this = this;
                this.photoService.deletePhoto(id).then(function () {
                    _this.$window.location.reload();
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AddPhotoController = (function () {
            function AddPhotoController(photoService, $state) {
                this.photoService = photoService;
                this.$state = $state;
            }
            AddPhotoController.prototype.addPhoto = function () {
                var _this = this;
                this.photoService.savePhoto(this.photo).then(function () {
                    _this.$state.go('home');
                });
            };
            return AddPhotoController;
        }());
        Controllers.AddPhotoController = AddPhotoController;
        var EditPhotoController = (function () {
            function EditPhotoController(photoService, $state, $stateParams) {
                this.photoService = photoService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                if ($stateParams) {
                    this.id = $stateParams['id'];
                }
            }
            EditPhotoController.prototype.editPhoto = function () {
                var _this = this;
                this.photo._id = this.id;
                this.photoService.savePhoto(this.photo).then(function () {
                    _this.$state.go('home');
                });
            };
            return EditPhotoController;
        }());
        Controllers.EditPhotoController = EditPhotoController;
    })(Controllers = photo.Controllers || (photo.Controllers = {}));
})(photo || (photo = {}));
