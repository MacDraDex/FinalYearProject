// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app =angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });0
})

app.controller('ctrlCustomers', function($scope, $http) {

    $http.get("http://localhost/query.php")
	.success(function (response) {$scope.names = response.records;});
  
});

// controller to pull the customer records from a database
app.controller('ctrlSearchCustomers', function($scope, $http) {
    $scope.id;
	
	$scope.search = function() {
        $http({
              method: 'GET',
              url: "http://localhost/search.php",
              params: {id: $scope.id}
            })
          .success(function(data) {
            $scope.record = data;
            console.log($scope.record);
        })
          .error(function(data) {
            alert("error");
        })
    }
    $scope.searchByMake = function() {
        $http({
              method: 'GET',
              url: "http://localhost/searchByMake.php",
              params: {make: $scope.make}
            })
          .success(function(data) {
            $scope.record = data;
            console.log($scope.record);
        })
          .error(function(data) {
            alert("error");
        })
    }
     $scope.searchByFuel = function() {
        $http({
              method: 'GET',
              url: "http://localhost/searchByFuel.php",
              params: {fuel: $scope.fuel}
            })
          .success(function(data) {
            $scope.record = data;
            console.log($scope.record);
        })
          .error(function(data) {
            alert("error");
            deferred.reject('No such record.');
        })
    }
});

//controller to delete customer from database by ID in progress
app.controller('ctrlDeleteCustomers', function($scope, $http,$state) {
    $scope.delId;
	
	$scope.delete = function() {
        $http({
              method: 'GET',
              url: "http://localhost/delete.php",
              params: {delId: $scope.delId}
            
            })
        .success(function(data) {
            $state.go('displayRecord');
        })
          .error(function(data) {
            alert("error");
        })
    
    }
    
});

//controller to insert a new record in a database, no textbox ID because a record is automatically auto-incremented
app.controller('ctrlInsert', function($scope, $http, $state) {
    $scope.insert = function(){
        $http.post("http://localhost/insert.php", {'name':$scope.name, 'surname':$scope.surname,
                                                  'mobile':$scope.mobile, 'addr':$scope.addr,
                                                  'make':$scope.make, 'model':$scope.model,
                                                  'fuelType':$scope.fuelType, 'engSize':$scope.engSize,
                                                  'carMil':$scope.carMil, 'problemDesc':$scope.problemDesc})
       
        
        .success(function(data, status, headers, config){
            console.log("inserted Successfully");
        });
        $scope.name = ' ';
        $scope.surname = ' ';
        $scope.mobile = ' ';
        $scope.addr = ' ';
        $scope.make = ' ';
        $scope.model = ' ';
        $scope.fuelType = ' ';
        $scope.engSize= ' ';
        $scope.carMil = ' ';
        $scope.problemDesc = ' ';
        $state.go('menu');
     
    }
     
    
});

//controller to update customer by id
app.controller('ctrlUpdateCustomers', function($scope, $http,$state) {
    $scope.update = function(){
        $http.post("http://localhost/update.php", {'id':$scope.id,'name':$scope.name, 'surname':$scope.surname,
                                                  'mobile':$scope.mobile, 'addr':$scope.addr,
                                                  'make':$scope.make, 'model':$scope.model,
                                                  'fuelType':$scope.fuelType, 'engSize':$scope.engSize,
                                                  'carMil':$scope.carMil, 'problemDesc':$scope.problemDesc})
       
        
        .success(function(data, status, headers, config){
            console.log("updated Successfully");
        });
        $scope.id = ' ';
        $scope.name = ' ';
        $scope.surname = ' ';
        $scope.mobile = ' ';
        $scope.addr = ' ';
        $scope.make = ' ';
        $scope.model = ' ';
        $scope.fuelType = ' ';
        $scope.engSize= ' ';
        $scope.carMil = ' ';
        $scope.problemDesc = ' ';
        $state.go('menu');
     
    }
});

// controller to login 
app.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.login = function() {
        LoginService.loginUser($scope.username, $scope.password).success(function(data) {
            $state.go('menu');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
});
