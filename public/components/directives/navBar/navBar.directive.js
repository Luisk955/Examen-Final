(() => {
  'use strict';
  angular
      .module('hoteles')
      .directive('navBar', navBar);

      navBar.$inject = ['$state'];

  function navBar($state) {
     
    let vm = this;
      let navegacion = {
          templateUrl: '/components/directives/navBar/navBar.view.html',
        restrict: 'EA'
        //,
        //   require: "ngClick",
        //   controller: navegacionPrincipalControlador,
        //   controllerAs: 'vm'
      };
      return navegacion;
  };
})();