(function () {
    'use strict';

    angular.module('app', ['ngRoute']).
        config(function ($routeProvider, $locationProvider) {
            $routeProvider.when( '/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl as vm'
            })
            .when('/scopeBinding', {
                templateUrl: 'views/scopeBinding.html',
                controller: 'ScopeBindingCtrl as vm'
            })
            .when('/scopeInheritance', {
                templateUrl: 'views/scopeInheritance.html',
                controller: 'ScopeInheritanceCtrl as vm'
            });

            $locationProvider.html5Mode(true);

        });
    

})();