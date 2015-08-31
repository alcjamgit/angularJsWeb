(function () {
    'use strict';

    angular.module('app')
        .controller('ScopeBindingCtrl', function () {
            var vm = this;
            vm.showMessage = function (msg) {
                alert(msg);
            };
        });
})();