//defining all the modules here 

var firstApp = angular.module('firstApp',['ngRoute']);


firstApp.config(function ($routeProvider){
        $routeProvider
	        .when('/',{
	             templateUrl :'views/view2.html',
	             controller:'SimpleController'
	            
	            })
	        .when('/view3',{
	             templateUrl :'views/view3.html',
	             controller:'ControllerView3'
	            
	            })
	        .otherwise({redirectTo : '/' });
	        
});









