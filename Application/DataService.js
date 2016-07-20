/// <reference path="../Scripts/angular.js" />
/// <reference path="../Scripts/angular.intellisense.js" />
/// <reference path="App.js" />

myApp.service('dataService', ['$http', function ($http) {
    var result;

    this.GetEmployeeService = function () {
        result = $http.get('/Employee/GetEmployeeList').success(function (data, status) {
            // debugger;
            result = data.result;
        }).error(function (error) {
            result = error;
            alert("Something happned wrong");

        });
        return result;
    }

   // this.verify = function (employee) { }
    this.SaveEmployee = function(employee) {
       // var result;
        alert("service called");
        result = $http.post('/Employee/SaveEmployee', employee).success(function(data, status) {
            alert(data);
            result = data;
            console.log(data);
            //$scope.success = true;
        }).error(function (error) {
            result = error;
        });
        return result;
    }
}]);