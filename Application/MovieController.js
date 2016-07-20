/// <reference path="../Scripts/angular.js" />
/// <reference path="MovieApp.js" />
/// <reference path="../Scripts/fusioncharts.js" />


movieApp.controller("MovieController", ['$scope', function ($scope) {

    $scope.edit = false;
    $scope.message = "Welcome to DotnetPiper.com to learn Angular";
    $scope.error = false;
    $scope.success = false;
    // alert("Servcie Called");

    var movies = [
                { title: "Revenent", year: "2015", rating: "5Star", plot: " A revenger Journey" },
                 { title: "Counjouring2", year: "2016", rating: "4Star", plot: " A Complete Hourror" },
                 { title: "DDLJ", year: "1995", rating: "SuperStar", plot: "Romantic love story" },
                 { title: "Sultan", year: "2016", rating: "5Star", plot: "A Warrior" },
                 { title: "BajiRao Mastani", year: "2015", rating: "4.5 Star", plot: "Film of the Year" }
    ];

    $scope.movies = movies;

    $scope.AddMovie = function (movie) {

        if ($scope.edit == true) {

            var index = $scope.movies.indexOf(movie);
            alert("edit Called");
            $scope.movies[index] = movie;
            $scope.updatedMovie = movie;
            $scope.success = true;
            $scope.movie = {};
        }
        else {
            var newMovie = {
                title: $scope.movie.title,
                year: $scope.movie.year,
                rating: $scope.movie.rating,
                plot: $scope.movie.plot
            };

            movies.push(newMovie);
            alert("Add Called");
        }
    }

    $scope.DeleteMovie = function (index) {
        alert(index);
        movies.splice(index, 1);
        console.log(index);
    }
    $scope.EditMovie = function (movie, index) {

        $scope.selectedRow = null;  // initialize our variable to null
        $scope.selectedRow = index;
        $scope.movie = movie;
        $scope.edit = true;
    }

    //$scope.dataSource = {
    //    chart: {
    //        caption: "Movie rating & details",
    //        subCaption: "Top movies of the year",
    //        numberPrefix: "",
    //        theme: "ocean"
    //    },
    //    data: movies
    //};


    $scope.mySource = {
        chart: {
            caption: "Harry's SuperMart",
            subCaption: "Top 5 stores in last month by revenue",
            theme: "ocean"
        },
        data: [{
            label: movies[0].title,
            value: movies[0].year
        },
        {
            label: "Garden Groove harbour",
            value: "730000"
        },
        {
            label: "Los Angeles Topanga",
            value: "590000"
        },
        {
            label: "Compton-Rancho Dom",
            value: "520000"
        },
        {
            label: "Daly City Serramonte",
            value: "330000"
        }]
    };




    //$scope.AddMovie = function (movie) {
    //    $http.post("/Employee/SaveEmployee", Employee).success(function (result) {
    //        $scope.TotalEmployee = result;
    //        $scope.success = true;
    //    }).error(function (result) {
    //        $scope.error = true;
    //    });
    //}

    //$scope.AddMovie = function (movie) {
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
    //dataService.GetEmployeeService().success(function (result) {
    //    //console.log(result[0]);
    //    $scope.empList = result;
    //}).error(function (result) {
    //    $scope.error = true;
    //});

    ////dataService.SaveEmployee(employee);
    //$scope.SaveEmployee = function (employee) {
    //    this.emp = employee;
    //    alert("method called");
    //    debugger;
    //    // var output;
    //    //dataService.SaveEmployee(employee);
    //    var resul = dataService.SaveEmployee(this.emp).success(function (result) {
    //        $scope.TotalEmployee = result;
    //        alert($scope.TotalEmployee);
    //        $scope.success = true;
    //    }).error(function () { $scope.error = true; });
    //};

}]);



