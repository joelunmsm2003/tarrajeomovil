
angular

.module('app', ['ngMap','ngSanitize','angular-input-stars','rzModule','ui.router','ngStorage','ui.bootstrap','ngAnimate','ngTouch','ngScrollTo','flow','xeditable','ngResource','gettext','ngMap','ngLocale','tmh.dynamicLocale','wyvernzora.un-svg'])
      
.config(routesConfig)
.service('LlamadaService', LlamadaService)
.service('TipificaService', TipificaService)

   .directive('fileModel', ['$parse', function ($parse) {
            return {
               restrict: 'A',
               link: function(scope, element, attrs) {
                  var model = $parse(attrs.fileModel);
                  var modelSetter = model.assign;
                  
                  element.bind('change', function(){
                     scope.$apply(function(){
                        modelSetter(scope, element[0].files[0]);
                     });
                  });
               }
            };
         }])

function routesConfig($stateProvider, $urlRouterProvider, $locationProvider,$httpProvider) {

	$stateProvider

		.state('andy',{
			url : '/andy',
			template: "<andycomponent></andycomponent>",

		})

		.state('anuncio',{
			url : '/anuncio',
			template: "<anunciocomponent></anunciocomponent>",

		})

		.state('redirect',{
			url : '/redirect',
			template: "<redirectcomponent></redirectcomponent>",

		})

		.state('perfil',{
			url : '/perfil',
			template: "<perfilcomponent></perfilcomponent>",

		})

		.state('reporte',{
			url : '/reporte',
			template: "<reportecomponent></reportecomponent>",

		})

		.state('mapa',{
			url : '/',
			template: "<mapacomponent></mapacomponent>",

		});


		$urlRouterProvider.otherwise('/error');


	host = 'http://localhost:8000/'

	host_primary = 'http://localhost:8080/'

	$locationProvider.html5Mode(true);

	$httpProvider.interceptors.push(['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
	return {
	    'request': function (config) {
	        config.headers = config.headers || {};
	        if ($localStorage.token) {
	            config.headers.Authorization = 'Bearer ' + $localStorage.token;
	        }
	        return config;
	    },
	    'responseError': function(response) {
	        if(response.status === 401 || response.status === 403) {

	            $location.path('/redirect');
	        }
	        return $q.reject(response);
	    }
	};
	}]);


}