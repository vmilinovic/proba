(function(){
    'use strict';
angular.module('app', [
    'ngRoute',
    'dashboardModule',
    'tablesModule',
    'graphsModule'
]).config(['$routeProvider',

    function($routeProvider) {
            $routeProvider.
            when('/dashboard', {
                templateUrl: 'html/Dashboard.html',
                controller: 'dashboardCtrl'
            }).
            when('/tables', {
                templateUrl: 'html/Tables.html',
                controller: 'tablesCtrl'
            }).
            when('/graphs', {
                templateUrl: 'html/Graphs.html',
                controller: 'graphsCtrl'
            }).
            otherwise({
                redirectTo: '/dashboard'
            });

        }])
    .controller('menuCtrl', [
        '$scope', menuCtrlFn
    ]);

function menuCtrlFn ($scope) {
    $scope.data = {
        isBusy: false
    };

}

})();