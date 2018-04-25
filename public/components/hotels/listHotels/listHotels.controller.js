(() => {
  'use strict'
  angular
    .module('hoteles')
    .controller('listHotelsController', listHotelsController);

  listHotelsController.$inject = ['$state', '$stateParams', '$location', 'hotelsService', 'usersService'];

  function listHotelsController($state, $stateParams, $location, hotelsService, usersService) {
    let vm = this;

    vm.hotelsList = hotelsService.getHotelsData();
    vm.userAuth = usersService.getAuthUser();
    
    vm.modify = (pHotel) =>{
      $state.go('main.modifyHotel', { tempHotel: JSON.stringify(pHotel) });
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