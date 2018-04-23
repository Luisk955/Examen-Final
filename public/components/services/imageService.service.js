(()=>{
  'use strict';
  angular
  .module('hoteles')
  .service('imageService', imageService);
  
  imageService.$inject = ['$http'];
  
  function imageService($http){

    let cloudObj = {
      url:'https://api.cloudinary.com/v1_1/ldelvalleu/image/upload',
      data:{
        upload_preset: 'hoteles',
        tags:'Any',
        context:'photo=test'
      }
    };

    let publicAPI = {
      getConfiguration: _getConfiguration
    }
    return publicAPI;

    function _getConfiguration(){
      return cloudObj;
    }
  }
})();