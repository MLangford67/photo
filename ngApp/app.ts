namespace photo {

    angular.module('photo', ['ui.router', 'ngResource', 'ui.bootstrap', 'angular-filepicker']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider,
        filepickerProvider
    ) => {
      filepickerProvider.setKey('AARGLmswLTmCJJxuSdd5Iz');
        // Define routes
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

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
