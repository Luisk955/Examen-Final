(() => {
    'use strict';
    angular
    .module('hoteles')
    .directive('sideBar', sideBar);
    
    function sideBar(){
      let sidebar = {
        templateUrl: '/components/directives/sidebar/sidebar.view.html',
        restrict: 'EA'
      };
  
      return sidebar;
    }
  })();