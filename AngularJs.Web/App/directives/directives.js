(function () {
    'use strict';

    angular.module('app')
        .directive('kid', function () {
            return {
                restrict: 'E',
                scope: {},
                template: '<input type="text" ng-model="chore"> {{chore}}',
            };
        })
        .directive('messenger', function () {
            return {
                restrict: 'A',
                scope: {
                    message: "&"
                },
                template: '<input type="text" ng-model="msgValue" />' +
                    '<button ng-click="message({msgParam:msgValue})">Message</button>',
            };
        });
})();