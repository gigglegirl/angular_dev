//defining all the controllers here

firstApp.controller("SimpleController",function ($scope,$rootScope,simpleFactory,$http){
	$scope.customers = simpleFactory.getCustomers(); //coming data from factory
	 $scope.counter = 0;
	 
      $scope.formData={};
	   $scope.onSubmit=function(){
	   	console.log($scope.formData);
	   	console.log("I am in submit function");
	   };
	 
	 //learning $watch 
	 $scope.$watch('firstName',function(newValue,oldValue){
	 $scope.counter=$scope.counter+1;
	 $scope.newValue;
	 })
	 
	 //learning rootScope
	 $rootScope.firstName="I am root scope"; //rootscope is gobal,will refelct the change in all the controllers& $scope,refelct the change only in specified controller 

	 $scope.$on("emitEvent",function(a,b){
	 	$scope.emittedMessage = b.message;
	 })	
});
   

firstApp.controller("ControllerView3",function ($scope,factory3){
	 $scope.siblings = factory3.getSiblings();
	 $scope.msg="hi";
	 $scope.$emit('emitEvent', { message: $scope.msg });

	});
