(() => {
  'use strict';
  angular
    .module('hoteles')
    .controller('registerHotelsController', registerHotelsController);

  registerHotelsController.$inject = ['$http', '$state', '$location', 'hotelsService', 'imageService', 'Upload', 'NgMap'];

  function registerHotelsController($http, $state, $location, hotelsService, imageService, Upload, NgMap) {
    const vm = this;

    vm.newHotel = {};

    vm.provincias = $http({
      method: 'GET',
      url: './sources/data/provincias.json'
    }).then((success) => {
      vm.provincias = success.data;
    }, (error) => {
      console.log("Ocurrió un error " + error.data);
    });

    vm.rellenarCantones = (pidProvincia) => {
      vm.cantones = $http({
        method: 'GET',
        url: './sources/data/cantones.json'
      }).then((success) => {
        let cantones = [];
        for (let i = 0; i < success.data.length; i++) {
          if (pidProvincia == success.data[i].idProvincia) {
            cantones.push(success.data[i]);
          }
        }
        vm.cantones = cantones;
      }, (error) => {
        console.log("Ocurrió un error " + error.data)
      });
    }

    vm.rellenarDistrito = (pidCanton) => {
      console.log(pidCanton);
      vm.distritos = $http({
        method: 'GET',
        url: './sources/data/distritos.json'
      }).then((success) => {
        let distritos = [];
        for (let i = 0; i < success.data.length; i++) {
          if (pidCanton == success.data[i].idCanton) {
            distritos.push(success.data[i]);
          }
        }
        vm.distritos = distritos;
      }, (error) => {
        console.log("Ocurrió un error " + error.data)
      });
    }


    vm.cloudObj = imageService.getConfiguration();

    vm.preRegisterHotel = (pNewHotel) => {
      vm.cloudObj.data.file = pNewHotel.photo[0];
      Upload.upload(vm.cloudObj).success((data) =>{
        vm.registerHotel(pNewHotel, data.url);
     });
    }

    vm.getCurrentLocation = ($event) => {
      let postion = [$event.latLng.lat(), $event.latLng.lng()];
      console.log(postion);
      vm.current = postion;
    }
    
    vm.registerHotel = (pNewHotel, imgUrl) => {
      pNewHotel.photo = imgUrl;
      pNewHotel.state = 'activo';
      pNewHotel.latitude = vm.current[0];
      pNewHotel.longitude = vm.current[1];

      let tempHotel = Object.assign(new Hotel(), pNewHotel);

      let confirmation = hotelsService.setHotelData(tempHotel);
      if (confirmation == 'Se registró el hotel correctamente') {
        swal("Registro exitoso", "El hotel ha sido registrado correctamente", "success", {
          button: "Aceptar",
        });
        $location.path('/main/listHotels');
      }
    }
  }
})();