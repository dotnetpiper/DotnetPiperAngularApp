/// <reference path="App.js" />
/// <reference path="DataService.js" />
/// <reference path="Login.html" />
/// <reference path="../Scripts/angular.js" />



myApp.directive("login", function () {

    var directive = {};

    //restrict = E, signifies that directive is Element directive
    directive.restrict = 'E';

    //template replaces the complete element with its text. 
    directive.templateUrl = "/Application/Login.html";//"My first directive";

    return directive;

});


myApp.controller("DotnetPiperController", ['$scope', 'dataService', function ($scope, dataService) {

    $scope.message = "Welcome to DotnetPiper.com to learn Angular";
    $scope.error = false;
    // alert("Servcie Called");

    //$scope.SaveEmployee = function (Employee) {
    //    $http.post("/Employee/SaveEmployee", Employee).success(function (result) {
    //        $scope.TotalEmployee = result;
    //        $scope.success = true;
    //    }).error(function (result) {
    //        $scope.error = true;
    //    });
    //}

    //$http.get("/Employee/GetEmployeeList").success(function (result) {
    //    $scope.empList = result;
    //}).error(function (result) {
    //    $scope.error = true;
    //});

    // var result = dataService.GetEmployeeService();

   
   // dataService.verify(emp);
    dataService.GetEmployeeService().success(function (result) {
        //console.log(result[0]);
        $scope.empList = result;
    }).error(function (result) {
        $scope.error = true;
    });

    //dataService.SaveEmployee(employee);
    $scope.SaveEmployee = function (employee) {
        this.emp = employee;       
        alert("method called");
        debugger;
        // var output;
        //dataService.SaveEmployee(employee);
      var result =  dataService.SaveEmployee(this.emp).success(function (result) {
          $scope.TotalEmployee = result;
            alert($scope.TotalEmployee);
            $scope.success = true;
        }).error(function () { $scope.error = true; });
    };

}]);



