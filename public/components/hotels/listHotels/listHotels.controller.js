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
    
    vm.changeState = (pState, pHotel) => {
      let hotelsList = hotelsService.getHotelsData();
      let user = {};
      for (let i = 0; i < hotelsList.length; i++) {
        if (hotelsList[i].name == pHotel.name) {
          hotelsList[i].changeState(pState);
          
          hotelsService.updateHotelData(hotelsList[i]);
        }
      };
      location.reload();
    };
  }
})();