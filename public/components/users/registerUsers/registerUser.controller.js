(() => {
  'use strict';
  angular
    .module('hoteles')
    .controller('registerUsersController', registerUsersController);

    registerUsersController.$inject = ['$state','$location', 'usersService'];

  function registerUsersController($state, $location, usersService) {
    const vm = this;

    vm.newClient = {};
    
    vm.calculateAge = (birthDate) => { // birthDate is a date
      var ageDifMs = Date.now() - birthDate.getTime();
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      console.log(Math.abs(ageDate.getUTCFullYear() - 1970));
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    vm.userAuth = usersService.getAuthUser();
    console.log(vm.userAuth);

    vm.registerClient = (pNewClient) =>{
      let age = Number(vm.calculateAge(pNewClient.birthDate));

      if(age >= 18){
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
      else{
        swal("Registro fallido", "El cliente no cumple con la edad requerida.", "error", {
          button: "Aceptar", confirmButtonColor: 'white',
        });
      }
     
    }
    
  }
})();