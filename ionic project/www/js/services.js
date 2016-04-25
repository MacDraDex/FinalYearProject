angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('LoginService', function($q) {
    return {
        loginUser: function(username, password) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
            if (username == 'Dexu' && password == 'maciekx1') {
                deferred.resolve();
            }else if (username == 'admin' && password == 'admin') {
                deferred.resolve();
            }else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})

