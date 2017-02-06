var photo;
(function (photo) {
    angular.module('photo', ['ui.router', 'ngResource', 'ui.bootstrap']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
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
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    });
})(photo || (photo = {}));
