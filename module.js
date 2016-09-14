//defining all the modules here 

var firstApp = angular.module('firstApp',['ngRoute']);


firstApp.config(function ($routeProvider){
        $routeProvider
	        .when('/',{
	             templateUrl :'views/view2.html'
	            
	            })
	        .when('/view3',{
	             templateUrl :'views/view3.html',
	             controller:'ControllerView3'
	            
	            })
	        .otherwise({redirectTo : '/' });
	        
})

/*var config = {
			    apiKey: "AIzaSyDtldy3qsefAky0Es3P6tQc8cLtL3dgexg",
			    authDomain: "angular-basic-app.firebaseapp.com",
			    databaseURL: "jdbc:mysql://127.0.0.1:3306/departmentmaster_db?user=root"",
			    storageBucket: "angular-basic-app.appspot.com",
			  };*/
       ///  firebase.initializeApp(config);
        //var rootRef = firebase.database().ref();


/*firstApp.directive('validationDirective',function(){
	return 
	{
		template: "<b>I am custom Directive</b>",
		restrict: "E"
	}
})*/





