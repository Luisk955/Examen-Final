(() => {
  'use strict';
  angular
    .module('hoteles')
    .controller('modifyUserController', modifyUserController);

  modifyUserController.$inject = ['$http', '$stateParams', '$state', '$location', 'usersService'];

  function modifyUserController($http, $stateParams, $state, $location, usersService) {
    let vm = this;

    vm.modifyUser = {};

    vm.objNewUser = {};

    // if(servicioUsuarios.getRol() == '1') {
    //   let sesion = JSON.parse(sessionStorage.getItem('sesion'));
    //   let usersList = servicioUsuarios.getUsuarios();
    //   for (let i = 0; i < usersList.length; i++) {
    //     if(usersList[i].correo == sesion.correo){
    //       vm.objNewUser = new Usuario(usersList[i].cedula, usersList[i].foto, usersList[i].primerNombre, usersList[i].segundoNombre, usersList[i].primerApellido, usersList[i].segundoApellido, usersList[i].correo, usersList[i].telefono, usersList[i].fechaNacimiento, usersList[i].provincia, usersList[i].canton, usersList[i].distrito, usersList[i].direccionExacta, usersList[i].contrasenna, '1'); 
    //     }

    //   }
    // }
    // else {
      let userToModify = JSON.parse($stateParams.tempUser);
      vm.objNewUser = new User(userToModify.idNumber, userToModify.name1, userToModify.name2, userToModify.lastName1, userToModify.lastName2, userToModify.email, userToModify.birthDate, userToModify.phone, userToModify.password, '1');
      vm.objNewUser.setId(userToModify._id);
    // }

      vm.modifyUser.idNumber = vm.objNewUser.idNumber;
      vm.modifyUser.name1 = vm.objNewUser.name1;
      vm.modifyUser.name2 = vm.objNewUser.name2;
      vm.modifyUser.lastName1 = vm.objNewUser.lastName1;
      vm.modifyUser.lastName2 = vm.objNewUser.lastName2;
      vm.modifyUser.email = vm.objNewUser.email;
      vm.modifyUser.birthDate = new Date(vm.objNewUser.birthDate);
      vm.modifyUser.phone = vm.objNewUser.phone;
    

    

    vm.modifUser = (pUser) => {
      let usersList = usersService.getUsersData();

      usersList.forEach(objUser => {
        if (objUser._id == vm.objNewUser._id) {
          objUser.idNumber = pUser.idNumber;
          objUser.name1 = pUser.name1;
          objUser.name2 = pUser.name2;
          objUser.lastName1 = pUser.lastName1;
          objUser.lastName2 = pUser.lastName2;
          objUser.birthDate = pUser.birthDate;
          objUser.phone = pUser.phone;
    

          usersService.updateUserData(objUser);

        }
      });
      swal("Edición exitosa", "Usuario modificado correctamente", "success", {
        button: "Aceptar",
      });
      $location.path('/listUser');

      // let sesion = JSON.parse(sessionStorage.getItem('sesion'));
      // if(sesion.tipo == '5'){
      //   $state.go('main.listarCliente');
      // }
      // else{
      //   $state.go('main.dashboard');
      // }
      
    }
  }

})();