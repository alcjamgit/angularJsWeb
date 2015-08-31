(function () {
    'use strict';

    angular.module('app')
        .controller('ScopeInheritanceCtrl', function () {
            var vm = this;
            vm.showMessage = function (msg) {
                alert(msg);
            };
        });
})();