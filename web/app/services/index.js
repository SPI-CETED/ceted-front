var loaderService = require('./loader');
var toastrService = require('./toastr');
var bootBoxService = require('./bootbox');
var dateService = require('./date');
var validationService = require('./validation');
var modalService = require('./modal');
var blobService = require('./blob');
var configSystemService = require('./configSystem');
var loginService = require('./login-service');
var pnotfyService = require('./pnotify-service');
var profileService = require('./profile-service');
var genderService = require('./gender-service');
var maritialStatusService = require('./maritial-status-service');

module.exports =  angular.module('you-movin.services', [
    loaderService,
    toastrService,
    bootBoxService,
    dateService,
    validationService,
    modalService,
    blobService,
    configSystemService,
    loginService,
    pnotfyService,
    profileService,
    genderService,
    maritialStatusService
  ])
  .name;
