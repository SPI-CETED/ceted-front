(function () {
    'use strict';

    function ValidationService() {
        var self = this;

        self.objectToArray = function (obj) {
            var array = [];
            array = Object.keys(obj).map(function (key) {
                return obj[key];
            });

            return array;
        };

        self.validateForm = function (form) {
            var formValid = true;
            var formArray = self.objectToArray(form);

            for (var i = 0; i < formArray.length; i++) {
                if (typeof formArray[i] === 'object' && formArray[i].hasOwnProperty('$modelValue')) {
                    if (!self.validateField(form, formArray[i])) {
                        formValid = false;
                    }
                }
            }

            return formValid;
        };

        self.validateField = function (form, field) {
            if (field.$invalid) {
                form[field.$name]._errorClass = "has-error";
                return false;
            } else {
                form[field.$name]._errorClass = undefined;
                return true;
            }
        };

        self.cleanForm = function (form) {
            var formArray = self.objectToArray(form);
            form.$setPristine();
            for (var i = 0; i < formArray.length; i++) {
                if (typeof formArray[i] === 'object' && formArray[i].hasOwnProperty('$modelValue')) {
                    var field = formArray[i];
                    form[field.$name]._errorClass = undefined;
                }
            }
        };

        self.validateEmail = function (email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        };

    }

    module.exports = angular.module('validationService', [])
        .service('validationService', ValidationService)
        .name;

})();
