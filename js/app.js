'use strict';

// csgo-buynds web-app initialization & configuration

var buyndsApp = angular.module('buyndsApp', [
    'ngRoute',
    'ui.bootstrap',
    'ui.select',
    'ngClipboard',
    'ngSanitize',
    'buyndsControllers',
    'buyndsDirectives',
    'buyndsFilters',
    'buyndsServices'
]);

buyndsApp.config(['ngClipProvider', function(ngClipProvider) {
    ngClipProvider.setPath("vendor/zeroclipboard-2.2.0/ZeroClipboard.swf");
}]);

buyndsApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        controller: 'MultiKeyGenCtrl',
        templateUrl: 'partials/multi-key-generator.phtml',
        title: 'Multi-Key Generator'
    });
    $routeProvider.when('/skg', {
        controller: 'SingleKeyGenCtrl',
        templateUrl: 'partials/single-key-generator.phtml',
        title: 'Single Key Generator'
    });
    $routeProvider.otherwise({redirectTo: '/'});
}]);

buyndsApp.run(['$rootScope', '$route', '$window', function ($rootScope, $route, $window) {
    $rootScope.$on("$routeChangeSuccess", function(){
        if ($route.current.title != null) {
            $rootScope.href = $window.location.href;
            $rootScope.title = $route.current.title;
            $window.ga('send', 'screenview', { 'screenName': $route.current.title });
        }
    });
    $rootScope.reloadPage = function () {
        $window.location.reload();
    };
}]);
