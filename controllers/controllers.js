//defining all the controllers here

firstApp.controller("SimpleController",function ($scope,$rootScope,simpleFactory){
	$scope.customers = simpleFactory.getCustomers(); //coming data from factory	 
       $scope.formData={};
	   $scope.onSubmit=function(){
	   console.log($scope.formData);
	   console.log("I am in submit function");
	   };
});
