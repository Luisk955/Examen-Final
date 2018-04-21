(() => {
  'use strict';
  angular
    .module('hoteles')
    .controller('usersController', usersController);

    usersController.$inject = ['$state','$location', 'usersService'];

  function usersController($state, $location, usersService) {
    const vm = this;

    vm.newClient = {};

    vm.registerClient = (pNewClient) =>{
      let tempClient = new User(vm.newClient.idNumber, vm.newClient.name1, vm.newClient.name2, vm.newClient.lastName1, vm.newClient.lastName2, vm.newClient.email, vm.newClient.birthDate, vm.newClient.phone, vm.newClient.password);
     
      let confirmation = usersService.setUserData(tempClient);
      if(confirmation == 'Se registró el usuario correctamente'){
        swal("Registro exitoso", "El cliente ha sido registrado correctamente", "success", {
          button: "Aceptar",
        });
        $location.path('/logIn');
      }
    }
    
  }
})();