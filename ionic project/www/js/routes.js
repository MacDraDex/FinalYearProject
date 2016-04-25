angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

   .state('login', {
    url: '/page1',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  .state('menu', {
    url: '/page2',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('addRecord', {
    url: '/page3',
    templateUrl: 'templates/addRecord.html',
    controller: 'addRecordCtrl'
  })

  .state('displayRecord', {
    url: '/page4',
    templateUrl: 'templates/displayRecord.html',
    controller: 'displayRecordCtrl'
  })

  .state('about', {
    url: '/page5',
    templateUrl: 'templates/about.html',
    controller: 'aboutCtrl'
  })

  .state('search', {
    url: '/page6',
    templateUrl: 'templates/search.html',
    controller: 'searchCtrl'
  })

  .state('delete', {
    url: '/page7',
    templateUrl: 'templates/delete.html',
    controller: 'deleteCtrl'
  })
   .state('update', {
    url: '/page8',
    templateUrl: 'templates/update.html',
    controller: 'updateCtrl'
  })


$urlRouterProvider.otherwise('/page1')

  

});