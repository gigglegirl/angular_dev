//defining all the modules here 

var firstApp = angular.module('firstApp',['ngRoute']);


firstApp.config(function ($routeProvider,$locationProvider){
        $routeProvider
	        .when('/',{
	             templateUrl :'views/view2.html'
	            
	            })
	        .otherwise({redirectTo : '/' });
	        //$locationProvider.html5Mode(true);
	        
})


//local scope ,shared scope
firstApp.directive("customDirectiveShared",function(){
	
	return {

		template: 'Name: {{formData.firstName}} Last Name: {{formData.lastName}}',
		restrict: 'EA'
	}
})

//isolated scope with "=" local scope
firstApp.directive("customDirectiveIsolated",function(){
	
	return {
        scope:{name:"="},
		template: 'Name: {{name}}',
		restrict: 'EA'
	}
})

firstApp.directive("customDirectiveIsolatedWithUrl",function(){
	
	return {
        scope:{name:"="},
		templateUrl: 'views/customDirectiveTemplate.html',
		restrict: 'EA'
	}
 })



