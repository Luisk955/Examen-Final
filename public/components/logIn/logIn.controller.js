(() => {
  'use strict';
  angular
    .module('hoteles')
    .controller('logInController', logInController);

  logInController.$inject = ['$location', 'usersService', 'logInService'];

  function logInController($location, usersService, logInService) {
    let vm = this;
    vm.listaUsuarios = usersService.getUsersData();
    vm.user = {};


    vm.logIn = (pCredentials) => {
      let log = logInService.logIn(pCredentials);

      if (log == true) {
        // swal("Datos correctos", "Sesion iniciada correctamente", "success");
        $location.path('/main');
      }
      else {
        swal("Datos erroneos", "Intente nuevamente", "error");
      }
    }
  }
})();