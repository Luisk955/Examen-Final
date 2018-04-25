(() => {
  'use strict';
  angular
    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
    .config(routing);
  routing.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {

    $stateProvider

      .state('landingPage', {
        url: '/',
        templateUrl: './components/landingPage/landingPage.view.html',
        data: {
          pageTitle: 'Hoteleria'
        }
      })

      .state('registerUser', {
        url: '/registerUser',
        templateUrl: './components/users/registerUsers/registerUsers.view.html',
        data: {
          pageTitle: 'Registrar usuario'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/users/registerUsers/registerUser.controller.js')
          }]
        },
        controller: 'registerUsersController',
        controllerAs: 'vm'
      })

      .state('logIn', {
        url: '/logIn',
        templateUrl: './components/logIn/logIn.view.html',
        data: {
          pageTitle: 'Inicio de sesión'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/logIn/logIn.controller.js')
          }]
        },
        controller: 'logInController',
        controllerAs: 'vm'
      })

      .state('main', {
        url: '/main',
        templateUrl: './components/main/main.view.html',
        data: {
          pageTitle: 'Vista principal'
        },
        params: {
          tempHotel: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/main/main.controller.js')
          }]
        },
        controller: 'mainController',
        controllerAs: 'vm'
      })

      .state('main.registerUser', {
        url: '/registerUser',
        templateUrl: './components/users/registerUsers/registerUsers.view.html',
        data: {
          pageTitle: 'Registrar usuario'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/users/registerUsers/registerUser.controller.js')
          }]
        },
        controller: 'registerUsersController',
        controllerAs: 'vm'
      })
      .state('main.listUser', {
        url: '/listUser',
        templateUrl: './components/users/listUsers/listUsers.view.html',
        data: {
          pageTitle: 'Lista de usuarios'
        },
        params: {
          tempUser: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/users/listUsers/listUsers.controller.js')
          }]
        },
        controller: 'listUsersController',
        controllerAs: 'vm'
      })

      .state('main.modifyUser', {
        url: '/modifyUser',
        templateUrl: './components/users/modifyUsers/modifyUsers.view.html',
        data: {
          pageTitle: 'Modificación de usuarios'
        },
        params: {
          tempUser: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/users/modifyUsers/modifyUsers.controller.js')
          }]
        },
        controller: 'modifyUserController',
        controllerAs: 'vm'
      })

      .state('main.registerHotel', {
        url: '/registerHotel',
        templateUrl: './components/hotels/registerHotels/registerHotels.view.html',
        data: {
          pageTitle: 'Registrar hotel'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/hotels/registerHotels/registerHotels.controller.js')
          }]
        },
        controller: 'registerHotelsController',
        controllerAs: 'vm'
      })

      .state('main.listHotels', {
        url: '/listHotels',
        templateUrl: './components/hotels/listHotels/listHotels.view.html',
        data: {
          pageTitle: 'Lista de hoteles'
        },
        params: {
          tempHotel: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/hotels/listHotels/listHotels.controller.js')
          }]
        },
        controller: 'listHotelsController',
        controllerAs: 'vm'
      })

      .state('main.modifyHotel', {
        url: '/modifyHotel',
        templateUrl: './components/hotels/modifyHotels/modifyHotels.view.html',
        data: {
          pageTitle: 'Modificación de hoteles'
        },
        params: {
          tempHotel: ''
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/hotels/modifyHotels/modifyHotels.controller.js')
          }]
        },
        controller: 'modifyHotelController',
        controllerAs: 'vm'
      })

    /*
         .state('logIn', {
           url: '/logIn',
           templateUrl: './components/inicioSesion/inicioSesion.view.html',
           data:{
             pageTitle: 'Inicio de sesión'
           },
           resolve: {
             load: ['$ocLazyLoad', ($ocLazyLoad) => {
               return $ocLazyLoad.load('./components/inicioSesion/inicioSesion.controller.js')
             }]
           },
           controller: 'controladorLogin',
           controllerAs: 'vm'
         })
   
         .state('main', {
           url: '/main',
           templateUrl: './components/main/main.view.html',
           data:{
             pageTitle: 'Iniciar sesión'
           },
           resolve: {
             load: ['$ocLazyLoad', ($ocLazyLoad) => {
               return $ocLazyLoad.load('./components/main/main.controller.js')
             }]
           },
           controller: 'controladorMain',
           controllerAs: 'vm'
         })
   
         $stateProvider
         .state('main.dashboard', {
           url: '/dashboard',
           templateUrl: './components/main/dashboard/mainDashboard.view.html',
           data:{
             pageTitle: 'Dashboard'
           }
         })   */


    $urlRouterProvider.otherwise('/');
  };

})();
