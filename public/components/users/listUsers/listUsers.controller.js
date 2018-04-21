(() => {
  'use strict'
  angular
    .module('hoteles')
    .controller('listUsersController', listUsersController);

  listUsersController.$inject = ['$state', '$stateParams', '$location', 'usersService'/*, 'imageService'*/];

  function listUsersController($state, $stateParams, $location, usersService/*, imageService*/) {
    let vm = this;

    vm.usersList = usersService.getUsersData();

    vm.modify = (pUser) =>{
      $state.go('modifyUser', { tempUser: JSON.stringify(pUser) });
    };
    

        // vm.cambiarEstado =(pEstado, pUsuario)=>{
    //   let listaUsuarios = servicioUsuarios.getUsuarios();
    //   let usuario = {};
    //   for (let i = 0; i < listaUsuarios.length; i++) {
    //     if(listaUsuarios[i].correo == pUsuario.correo){
    //       listaUsuarios[i].cambiarEstado(pEstado);
    //       usuario = listaUsuarios[i];
    //     }
    //   }
    //   servicioUsuarios.actualizarUsuario(usuario);
    //   vm.listaClientes = listarClientes();
    // }

 
  }
})();