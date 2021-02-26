var app = angular.module('RoutingApp', ['ngRoute']);

	app.config( ['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/first', {
				templateUrl: 'first.html'
			})
			.when('/second', {
				templateUrl: 'second.html'
			})
			.otherwise({
				redirectTo: '/'
			});
          
	}]);

app.controller('loginCtrl', ['$scope', '$location', function ($scope, $location) {
     $scope.submit = function(){
     var uname = $scope.username;
     var password = $scope.password;
       if($scope.username == "admin" && $scope.password == "admin"){
      //     $location.hashPrefix(''); 
        //   $location.html5Mode(true);
          console.log(uname);
          console.log(password);
           $location.path('/first');
           
       }
     }
    }]);

app.controller('TestCtrl', ['$scope', '$location',function($scope, $location) {

$scope.click1 = function(){   
     window.location = "https://neeraja83.github.io/Book_targus/index.html";
}

$scope.click2 = function(){   
     window.location = "https://neeraja83.github.io/Book_targus/booksbr.html";
}