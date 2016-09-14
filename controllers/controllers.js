//defining all the controllers here

firstApp.controller("SimpleController",function ($scope,$rootScope,simpleFactory,$http){
	$scope.customers = simpleFactory.getCustomers(); //coming data from factory
	 $scope.counter = 0;
	 
      $scope.formData={};
	   $scope.onSubmit=function(){
	   	console.log($scope.formData);
	   	console.log("I am in submit function");

	   	$http.post('https://minmax-server.herokuapp.com/register/',$scope.formData)
	   	.success(function(data){
	   		console.log("I am succesfull")
	   	 })
	   	.error(function(data){
	   		console.log("I got some erroe")
	   	 })
	   };
	 
	 //learning $watch 
	 $scope.$watch('firstName',function(newValue,oldValue){
	 $scope.counter=$scope.counter+1;
	 $scope.newValue;
	 })
	 
	 //learning rootScope
	 $rootScope.firstName="I am root scope"; //rootscope is gobal,will refelct the change in all the controllers& $scope,refelct the change only in specified controller 
	               
    //Learning cancel route change
	 $scope.$on("$routeChangeStart",function(event,next,current){  //1st parameter name of event which occurs when rout change is there->2nd parameter is event handler function
      if(!confirm("Are You sure you want to navigate to "+next.$$route.originalPath)){
        event.preventDefault();
      }
	 })  

	 $scope.$on("emitEvent",function(a,b){
	 	$scope.emittedMessage = b.message;
	 })	
});
   

firstApp.controller("ControllerView3",function ($scope,factory3){
	 $scope.siblings = factory3.getSiblings();
	 $scope.msg="hi";
	 $scope.$emit('emitEvent', { message: $scope.msg });
     
	

	});
