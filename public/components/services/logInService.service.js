(() => {
  'use strict';
  angular
  .module('hoteles')
  .service('logInService', logInService);

  logInService.$inject = ['$log', '$http', 'usersService'];

  function logInService($log, $http, usersService){

    const loginAPI = {
      logIn : _logIn,
      logOut : _logOut/*,
      getAuthUser: _getAuthUser*/
    };
    return loginAPI;

    function _logIn(credentials) {
      
      let usersList = usersService.getUsersData();
      let log = false;

      for(let i = 0; i < usersList.length; i++){
        if(usersList[i].email == credentials.email && usersList[i].password == credentials.password){
          usersService.setSession(
          {
            email: usersList[i].email,
            type: usersList[i].type
          }
          );
          log = true;
        }
      }
      return log;
    };

    function _logOut(){
      let cierreExitoso = usersService.closeSession();

      return cierreExitoso;
    };

    
    // function _getAuthUser() {
    //   let sessionActiva = dataStorageFactory.getSession(),
    //       usuarioActivo;

    //   if(!sessionActiva){
    //     usuarioActivo = undefined;
    //   }else{
    //     usuarioActivo = obtenerDatosUsuarioActivo(sessionActiva);
    //   }

    //   return usuarioActivo;
    // };

  }
})();
