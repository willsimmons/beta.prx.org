var angular = require('angular');

// ads module
var app = angular.module('prx.ads', []);
module.exports = app.name;

// configure
app.directive('prxAd', require('./ads.directive'));