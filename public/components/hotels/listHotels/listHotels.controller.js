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
    vm.hotelCalif;
    vm.rate1;
    vm.rate2;
    vm.rate3;
    vm.rate4;
    vm.rate5;

    vm.setHotelCalif = (pHotel) => {
      vm.hotelCalif = pHotel;
    }

    vm.modify = (pHotel) => {
      $state.go('main.modifyHotel', { tempHotel: JSON.stringify(pHotel) });
    };

    vm.changeState = (pState, pHotel) => {
      let hotelsList = hotelsService.getHotelsData();
      for (let i = 0; i < hotelsList.length; i++) {
        if (hotelsList[i].name == pHotel.name) {
          hotelsList[i].changeState(pState);

          hotelsService.updateHotelData(hotelsList[i]);
        }
      };
      location.reload();
    };

    vm.onItemRatingCocina = function (ratingCocina) {
      console.log('rating1', ratingCocina);

      vm.rate1 = Number(ratingCocina);

      return vm.rate1;
    };

    vm.onItemRatingCalidadServicio = function (ratingCalidadServicio) {
      console.log('rating1', ratingCalidadServicio);
      vm.rate2 = Number(ratingCalidadServicio);
      return vm.rate2;
    };

    vm.onItemRatingHabitaciones = function (ratingHabitaciones) {
      console.log('rating3', ratingHabitaciones);

      vm.rate3 = Number(ratingHabitaciones);
      return vm.rate3;
    };

    vm.onItemRatingInfrastructura = function (ratingInfrastructura) {
      console.log('rating4', ratingInfrastructura);

      vm.rate4 = Number(ratingInfrastructura);
      return vm.rate4;
    };

    vm.onItemRatingLimpieza = function (ratingLimpieza) {
      console.log('rating5', ratingLimpieza);

      vm.rate5 = Number(ratingLimpieza);
      return vm.rate5;
    };

    vm.addRate = () => {
      let hotelsList = hotelsService.getHotelsData();
      
      
      for (let i = 0; i < hotelsList.length; i++) {
        if (hotelsList[i].name == vm.hotelCalif.name) {
          let rate = Number((vm.rate1 + vm.rate2 + vm.rate3 + vm.rate4 + vm.rate5) / 5);
          hotelsList[i].addRatingQuant();
          let rateFinal = (rate + hotelsList[i].rating / hotelsList[i].ratingQuant);
          hotelsList[i].setRating(rateFinal);
          hotelsService.updateHotelData(hotelsList[i]);
        }
      };
      location.reload();
    };

  }
})();