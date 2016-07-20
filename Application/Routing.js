/// <reference path="../Scripts/angular.js" />
/// <reference path="../Scripts/fusioncharts.js" />
/// <reference path="../Scripts/fusioncharts.charts.js" />
/// <reference path="../Scripts/angular-route.js" />

var routingApp = angular.module('routingApp', ['ngRoute']);

routingApp.config(['$routeProvider', function ($routeProvider) {
    //alert("Route Initiated");
    $routeProvider.
        when('/Movie', { templateUrl: '/Application/Movie.html', controller: 'MovieController' }).
        when('/SearchMovie', { templateUrl: '/Application/SearchMovie.html', controller: 'ApiMovieController' }).
         when('/Tolly', { templateUrl: '/Application/Tollywood.html', controller: 'tollyController' }).
        otherwise({ redirectTo: '/' });
}]).controller("tollyController", function ($scope) {

    $scope.tollyMessage = "Welcome to TollyWood to watch Action,Thriller and Suspence movies";

});


routingApp.controller("MovieController", ['$scope', function ($scope) {

    $scope.edit = false;
    $scope.message = "Welcome to DotnetPiper.com to learn Angular";
    $scope.error = false;
    $scope.clear = false;
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
            // alert("edit Called");
            $scope.movies[index] = movie;
            //alert(movie.rating);
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
            // alert("Add Called");
        }
    }

    $scope.DeleteMovie = function (movie, index) {

        movies.splice(index, 1);
        // $scope.movie = movie;
        $scope.updatedMovie = movie;
        $scope.success = false;
        $scope.clear = true;
        $scope.movie = {};
        console.log(index);
    }
    $scope.EditMovie = function (movie, index) {

        $scope.selectedRow = null;  // initialize our variable to null
        $scope.selectedRow = index;
        $scope.movie = movie;
        $scope.edit = true;
    }
}]);


routingApp.controller("ApiMovieController", ['$scope', '$http', function ($scope, $http) {

    $scope.SearchMovieByTitle = function () {

        var title = $scope.searchByTitle;
        alert(title);
        $http.jsonp("http://api.myapifilms.com/imdb/idIMDB?title=" + title + "&token=5bf94c9e-203f-4a6f-91d0-a63a59a77084&format=json&language=en-us&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=2&exactFilter=0&limit=5&forceYear=0&trailers=0&movieTrivia=0&awards=0&moviePhotos=0&movieVideos=0&actors=0&biography=0&uniqueName=0&filmography=0&bornAndDead=0&starSign=0&actorActress=0&actorTrivia=0&similarMovies=0&adultSearch=0&goofs=0&quotes=0&fullSize=0&companyCredits=0&callback=JSON_CALLBACK").success(function (response) {
            console.log(response);
            $scope.movies = response.data.movies;
        })
    }

    $scope.dateTime = new Date().getMinutes();
   // alert($scope.dateTime);

    document.getElementById("btnSearch").addEventListener('click', function SearchMovieByTitleDigest() {

        var title = $scope.searchByTitle;

        $scope.$watch("searchByTitle", function (newValue, oldValue)
        {
            $scope.searchByTitle = newValue;
            console.log("$scope.searchByTitle Called " + $scope.searchByTitle);
            alert($scope.searchByTitle);
        });

        //console.log(title);
        //alert(title);
        $http.jsonp("http://api.myapifilms.com/imdb/idIMDB?title=" + title + "&token=5bf94c9e-203f-4a6f-91d0-a63a59a77084&format=json&language=en-us&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=2&exactFilter=0&limit=5&forceYear=0&trailers=0&movieTrivia=0&awards=0&moviePhotos=0&movieVideos=0&actors=0&biography=0&uniqueName=0&filmography=0&bornAndDead=0&starSign=0&actorActress=0&actorTrivia=0&similarMovies=0&adultSearch=0&goofs=0&quotes=0&fullSize=0&companyCredits=0&callback=JSON_CALLBACK")
            .success(function (response) {
           
            $scope.movies = response.data.movies;
           // $scope.$digest();
        })
    });

    //document.getElementById("btnSearch").addEventListener('click', function () {
    //                console.log("Seach Started");
    //                alert("Seach Started");
    //                $scope.dateTime = new Date().getMinutes();
    //                $scope.$digest();
    //            });
}]);


