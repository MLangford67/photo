var photo;
(function (photo) {
    angular.module('photo', ['ui.router', 'ngResource', 'ui.bootstrap', 'angular-filepicker']).config(function ($stateProvider, $urlRouterProvider, $locationProvider, filepickerProvider) {
        filepickerProvider.setKey('AARGLmswLTmCJJxuSdd5Iz');
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: '/ngApp/views/home.html',
            controller: photo.Controllers.HomeController,
            controllerAs: 'vm'
        })
            .state('Add', {
            url: '/addPhoto',
            templateUrl: '/ngApp/views/addPhoto.html',
            controller: photo.Controllers.AddPhotoController,
            controllerAs: 'vm'
        })
            .state('Edit', {
            url: '/editPhoto/:id',
            templateUrl: '/ngApp/views/editPhoto.html',
            controller: photo.Controllers.AddPhotoController,
            controllerAs: 'vm'
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    });
})(photo || (photo = {}));
