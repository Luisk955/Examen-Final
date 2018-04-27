(() => {
  'use strict'
  angular
    .module('hoteles')
    .controller('userProfileController', userProfileController);

  userProfileController.$inject = ['$state', '$stateParams', '$location','usersService'];

  function userProfileController($state, $stateParams, $location, usersService) {
    let vm = this;

    vm.user = usersService.getAuthUser();

    vm.modify = (pUser) => {
      $state.go('main.modifyUser', { tempUser: JSON.stringify(pUser) });
    };

}
})();