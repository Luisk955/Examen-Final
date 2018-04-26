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
      $state.go('main.modifyUser', { tempUser: JSON.stringify(pUser) });
    };
    

    vm.changeState = (pState, pUser) => {
      let usersList = usersService.getUsersData();
      let user = {};
      for (let i = 0; i < usersList.length; i++) {
        if (usersList[i].email == pUser.email) {
          usersList[i].changeState(pState);
          
          usersService.updateUserData(usersList[i]);
        }
      };
      location.reload();
    };
  }
})();