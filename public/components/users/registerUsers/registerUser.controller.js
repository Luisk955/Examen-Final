(() => {
  'use strict';
  angular
    .module('hoteles')
    .controller('registerUsersController', registerUsersController);

    registerUsersController.$inject = ['$state','$location', 'usersService'];

  function registerUsersController($state, $location, usersService) {
    const vm = this;

    vm.newClient = {};

    vm.userAuth = usersService.getAuthUser();
    console.log(vm.userAuth);

    vm.registerClient = (pNewClient) =>{
      pNewClient.type = 1;
      
      let tempClient = Object.assign(new User(), pNewClient);
     
      let confirmation = usersService.setUserData(tempClient);
      if(confirmation == 'Se registró el usuario correctamente'){
    
        swal("Registro exitoso", "El cliente ha sido registrado correctamente", "success", {
          button: "Aceptar",
        });
        if(vm.userAuth != 'administrador@hoteleria.cr'){
          $location.path('/logIn');
        }
        else{
          $location.path('main/listUser');
        }        
      }
    }
    
  }
})();