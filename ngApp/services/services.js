var photo;
(function (photo_1) {
    var Services;
    (function (Services) {
        var PhotoService = (function () {
            function PhotoService($resource) {
                this.$resource = $resource;
                this.PhotoResource = $resource('/api/photos/:id');
            }
            PhotoService.prototype.savePhoto = function (photo) {
                return this.PhotoResource.save({ url: photo }).$promise;
            };
            PhotoService.prototype.getPhoto = function () {
                return this.PhotoResource.query();
            };
            PhotoService.prototype.deletePhoto = function (id) {
                return this.PhotoResource.delete({ id: id }).$promise;
            };
            return PhotoService;
        }());
        Services.PhotoService = PhotoService;
        angular.module('photo').service('photoService', PhotoService);
    })(Services = photo_1.Services || (photo_1.Services = {}));
})(photo || (photo = {}));
