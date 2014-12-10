parking.controller("parkingCtrl", function ($scope) {
	$scope.appTitle = "Parking App";
	$scope.showAlert = true;
	$scope.alertTopic = "Something went wrong!";
	$scope.alertMessage = "You must inform the plate and the color of the car!";
	
	$scope.closeAlert = function () {
		$scope.showAlert = false;
	};

	$scope.cars = [
		{plate: '6MBV006', color: "White"},
		{plate: '5BBM299', color: "Red"},
		{plate: '5AOJ230', color: "Blue"}
	];
	$scope.colors = ["White", "Black", "Blue", "Red", "Silver"];

	$scope.park = function (car) {
		car.entrance = new Date();
		$scope.cars.push(car);
		delete $scope.car;
	};
});