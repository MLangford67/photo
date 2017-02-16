var photo;
(function (photo_1) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($scope, photoService, $window, $location, $state) {
                this.$scope = $scope;
                this.photoService = photoService;
                this.$window = $window;
                this.$location = $location;
                this.$state = $state;
                this.photos = this.photoService.getPhoto();
                console.log(this.photos);
            }
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
            function AddPhotoController(filepickerService, photoService, $state) {
                this.filepickerService = filepickerService;
                this.photoService = photoService;
                this.$state = $state;
            }
            AddPhotoController.prototype.addPhoto = function () {
                var _this = this;
                this.photoService.savePhoto(this.photo).then(function () {
                    _this.$state.go('home');
                });
            };
            AddPhotoController.prototype.pickFile = function () {
                this.filepickerService.pick({
                    mimetype: 'image/*'
                }, this.fileUploaded.bind(this));
            };
            AddPhotoController.prototype.fileUploaded = function (file) {
                this.photo.url = file.url;
                this.photoService.savePhoto(this.photo);
            };
            return AddPhotoController;
        }());
        Controllers.AddPhotoController = AddPhotoController;
        var EditPhotoController = (function () {
            function EditPhotoController(filepickerService, photoService, $state, $stateParams) {
                this.filepickerService = filepickerService;
                this.photoService = photoService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                if ($stateParams) {
                    this.id = $stateParams['id'];
                }
            }
            EditPhotoController.prototype.editPhoto = function (photo) {
                this.photo._id = this.id;
                this.photo.url = photo.url;
                console.log(this.photo);
            };
            EditPhotoController.prototype.pickFile = function () {
                this.filepickerService.pick({
                    mimetype: 'image/*'
                }, this.fileUploaded.bind(this));
            };
            EditPhotoController.prototype.fileUploaded = function (file) {
                this.photo.url = file.url;
                console.log(this.photo);
            };
            return EditPhotoController;
        }());
        Controllers.EditPhotoController = EditPhotoController;
    })(Controllers = photo_1.Controllers || (photo_1.Controllers = {}));
})(photo || (photo = {}));
