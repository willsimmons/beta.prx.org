angular.module('async-loader', [])
.factory('$scriptjs', function ($window) {
  return $window.$script;
})
.service('AsyncLoader', function ($scriptjs, $rootScope, $q) {

  this.load = function (files) {
    var loadFiles = files;
    var deferred = $q.defer();
    $scriptjs(files,
      function() {
        $rootScope.$evalAsync( function() {
          deferred.resolve(loadFiles);
        });
      },
      function(depsNotFound) {
        $rootScope.$evalAsync( function() {
          deferred.reject({load: loadFiles, notFound: depsNotFound});
        });
      }
    );

    return deferred.promise;
  };
});
