(function () {
    'use strict';

    angular.module('app')
        .controller('HomeCtrl', function () {
            var vm = this;
            vm.AppName = "Angular JS Playground";
            vm.showMessage = function (msg) {
                alert(msg);
            };
        });
})();