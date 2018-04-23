(() => {
  'use strict';
  angular
    .module('hoteles')
    .service('usersService', usersService)

  usersService.$inject = ['$log', '$http'];

  function usersService($log, $http) {



    let publicAPI = {
      setUserData: _setUserData,
      getUsersData: _getUsersData,
      updateUserData: _updateUserData,
      setSession: _setSession,
      closeSession: _closeSession
    }
    return publicAPI


    //Inicio Usuarios


    function _setUserData(data) {
      let response;

      let petition = $.ajax({
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

      petition.done(datos => {
        response = datos.msj;
        _sendMail(data);
        console.log('Petición realizada con éxito');
      });
      petition.fail(error => {
        response = error;
        console.log('Ocurrió un error');
      });

      return response;
    }

    function _getUsersData() {
      let usersList = [];

      let petition = $.ajax({
        url: 'http://localhost:4000/api/get_all_users',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {},
      });

      petition.done(users => {
        console.log('Datos que vienen desde la base de datos');
        console.log(users);
        users.forEach(objUser => {
          let date = new Date(objUser.birthDate);
          objUser.birthDate = date;
          let userTemp = Object.assign(new User(), objUser);

          console.log(userTemp);
          usersList.push(userTemp);
        });
        // usersList = users;
      });
      petition.fail(() => {
        usersList = [];
        console.log('Ocurrió un error');
      });

      return usersList;
    }

    function _updateUserData(data) {
      let response;

      let petition = $.ajax({
        url: 'http://localhost:4000/api/update_user',
        type: 'put',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          'idNumber': data.idNumber,
          'name1': data.name1,
          'name2': data.name2,
          'lastName1': data.lastName1,
          'lastName2': data.lastName2,
          'email': data.email,
          'birthDate': data.birthDate,
          'phone': data.phone,
          'password': data.password,
          'type': data.type,
        }
      });

      petition.done((datos) => {
        response = datos.success;
        console.log('Petición realizada con éxito');
      });
      petition.fail(error => {
        response = error;
        console.log('Ocurrió un error');
      });

      return response;
    }

    //Final Usuarios

    //
    //Inicio Autenticación
    //


    function _setSession(value) {
      let response = true;
      sessionStorage.setItem('session', JSON.stringify(value));
      return response;
    }


    function _closeSession() {
      let response = true;
      sessionStorage.removeItem('session');
      return response;
    }


    function _getSession() {
      let sessionActive = JSON.parse(sessionStorage.getItem('session'));

      return sessionActive;
    }



    //
    //Inicio envio correo
    //
//
    //Inicio envio correo
    //
    function _sendMail (data) {
      let response;
      console.log(data);
      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/mail',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          email: data.email,
          password: data.password,
          subject: 'Bienvenido ' + data.name1 +' ' + data.name2 + ' ' + data.lastName1
        },
      });

      peticion.done (datos => {
        response = datos.success;
        console.log ('Petición realizada con éxito');
      });
      peticion.fail (error => {
        response = error;
        console.log ('Ocurrió un error');
      });

      return response;
    }

    //
    //Final envio correo
    //

  };




})();