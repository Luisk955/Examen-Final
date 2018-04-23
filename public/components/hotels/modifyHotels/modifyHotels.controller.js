(() => {
  'use strict';
  angular
    .module('hoteles')
    .controller('modifyHotelController', modifyHotelController);

  modifyHotelController.$inject = ['$http', '$stateParams', '$state', '$location', 'hotelsService'];

  function modifyHotelController($http, $stateParams, $state, $location, hotelsService) {
    let vm = this;

    vm.modifyHotel = {};

    vm.objNewHotel = {};

    // if(servicioUsuarios.getRol() == '1') {
    //   let sesion = JSON.parse(sessionStorage.getItem('sesion'));
    //   let hotelsList = servicioUsuarios.getUsuarios();
    //   for (let i = 0; i < hotelsList.length; i++) {
    //     if(hotelsList[i].correo == sesion.correo){
    //       vm.objNewHotel = new Usuario(hotelsList[i].cedula, hotelsList[i].foto, hotelsList[i].primerNombre, hotelsList[i].segundoNombre, hotelsList[i].primerApellido, hotelsList[i].segundoApellido, hotelsList[i].correo, hotelsList[i].telefono, hotelsList[i].fechaNacimiento, hotelsList[i].provincia, hotelsList[i].canton, hotelsList[i].distrito, hotelsList[i].direccionExacta, hotelsList[i].contrasenna, '1'); 
    //     }

    //   }
    // }
    // else {
      let hotelToModify = JSON.parse($stateParams.tempHotel);
      vm.objNewHotel = Object.assign(new Hotel(), hotelToModify);
      vm.objNewHotel.setId(hotelToModify._id);
    // }

      vm.modifyHotel.name = vm.objNewHotel.name;
      vm.modifyHotel.latitude = vm.objNewHotel.latitude;
      vm.modifyHotel.longitude = vm.objNewHotel.longitude;
      vm.modifyHotel.province = vm.objNewHotel.province;
      vm.modifyHotel.canton = vm.objNewHotel.canton;
      vm.modifyHotel.district = vm.objNewHotel.district;
      vm.modifyHotel.exactDirection = vm.objNewHotel.exactDirection;
      vm.modifyHotel.servicePhone = vm.objNewHotel.servicePhone;
      vm.modifyHotel.serviceEmail = vm.objNewHotel.serviceEmail;
      vm.modifyHotel.reservationPhone = vm.objNewHotel.reservationPhone;
      vm.modifyHotel.reservationEmail = vm.objNewHotel.reservationEmail;
      vm.modifyHotel.photo = vm.objNewHotel.photo;
    

    

    vm.modifHotel = (pHotel) => {
      let hotelsList = hotelsService.getHotelsData();

      hotelsList.forEach(objHotel => {
        if (objHotel._id == vm.objNewHotel._id) {
          objHotel.name = pHotel.name;
          objHotel.latitude = pHotel.latitude;
          objHotel.longitude = pHotel.longitude;
          objHotel.province = pHotel.province;
          objHotel.canton = pHotel.canton;
          objHotel.district = pHotel.district;
          objHotel.exactDirection = pHotel.exactDirection;
          objHotel.servicePhone = pHotel.servicePhone;
          objHotel.serviceEmail = pHotel.serviceEmail;
          objHotel.reservationPhone = pHotel.reservationPhone;
          objHotel.reservationEmail = pHotel.reservationEmail;
          objHotel.photo = pHotel.photo;
    

          hotelsService.updateHotelData(objHotel);

        }
      });
      swal("Edición exitosa", "Hotel modificado correctamente", "success", {
        button: "Aceptar",
      });

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