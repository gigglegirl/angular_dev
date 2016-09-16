//defining all the modules here 

var firstApp = angular.module('firstApp',['ngRoute']);


firstApp.config(function ($routeProvider){
        $routeProvider
	        .when('/',{
	             templateUrl :'views/view2.html'
	            
	            })
	        .otherwise({redirectTo : '/' });
	        
})

firstApp.directive("customDirective",function(){
	return {
		templateUrl: 'customDirectiveTemplate.html',
		restrict: 'EA'
	}
})





