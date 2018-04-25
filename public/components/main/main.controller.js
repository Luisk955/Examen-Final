(() => {
  'use strict';
  angular
      .module('hoteles')
      .controller('mainController', mainController);

  mainController.$inject = ['$state', 'usersService', 'logInService'];

function mainController($state, usersService, logInService){
  let vm = this;    
  vm.userAuth = usersService.getAuthUser();

  console.log(vm.userAuth);    

      if (vm.userAuth == undefined) {
          $state.go('logIn');
      }
      vm.logOut = () =>{
        logInService.logOut();
      }
  }
})();