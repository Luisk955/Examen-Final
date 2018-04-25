(() => {
  'use strict';
  angular
      .module('hoteles')
      .controller('mainController', mainController);

  mainController.$inject = ['$state', 'usersService', 'logInService'];

function mainController($state, usersService, logInService){
  let vm = this;    
  const userAuth = usersService.getAuthUser();
vm.userAuth = userAuth;
  console.log(userAuth);    

      if (userAuth == undefined) {
          $state.go('logIn');
      }
  }
})();