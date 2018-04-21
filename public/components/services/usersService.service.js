(() => {
  'use strict';
  angular
    .module('hoteles')
    .service('usersService', usersService)

  usersService.$inject = ['$log', '$http'];

  function usersService($log, $http) {



    let publicAPI = {
      setUserData: _setUserData,
      getUsersData:_getUsersData
    }
    return publicAPI

    function _setUserData (data) {
      let response;

      let petition = $.ajax ({
        url: 'http://localhost:4000/api/save_user',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          idNumber: data.idNumber,
          name1: data.name1,
          name2: data.name2,
          lastName1: data.lastName1,
          lastName2: data.lastName2,
          email: data.email,
          birthDate: data.birthDate,
          phone: data.phone,
          password: data.password,
          type: data.type,
        },
      });

      petition.done (datos => {
        response = datos.msj;
        console.log ('Petición realizada con éxito');
      });
      petition.fail (error => {
        response = error;
        console.log ('Ocurrió un error');
      });

      return response;
    }

    function _getUsersData () {
      let usersList = [];

      let petition = $.ajax ({
        url: 'http://localhost:4000/api/get_all_users',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {},
      });

      petition.done (users => {
        console.log ('Datos que vienen desde la base de datos');
        console.log (users);
        usersList = users;
      });
      petition.fail (() => {
        usersList = [];
        console.log ('Ocurrió un error');
      });

      return usersList;
    }



  };




})();