//defining all the factories,services here

firstApp.factory('simpleFactory', function(){
	var customers  =[
		 {name:'laxmi',city:'bhopal'},
		 {name:'ashish',city:'kanpur'},
		 {name:'sunnu',city:'raipur'}];

	var factory={};
	factory.getCustomers = function(){
		return customers;
	}
	return factory;
});


firstApp.factory('factory3', function(){
	var siblings  =[
		 {name:'sanju',city:'bhopal'},
		 {name:'ramya',city:'bangalore'}];

	var factory={};
	factory.getSiblings = function(){

		return siblings;
	}
	return factory;
})


firstApp.factory('modelViewFactory', function(){
	var data  =
		 {name:'sanju',city:'bhopal'}
	return data;
})








