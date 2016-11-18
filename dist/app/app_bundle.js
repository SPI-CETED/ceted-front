(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = [
  'uiGmapGoogleMapApiProvider',
  function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyAuSQEEsGScfCtwfmanmr0o_qnZnGXhUdg',
      // v: '3.20',
      libraries: 'places'
    });
  }
];

},{}],2:[function(require,module,exports){
module.exports = [
	'$httpProvider',
	function($httpProvider) {
		$httpProvider.interceptors.push('httpLoginInterceptor');
		$httpProvider.interceptors.push('httpLoaderInterceptor');
	}
];

},{}],3:[function(require,module,exports){
module.exports = [
	'$stateProvider',
	'$urlRouterProvider',
	'$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		
		$urlRouterProvider.otherwise("/home");

		$stateProvider
			.state('auth', {
				url: '/auth',
				views: {
					'container@': {
						template: '<sw-login class="login-directive">'
					}
				},
				data: {
					requireLogin: false,
				}
			})

			// ---------------------------------------------------------------------------
			// register user
			// ---------------------------------------------------------------------------

			.state('register-user', {
				url: '/register-user',
				views: {
					'container@': {
						template: '<sw-register-user>'
					}
				},
				data: {
					requireLogin: false,
				}
			})

			// ---------------------------------------------------------------------------
			// base
			// ---------------------------------------------------------------------------
			.state('base', {
				url: '',
				abstract: true,
				views: {
					'container@': {
						template: '<sw-base class="base">'
					}
				},
				data: {
					requireLogin: true,
				}
			})

			.state('base.secured', {
				url: '',
				abstract: true,
				views: {
					'header@base': {
						template: '<sw-header>'
					},
					'menu@base': {
						template: '<sw-menu>'
					},
					'footer@base': {
						template: '<sw-footer>'
					},
					'sidebarChat@base': {
						template: '<sw-sidebar-chat></sw-sidebar-chat>'
					}
				},
				data: {
					requireLogin: true,
				}
			})

			// ---------------------------------------------------------------------------
			// home
			// ---------------------------------------------------------------------------

			.state('base.secured.home', {
				url: '/home',
				params: {'firstLogin' : null},
				views: {
					'container@base': {
						template: '<sw-home>'
					}
				},
				data: {
					requireLogin: true,
				}
			})

			// ---------------------------------------------------------------------------
			// profile
			// ---------------------------------------------------------------------------

			.state('base.secured.profile', {
				url: '/profile',
				abstract: true,
				data: {
					requireLogin: true,
				}
			})

			.state('base.secured.profile.edit', {
				url: '/edit/{nickname}',
				views: {
					'container@base': {
						template: '<sw-profile-edit>'
					}
				},
				data: {
					requireLogin: true,
				}
			})

			.state('base.secured.profile.view', {
				url: '/view',
				views: {
					'container@base': {
						template: '<sw-profile-view>'
					}
				},
				data: {
					requireLogin: true,
				}
			})

			// ---------------------------------------------------------------------------
			// config
			// ---------------------------------------------------------------------------
			.state('base.secured.config-system', {
				url: '/config-system',
				abstract: true,
				data: {
					requireLogin: true,
				}
			})

			.state('base.secured.config-system.create', {
				url: '/create',
				views: {
					'container@base': {
						template: '<sw-config-system-create>'
					}
				},
				data: {
					requireLogin: true,
				}
			})

			.state('base.secured.config-system.detail', {
				url: '/detail/{id:int}',
				views: {
					'container@base': {
						template: '<sw-config-system-create>'
					}
				},
				data: {
					requireLogin: true,
				}
			})

			.state('base.secured.config-system.list', {
				url: '/list',
				views: {
					'container@base': {
						template: '<sw-config-system-list>'
					}
				},
				data: {
					requireLogin: true,
				}
			});

	}
];

},{}],4:[function(require,module,exports){
var appHttp = require('./app.http');
var appStates = require('./app.states');
var appTranslates = require('./translates');
var appGoogleMaps = require('./app.googleMaps');

module.exports = angular.module('you-movin.config', [])
  .config(appHttp)
  .config(appStates)
  .config(appTranslates)
  .config(appGoogleMaps)
  .name;

},{"./app.googleMaps":1,"./app.http":2,"./app.states":3,"./translates":6}],5:[function(require,module,exports){
module.exports={
    
}
},{}],6:[function(require,module,exports){
var translatePtBr = require('./pt-BR.json');
var translateEn = require('./en.json');

module.exports = [
	'$translateProvider',
	function($translateProvider) {
		$translateProvider.translations('en', translateEn);
		$translateProvider.translations('pt-BR', translatePtBr);

		$translateProvider.useSanitizeValueStrategy(null);

		$translateProvider.registerAvailableLanguageKeys([ 'en', 'pt-BR' ], {
			'*': 'pt-BR', // linguagem default do sistema
			'en': 'en'
		}).determinePreferredLanguage();
	}
];

},{"./en.json":5,"./pt-BR.json":7}],7:[function(require,module,exports){
module.exports={
  // GLOBAL LABELS
  "EMAIL": "Email",
  "NAME": "Name",
  "USERNAME": "Usuário",
  "PASSWORD": "Password",
  "PUBLIC": "Público",
  "FRIENDS": "Amigos",
  "ONLY_ME": "Somente Eu",
  "GENDER": "Gênero",
  "MALE": "Masculido",
  "FEMALE": "Feminino",
  "MARRIED": "Casado",
  "SINGLE": "Solteiro",


  // GLOBAL PLACEHOLDERS
  "PLACEHOLDER_EMAIL": "email@seudominio.com",
  "PLACEHOLDER_USERNAME": "usuário",
  "PLACEHOLDER_NAME": "Name",


  // PROFILE EDIT
  "ACCOUNT_SETTING": "Configurações de Conta",
  "PROFILE_SETTING": "Configurações do Perfil"
}

},{}],8:[function(require,module,exports){
module.exports={
   "appName": "CETED",
   "appVersion": 1,
   "apiUrl": "http://localhost:8081",
   "apiAuthUrl": "",
};

},{}],9:[function(require,module,exports){
module.exports={
  "VALUES": {
    "STATES": [{
      "value": "AC",
      "label": "AC - Acre"
    }, {
      "value": "AL",
      "label": "AL - Alagoas"
    }, {
      "value": "AM",
      "label": "AM - Amazonas"
    }, {
      "value": "AP",
      "label": "AP - Amapá"
    }, {
      "value": "BA",
      "label": "BA - Bahia"
    }, {
      "value": "CE",
      "label": "CE - Ceará"
    }, {
      "value": "DF",
      "label": "DF - Distrito Federal"
    }, {
      "value": "ES",
      "label": "ES - Espírito Santo"
    }, {
      "value": "GO",
      "label": "GO - Goiás"
    }, {
      "value": "MA",
      "label": "MA - Maranhão"
    }, {
      "value": "MG",
      "label": "MG - Minas Gerais"
    }, {
      "value": "MS",
      "label": "MS - Mato Grosso do Sul"
    }, {
      "value": "MT",
      "label": "MT - Mato Grosso"
    }, {
      "value": "PA",
      "label": "PA - Pará"
    }, {
      "value": "PB",
      "label": "PB - Paraíba"
    }, {
      "value": "PE",
      "label": "PE - Pernambuco"
    }, {
      "value": "PI",
      "label": "PI - Piauí"
    }, {
      "value": "PR",
      "label": "PR - Paraná"
    }, {
      "value": "RJ",
      "label": "RJ - Rio de Janeiro"
    }, {
      "value": "RN",
      "label": "RN - Rio Grande do Norte"
    }, {
      "value": "RS",
      "label": "RS - Rio Grande do Sul"
    }, {
      "value": "RO",
      "label": "RO - Rondônia"
    }, {
      "value": "RR",
      "label": "RR - Roraima"
    }, {
      "value": "SC",
      "label": "SC - Santa Catarina"
    }, {
      "value": "SE",
      "label": "SE - Sergipe"
    }, {
      "value": "SP",
      "label": "SP - São Paulo"
    }, {
      "value": "TO",
      "label": "TO - Tocantins"
    }]
  }
}

},{}],10:[function(require,module,exports){
require('./js/angular-chosen.min.js');

module.exports = 'localytics.directives';

},{"./js/angular-chosen.min.js":11}],11:[function(require,module,exports){
/**
 * angular-chosen-localytics - Angular Chosen directive is an AngularJS Directive that brings the Chosen jQuery in a Angular way
 * @version v1.3.0
 * @link http://github.com/leocaseiro/angular-chosen
 * @license MIT
 */
(function(){var e=[].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1};angular.module("localytics.directives",[]),angular.module("localytics.directives").directive("chosen",["$timeout",function(t){var n,r,i,s;return r=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,n=["persistentCreateOption","createOptionText","createOption","skipNoResults","noResultsText","allowSingleDeselect","disableSearchThreshold","disableSearch","enableSplitWordSearch","inheritSelectClasses","maxSelectedOptions","placeholderTextMultiple","placeholderTextSingle","searchContains","singleBackstrokeDelete","displayDisabledOptions","displaySelectedOptions","width","includeGroupLabelInSelected","maxShownResults"],s=function(e){return e.replace(/[A-Z]/g,function(e){return"_"+e.toLowerCase()})},i=function(e){var t;if(angular.isArray(e))return 0===e.length;if(angular.isObject(e))for(t in e)if(e.hasOwnProperty(t))return!1;return!0},{restrict:"A",require:"?ngModel",priority:1,link:function(a,l,o,d){var u,c,f,h,p,g,b,v,S,y,w;return a.disabledValuesHistory=a.disabledValuesHistory?a.disabledValuesHistory:[],l=$(l),l.addClass("localytics-chosen"),p=a.$eval(o.chosen)||{},angular.forEach(o,function(t,r){return e.call(n,r)>=0?o.$observe(r,function(e){return p[s(r)]="{{"===String(l.attr(o.$attr[r])).slice(0,2)?e:a.$eval(e),S()}):void 0}),b=function(){return l.addClass("loading").attr("disabled",!0).trigger("chosen:updated")},v=function(){return l.removeClass("loading"),angular.isDefined(o.disabled)?l.attr("disabled",o.disabled):l.attr("disabled",!1),l.trigger("chosen:updated")},u=null,c=!1,f=function(){var e;return u?l.trigger("chosen:updated"):(t(function(){u=l.chosen(p).data("chosen")}),angular.isObject(u)?e=u.default_text:void 0)},S=function(){return c?l.attr("data-placeholder",u.results_none_found).attr("disabled",!0):l.removeAttr("data-placeholder"),l.trigger("chosen:updated")},d?(g=d.$render,d.$render=function(){return g(),f()},l.on("chosen:hiding_dropdown",function(){return a.$apply(function(){return d.$setTouched()})}),o.multiple&&(w=function(){return d.$viewValue},a.$watch(w,d.$render,!0))):f(),o.$observe("disabled",function(){return l.trigger("chosen:updated")}),o.ngOptions&&d?(h=o.ngOptions.match(r),y=h[7],a.$watchCollection(y,function(e,n){var r;return r=t(function(){return angular.isUndefined(e)?b():(c=i(e),v(),S())})}),a.$on("$destroy",function(e){return"undefined"!=typeof timer&&null!==timer?t.cancel(timer):void 0})):void 0}}}])}).call(this);
},{}],12:[function(require,module,exports){
var swdatetimepickerTimezone = require('./swDatetimepickerTimezone');
var chosen = require('./chosen');
var onlyDigits = require('./ymOnlyDigits');

module.exports = angular.module('you-movin.directives', [
    swdatetimepickerTimezone,
    chosen,
    onlyDigits
]).name;

},{"./chosen":10,"./swDatetimepickerTimezone":13,"./ymOnlyDigits":16}],13:[function(require,module,exports){
var directive = require('./swDatetimepickerTimezone.directive');

module.exports = angular.module('swDatetimepickerTimezone', [])
	.directive('swDatetimepickerTimezone', directive)
	.name;

},{"./swDatetimepickerTimezone.directive":14}],14:[function(require,module,exports){
var links = require('./swDatetimepickerTimezone.link');

module.exports = function() {
    return {
    	restrict: 'A',
    	priority: 1,
    	require: 'ngModel',
    	link: links
    };
};

},{"./swDatetimepickerTimezone.link":15}],15:[function(require,module,exports){
(function() {
    'use strict';

    module.exports =
        function DatetimepickerTimezoneLink(scope, element, attrs, ctrl) {
            ctrl.$formatters.push(function(value) {
                if (value) {
                    var date = new Date(Date.parse(value));
                    date = new Date(date.getTime() + (60000 * date.getTimezoneOffset()));
                    return date;
                }

                return value;
            });

            ctrl.$parsers.push(function(value) {
                if (value) {
                    var date = new Date(value.getTime() - (60000 * value.getTimezoneOffset()));
                    return date;
                }

                return value;
            });
        };
})();

},{}],16:[function(require,module,exports){
var directive = require('./ymOnlyDigits.directive');

module.exports = angular.module('ymOnlyDigits', [])
	.directive('ymOnlyDigits', directive)
	.name;

},{"./ymOnlyDigits.directive":17}],17:[function(require,module,exports){
var link = require('./ymOnlyDigits.link');

module.exports = function() {
    return {
    	restrict: 'A',
    	priority: 1,
    	require: '?ngModel',
    	link: link
    };
};

},{"./ymOnlyDigits.link":18}],18:[function(require,module,exports){
(function () {
    'use strict';

    module.exports =
        function OnlyDigitsDirective(scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function (inputValue) {
                if (inputValue === undefined || inputValue === null) return '';
                var transformedInput = String(inputValue).replace(/[^0-9]/g, '');

                if (!!transformedInput) {
                    transformedInput = +transformedInput;
                }

                if (transformedInput !== inputValue) {
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                }

                return transformedInput;
            });
        };
})();

},{}],19:[function(require,module,exports){
module.exports = [
    'dateService',
    function(dateService) {
    	return function(dateTimeParam) {
    		if (dateTimeParam) {
    			return dateService.formatDateTime(dateTimeParam, 'LLL');
    		}

    		return '';
    	};
    }
];

},{}],20:[function(require,module,exports){
var formatDateTimeFilter = require('./formatDateTime.filter');

module.exports = angular.module('you-movin.filters', [])
	.filter('dataTimeFormatFilter', formatDateTimeFilter)
	.name;

},{"./formatDateTime.filter":19}],21:[function(require,module,exports){
function HttpLoaderInterceptor ($rootScope, $q) {
    function canRaiseEvent(config) {
        return config.url.search(/https?:\/\//) >= 0;
    }

    return {
        request: function(config) {
            if (canRaiseEvent(config)) {
                $rootScope.statusRequest = 1;
                $rootScope.$broadcast("HTTP_REQUEST_START", {});
            }

            return config;
        },

        requestError: function(config) {
            if (canRaiseEvent(config)) {
                $rootScope.statusRequest = 0;
                $rootScope.$broadcast("HTTP_REQUEST_END", {});
            }

            return config;
        },

        response: function(response) {
            if (canRaiseEvent(response.config)) {
                $rootScope.statusRequest = 0;
                $rootScope.$broadcast("HTTP_REQUEST_END", {});
            }

            return response;
        },

        responseError: function(response) {
            if (canRaiseEvent(response.config)) {
                $rootScope.statusRequest = 0;
                $rootScope.$broadcast("HTTP_REQUEST_END", {});
            }

            return $q.reject(response);
        }
    };
}

module.exports = angular.module('httpLoaderInterceptor', [])
    .factory('httpLoaderInterceptor', [
        '$rootScope',
        '$q',
        HttpLoaderInterceptor ])
    .name;

},{}],22:[function(require,module,exports){
function HttpLoginInterceptor ($rootScope, $q, $injector) {
	return {
		request: function(request) {
			var $http = $injector.get('$http');
			var loginService = $injector.get('loginService');
			var loggedUser 	= loginService.getLoggedUserLocalStorage();

			if (loggedUser) {
				request.headers['X-Access-Token'] = loggedUser.token;
			}

			return request;
		},
		response: function(response) {
			return response;
		},
		responseError: function(response) {
			var loginService = $injector.get('loginService');
			var $state = $injector.get('$state');

			if ([403, 401].indexOf(response.status) >= 0) {
				loginService.removeLoggedUserLocalStorage();
				$state.transitionTo('auth');
			}

			var deferred = $q.defer();
			deferred.reject(response);
			return deferred.promise;
		}
	};
}

module.exports = angular.module('httpLoginInterceptor', [])
.factory('httpLoginInterceptor', [
	'$rootScope',
	'$q',
	'$injector',
	HttpLoginInterceptor
	])
	.name;

},{}],23:[function(require,module,exports){
var httpLoginInterceptor = require('./http.login.interceptor');
var httpLoaderInterceptor = require('./http.loader.interceptor');

module.exports = angular.module("you-movin.interceptors", [
  httpLoginInterceptor,
  httpLoaderInterceptor
]).name;

},{"./http.loader.interceptor":21,"./http.login.interceptor":22}],24:[function(require,module,exports){
(function() {
    'use strict';

    var appInterceptors = require('./app.interceptors');
    var appServices = require('./services');
    var appConfig = require('./app.config');
    var configSecretWishes = require('./app.constants/configSecretWishes');
    var values = require('./app.constants/values').VALUES;
    var filters = require('./app.filters');
    var directives = require('./app.directives');
    var components = require('./components');

angular.module('you-movin', [
  'pascalprecht.translate',
  'ui.router',
  'base64',
  'ui.bootstrap',
  'ngAnimate',
  'smart-table',
  'ngBootbox',
  'uiGmapgoogle-maps',
  'ngFileUpload',
  'angular-img-cropper',
  'ngCropper',
  'ngTagsInput',
  'textAngular',
  appConfig,
  appInterceptors,
  appServices,
  filters,
  directives,
  components
])
  .constant('CONFIG', configSecretWishes)
  .constant('VALUES', values)
  .run([
		"$rootScope",
		"$state",
		"CONFIG",
    "loginService",
		function($rootScope, $state, CONFIG, loginService) {
      angular.element(document).on("click", function(e) {
    		$rootScope.$broadcast("documentClicked", angular.element(e.target));
    	});

			$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        var loggedUser = loginService.getLoggedUserLocalStorage('loggedUser');


        if (!$rootScope.userAuthenticated && loggedUser) {
          $rootScope.loggedUser = loggedUser;
          $rootScope.userAuthenticated = true;
        }

        var requireLogin = toState.data.requireLogin;

        if (requireLogin) {
          loginService.checkAuth();
        }

				var isAuthPage = toState.name === 'auth';
				var haveToGoAuth = requireLogin && !loggedUser && !isAuthPage;

        if (isAuthPage && $rootScope.userAuthenticated) {
          $state.go('base.secured.home');
        }

				else if (haveToGoAuth) {
					event.preventDefault();
					$state.go('auth');
				}

			});
		}
]);

})();

},{"./app.config":4,"./app.constants/configSecretWishes":8,"./app.constants/values":9,"./app.directives":12,"./app.filters":20,"./app.interceptors":23,"./components":67,"./services":77}],25:[function(require,module,exports){
var swLoader = require('./swLoader');
var swBase = require('./swBase');
var swMenu = require('./swMenu');
var swHeader = require('./swHeader');
var swFooter = require('./swFooter');
var swTable = require('./swTable');
var swDateTimePicker = require('./swDateTimePicker');
var swInputCropImage = require('./swInputCropImage');
var swMapAddress = require('./swMapAddress');
var swInputMoneyPercent = require('./swInputMoneyPercent');
var swSidebarChat = require('./swSidebarChat');

module.exports = angular.module('you-movin.components.generics', [
  swLoader,
  swBase,
  swMenu,
  swHeader,
  swFooter,
  swTable,
  swDateTimePicker,
  swInputCropImage,
  swMapAddress,
  swInputMoneyPercent,
  swSidebarChat
])
.name;

},{"./swBase":28,"./swDateTimePicker":31,"./swFooter":34,"./swHeader":37,"./swInputCropImage":41,"./swInputMoneyPercent":44,"./swLoader":47,"./swMapAddress":50,"./swMenu":54,"./swSidebarChat":57,"./swTable":60}],26:[function(require,module,exports){
var controller = require('./controller');

module.exports = {
  restrict: 'E',
  templateUrl: 'app/components/generics/swBase/template.html',
  controllerAs: 'ctrl',
  bindings: {
  },
  controller: controller
};

},{"./controller":27}],27:[function(require,module,exports){
module.exports = [
  function YmBaseController() {
  }
];

},{}],28:[function(require,module,exports){
var component = require('./component');

module.exports = angular.module('swBase', [])
	.component('swBase', component)
	.name;

},{"./component":26}],29:[function(require,module,exports){
var controller = require('./controller');

module.exports = {
  restrict: 'E',
  templateUrl: 'app/components/generics/swDateTimePicker/template.html',
  controllerAs: 'ctrl',
  bindings: {
    model: '=',
    options: '=?',
    onlyDate: '=?', // boolean: show only de calendar for date, not time.
    datepickerOptions: '=?', // UIB datepicker options
    label: '@',
    componetName: '@',
    required: '@',
    onUpdate: '&'
  },
  controller: controller
};

},{"./controller":30}],30:[function(require,module,exports){
(function() {
    'use strict';

    module.exports = [
      function YmDatePickerController() {
          var ctrl = this;

          ctrl._onUpdate = function(model) {
              ctrl.onUpdate({ date: model });
          };
      }
    ];

})();

},{}],31:[function(require,module,exports){
var component = require('./component');

module.exports = angular.module('swDateTimePicker', [])
	.component('swDateTimePicker', component)
	.name;

},{"./component":29}],32:[function(require,module,exports){
var controller = require('./controller');

module.exports = {
  restrict: 'E',
  templateUrl: 'app/components/generics/swFooter/template.html',
  controllerAs: 'ctrl',
  bindings: {
  },
  controller: controller
};

},{"./controller":33}],33:[function(require,module,exports){
(function() {
    'use strict';

    module.exports = [
      function YmFooterController() {

      }
    ];

})();

},{}],34:[function(require,module,exports){
var component = require('./component');

module.exports = angular.module('swFooter', [])
	.component('swFooter', component)
	.name;

},{"./component":32}],35:[function(require,module,exports){
var controller = require('./controller');

module.exports = {
  restrict: 'E',
  templateUrl: 'app/components/generics/swHeader/template.html',
  controllerAs: 'ctrl',
  bindings: {
  },
  controller: controller
};

},{"./controller":36}],36:[function(require,module,exports){
module.exports = [
  '$rootScope',
  '$scope',
  '$state',
  'loginService',
  function YmHeaderController($rootScope, $scope, $state, loginService) {
    var self = this;
    var desktop_width = 975;
    var tablet_width = 751;

    self.userName = $rootScope.loggedUser.loggedUser.userName;
    self.nickName = $rootScope.loggedUser.loggedUser.nickName;

    self.doLogout = function() {
      loginService.logout();
      $state.go('auth');
    }

    self.toogleMenuProfileOpen = function() {
      self.menuProfileOpen = !self.menuProfileOpen;
    }

    self.toogleNotification = function() {
      self.notificationOpen = !self.notificationOpen;
    }

    self.toogleEmail = function() {
      self.emailOpen = !self.emailOpen;
    }

    self.toogleFriend = function() {
      self.friendOpen = !self.friendOpen;
    }

    self.toogleSubMenu = function() {
  		if ($('body').hasClass('submenu')) {
  			$('body').removeClass('submenu');
  		} else {
  			$('body').addClass('submenu');
  		}
    }

    self.toggleNavbar = function(direction){
			var opposite = (direction=="left")? "right":"left";
			$('body').removeClass('remove-navbar');
			$('body').removeClass('fullscreen');

			// if nav-direction is hiding
			if ($('body').hasClass('nav-'+direction+'-hide')) {
				$('body').removeClass('nav-'+direction+'-hide');
//				navToggle(direction, "show");
				// if there is nav-opposite AND (nav-direction start with hiding OR smaller screen)
				if (!$('body').hasClass('no-nav-'+opposite) && !$('body').hasClass('nav-'+opposite+'-hide') && ($('body').hasClass('nav-'+direction+'-start-hide') || $(window).width() < desktop_width) ){
//					navToggle(opposite, "hide");
					$('body').addClass('nav-'+opposite+'-hide');
				}
			}	else
			// if nav-opposite is hiding
			if ($('body').hasClass('nav-'+opposite+'-hide') && $(window).width()>= desktop_width ){
				$('body').removeClass('nav-'+opposite+'-hide');
				$('body').addClass('nav-'+direction+'-hide');
			}  else {
				$('body').addClass('nav-'+direction+'-hide');
			}

      resizeAffixPanel()
		}

    function resizeAffixPanel(){
      $('.sidebar-affix .panel').css('width',($('.vd_content-section').innerWidth()-114)/3+'px');
      if ($(window).width() <= tablet_width)	{
        $('.sidebar-affix .panel').removeAttr('style');
      }
    }

    $rootScope.$on("documentClicked", function(inner, target) {

      if (!$(target[0]).is("#top-menu-profile") && !$(target[0]).parents("#top-menu-profile").length > 0) {
        $scope.$applyAsync(function() {
          self.menuProfileOpen = false;
        });
      }

      if (!$(target[0]).is("#top-menu-notification") && !$(target[0]).parents("#top-menu-notification").length > 0) {
        $scope.$applyAsync(function() {
          self.notificationOpen = false;
        });
      }

      if (!$(target[0]).is("#top-menu-email") && !$(target[0]).parents("#top-menu-email").length > 0) {
        $scope.$applyAsync(function() {
          self.emailOpen = false;
        });
      }

      if (!$(target[0]).is("#top-menu-friends") && !$(target[0]).parents("#top-menu-friends").length > 0) {
        $scope.$applyAsync(function() {
          self.friendOpen = false;
        });
      }
		});

  }
];

},{}],37:[function(require,module,exports){
var component = require('./component');

module.exports = angular.module('swHeader', [])
	.component('swHeader', component)
	.name;

},{"./component":35}],38:[function(require,module,exports){
var controller = require('./controller');

module.exports = {
  restrict: 'E',
  templateUrl: 'app/components/generics/swInputCropImage/template.html',
  controllerAs: 'ctrl',
  bindings: {
    imageSourceCropped: '=',
    file: '=',
    optionsCropper: '=',
    idCropper: '@',
    imgUploaded: '=',
    change: '='
  },
  controller: controller
};

},{"./controller":39}],39:[function(require,module,exports){
(function() {
    'use strict';

    var cropImageModalController = require('./cropImage-modal/controller');

    module.exports = [
      '$scope',
      '$timeout',
      'modalService',
      'CONFIG',
      'Cropper',
      function YmInputCropImageController($scope, $timeout, modalService, CONFIG, Cropper) {
        var self = this;

        self.urlAmazonPhotos = CONFIG.urlAmazonPhotos;

        self.remove = function() {
          self.cleanInput();
          self.addInvisibleClass = true;
          $timeout(function() {
            self.addInvisibleClass = false;
            self.imageSourceCropped = null;
            self.imgUploaded = null;
          }, 500);

          if (typeof self.change === 'function') {
            self.change();
          }
      };

        self.cleanInput = function() {
          var query = '#' + self.idCropper;

          var input = angular.element(query);
          input.replaceWith(input.val('').clone(true));
        };

        self.imageChange = function(blob) {
          var file = blob;

          Cropper.encode(file)
            .then(function(sourceImage) {
              var modal = {
                templateUrl: 'app/app.components/components.generics/ymInputCropImage/cropImage-modal/template.html',
                controller: cropImageModalController,
                controllerAs: 'ctrl',
                resolve: {
                  sourceImage: function() { return sourceImage; },
                  file: function() { return file; },
                  optionsCropper: function() { return self.optionsCropper; },
                },
                size: 'lg'
              };

              var modaInstance = modalService.custonModal(modal);

              modaInstance.result
                .then(function(result) {
                  if (result.imageSourceCropped && result.file) {
                    self.imageSourceCropped = result.imageSourceCropped;
                    self.file = result.file;

                    if (typeof self.change === 'function') {
                      self.change();
                    }
                  }
                });

              modaInstance.closed
                .then(function() {
                  self.cleanInput();
                });
            });
        };
      }
    ];

})();

},{"./cropImage-modal/controller":40}],40:[function(require,module,exports){
(function() {
    'use strict';

    module.exports = [
      '$scope',
      '$uibModalInstance',
      '$timeout',
      'Cropper',
      'sourceImage',
      'file',
      'optionsCropper',
      'toastrService',
      function CropImageModal($scope, $uibModalInstance, $timeout, Cropper, sourceImage, file, optionsCropper, toastrService) {
          var self = this;
          var data = null;

          self.optionsCropper = optionsCropper;
          self.sourceImage = sourceImage;
          self.showEvent = 'show';
          self.hideEvent = 'hide';
          self.cropper = {};
          self.cropperProxy = 'ctrl.cropper.' + self.optionsCropper.proxyCropper;

          $timeout(showCropper);

          self.options = {
            aspectRatio: self.optionsCropper.aspectRatio,
            zoomable: self.optionsCropper.zoomable,
            minCropBoxWidth: self.optionsCropper.minCropBoxWidth,
            minCropBoxHeight: self.optionsCropper.minCropBoxHeight,
            crop: function(dataNew) {
              data = dataNew;
            }
          };

          self.ok = function() {
            if (!file || !data) {
              return;
            }

            if (!self.cropper[self.optionsCropper.proxyCropper]) {
              return;
            }

            var getData = self.cropper[self.optionsCropper.proxyCropper]('getData');

            // Código comentado para validar como Ivano
            // if (data.width < self.optionsCropper.minCropBoxWidth &&
            //     data.height < self.optionsCropper.minCropBoxHeight) {
            //
            //     toastrService.error('imageNeedBeBigger', [self.optionsCropper.minCropBoxWidth, self.optionsCropper.minCropBoxHeight]);
            //     return;
            // }

            Cropper.crop(file, data)
              .then(Cropper.encode)
                .then(function(imageSourceCropped) {
                  $uibModalInstance.close({
                    imageSourceCropped: imageSourceCropped,
                    file: file
                  });
                });
          };

          self.cancel = function() {
            $uibModalInstance.dismiss('cancel');
          };

          function showCropper() {
            $scope.$broadcast(self.showEvent);
          }

          function hideCropper() {
            $scope.$broadcast(self.hideEvent);
          }
      }
    ];

})();

},{}],41:[function(require,module,exports){
var component = require('./component');

module.exports = angular.module('swInputCropImage', [])
	.component('swInputCropImage', component)
	.name;

},{"./component":38}],42:[function(require,module,exports){
var controller = require('./controller');

module.exports = {
  restrict: 'E',
  templateUrl: 'app/components/generics/swInputMoneyPercent/template.html',
  controllerAs: 'ctrl',
  bindings: {
      model: '=',
      blur: '=?',
      helper: '=?',
      componentName: '@',
      componentId: '@',
      label: '@',
      percentage: '@',
      money: '@',
      required: '=',
      disabled: '@',
      placeholder: '@',
      currency: '@?'
  },
  controller: controller
};

},{"./controller":43}],43:[function(require,module,exports){
(function() {
    'use strict';

    module.exports = [
        '$scope',
        function YmInputMoneyPercentController($scope) {
            var self = this;

            $scope.$watch('ctrl.model', function(newValue) {
                if (newValue) {
                    self.value = newValue.toString().replace(/[.]+/g, ',');
                }
            });

            self.changeModel = function() {
                if (self.value) {
                    self.value = self.value.replace(/[^0-9,]+/g, '');
                    self.model = self.value.replace(/[,]+/g, '.');
                } else {
                    self.model = null;
                }
            };
        }
    ];

})();

},{}],44:[function(require,module,exports){
var component = require('./component');

module.exports = angular.module('swInputMoneyPercent', [])
	.component('swInputMoneyPercent', component)
	.name;

},{"./component":42}],45:[function(require,module,exports){
var controller = require('./controller');

module.exports = {
  restrict: "E",
  templateUrl: "app/components/generics/swLoader/template.html",
  controllerAs: 'ctrl',
  bindings: {
  },
  controller: controller
};

},{"./controller":46}],46:[function(require,module,exports){
module.exports = [
    '$rootScope',
    '$timeout',
    'loaderService',
  function YmLoaderController($rootScope, $timeout, loaderService) {
    loaderService.hide();

      $rootScope.$on('HTTP_REQUEST_START', function(data) {
          $timeout(function() {
              if ($rootScope.statusRequest === 1) {
                  loaderService.show();
              }
          }, 500);
      });

      $rootScope.$on('HTTP_REQUEST_END', function(data) {
          loaderService.hide();
      });
  }
];

},{}],47:[function(require,module,exports){
var component = require('./component');

module.exports = angular.module('swLoader', [])
	.component('swLoader', component)
	.name;

},{"./component":45}],48:[function(require,module,exports){
var controller = require('./controller');

module.exports = {
  restrict: 'E',
  templateUrl: 'app/components/generics/swMapAddress/template.html',
  controllerAs: 'ctrl',
  bindings: {
    address: '=',
    required: '@',
    componentName: '@'
  },
  controller: controller
};

},{"./controller":49}],49:[function(require,module,exports){
(function() {
  'use strict';

  var mapModalController = require('./map-modal/controller');

  module.exports = [
    '$scope',
    'bootBoxService',
    'modalService',
    function YmMapAddress($scope, bootBoxService, modalService) {
      var self = this;

      self.openMap = function() {
        var modal = {
          templateUrl: 'app/components/generics/ymMapAddress/map-modal/template.html',
          controller: mapModalController,
          controllerAs: 'ctrl',
          resolve: {
            address: function() { return self.address; },
          },
          size: 'lg'
        };

        modalService.custonModal(modal)
          .result
            .then(function(result) {
              self.address = result.address;
            });
      };
    }
  ];
})();

},{"./map-modal/controller":51}],50:[function(require,module,exports){
var component = require('./component');

module.exports = angular.module('swMapAddress', [])
	.component('swMapAddress', component)
	.name;

},{"./component":48}],51:[function(require,module,exports){
(function () {
    'use strict';

    module.exports = [
        '$scope',
        '$uibModalInstance',
        'bootBoxService',
        'address',
        '$log',
        function CropImageModal($scope, $uibModalInstance, bootBoxService, address, $log) {
            var self = this;

            self.address = address;
            self.showMap = true;

            self.map = {
                searchbox: {
                    template: 'searchbox.tpl.html',
                    events: {
                        places_changed: placesChanged
                    }
                },
                events: {
                    dblclick: getLatLong
                },
                options: {
                    scrollwheel: false,
                    disableDoubleClickZoom: true
                },
                zoom: 14,
                center: {
                    latitude: -29.7537583,
                    longitude: -51.1458786
                }
            };

            self.marker = {
                id: 0,
                coords: {
                    latitude: undefined,
                    longitude: undefined
                }
            };

            self.ok = function () {
                $uibModalInstance.close({
                    address: self.address
                });
            };

            self.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };

            function placesChanged(searchBox) {
                var places = searchBox.getPlaces();

                if (places && places.length > 0) {
                    var place = places[0];
                    var goPlace;

                    if (place.geometry.viewport) {
                        self.map.bounds = {
                            northeast: {
                                latitude: place.geometry.viewport.getNorthEast().lat(),
                                longitude: place.geometry.viewport.getNorthEast().lng()
                            },
                            southwest: {
                                latitude: place.geometry.viewport.getSouthWest().lat(),
                                longitude: place.geometry.viewport.getSouthWest().lng()
                            }
                        };
                    } else {
                        self.map.center = {
                            latitude: place.geometry.location.lat(),
                            longitude: place.geometry.location.lng()
                        };
                    }
                }
            }

            function getLatLong(event, eventType, latLong, teste) {
                var latLng = {
                    latitude: latLong[0].latLng.lat(),
                    longitude: latLong[0].latLng.lng()
                };

                $.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latLng.latitude + ',' + latLng.longitude + '&sensor=true',
                    function (data) {
                        setAdress(data, latLng);
                    });
            }

            function setAdress(data, latLng) {
                if (data.status === "OK") {
                    self.lastAddress = self.address;
                    self.address = {};

                    self.marker.coords.latitude = latLng.latitude;
                    self.marker.coords.longitude = latLng.longitude;

                    self.address.Coordinates = {
                        type: 'Point',
                        coordinates: [latLng.latitude, latLng.longitude]
                    };

                    self.address.FormattedAddress = data.results[0].formatted_address;

                    var addressComponents = data.results[0].address_components;

                    addressComponents.forEach(function (data) {
                        if (data.types.find(function (type) { return type === 'street_number'; })) {
                            self.address.Number = data.long_name;
                        }

                        if (data.types.find(function (type) { return type === 'route'; })) {
                            self.address.Street = data.long_name;
                        }

                        if (data.types.find(function (type) { return type === 'sublocality'; })) {
                            self.address.Neighborhood = data.long_name;
                        }

                        if (data.types.find(function (type) { return type === 'locality'; })) {
                            self.address.City = data.long_name;
                        }

                        // Caso não tenha a cidade no tipo 'locality' obter a cidade em 'administrative_area_level_2'
                        if (!self.address.City && data.types.find(function (type) { return type === 'administrative_area_level_2'; })) {
                            self.address.City = data.long_name;
                        }

                        if (data.types.find(function (type) { return type === 'administrative_area_level_1'; })) {
                            self.address.State = data.long_name;
                            self.address.InitialsState = data.short_name;
                        }

                        if (data.types.find(function (type) { return type === 'country'; })) {
                            self.address.Country = data.long_name;
                            self.address.InitialsCountry = data.short_name;
                        }
                    });

                    bootBoxService.confirm('pleaseCheckTheAddressIsThatYouWant', [self.address.FormattedAddress])
                        .then(
                        function (resut) {
                        },
                        function () {
                            self.address = self.lastAddress;
                        });
                }
            }

            function setCenterMap(latitude, longitude) {
                self.map.center.latitude = latitude;
                self.map.center.longitude = longitude;
            }

            function getLocation() {
                if (navigator.geolocation) {
                    navigator.geolocation
                        .getCurrentPosition(function (position) {
                            setCenterMap(position.coords.latitude, position.coords.longitude);
                            $scope.$apply();
                        });
                } else {
                    bootBoxService.alert('geolocationIsNotSupportedByThisBrowser.')
                        .then();
                }
            }

            function init() {
                if (self.address && self.address.Coordinates && self.address.Coordinates.coordinates[0] && self.address.Coordinates.coordinates[1]) {
                    setCenterMap(self.address.Coordinates.coordinates[0], self.address.Coordinates.coordinates[1]);
                    self.marker.coords.latitude = self.address.Coordinates.coordinates[0];
                    self.marker.coords.longitude = self.address.Coordinates.coordinates[1];
                } else {
                    getLocation();
                }

                $uibModalInstance.closed
                    .then(function () {
                        self.showMap = false;
                    });
            }

            self.$onInit = init;
        }
    ];

})();

},{}],52:[function(require,module,exports){
var controller = require('./controller.js');

module.exports = {
  restrict: 'E',
  templateUrl: 'app/components/generics/swMenu/template.html',
  controllerAs: 'ctrl',
  bindings: {
  },
  controller: controller
};

},{"./controller.js":53}],53:[function(require,module,exports){
module.exports = [
    function YmMenuController() {
        var self = this;

        
    }
];

},{}],54:[function(require,module,exports){
var component = require('./component');

module.exports = angular.module('swMenu', [])
	.component('swMenu', component)
	.name;

},{"./component":52}],55:[function(require,module,exports){
var controller = require('./controller.js');

module.exports = {
  restrict: 'E',
  templateUrl: 'app/components/generics/swSidebarChat/template.html',
  controllerAs: 'ctrl',
  bindings: {
  },
  controller: controller
};

},{"./controller.js":56}],56:[function(require,module,exports){
module.exports = [
    function SwSidebarChatController() {
        var self = this;


    }
];

},{}],57:[function(require,module,exports){
var component = require('./component');

module.exports = angular.module('swSidebarChat', [])
	.component('swSidebarChat', component)
	.name;

},{"./component":55}],58:[function(require,module,exports){
var controller = require('./controller');

module.exports = {
	bindings: {
		options: '=',
		resource: '=',
		safeResource: '=',
		caller: '='
	},
	templateUrl: 'app/components/generics/swTable/template.html',
	controller: controller,
	controllerAs: 'ctrl'
};

},{"./controller":59}],59:[function(require,module,exports){
(function() {
	'use strict';

	module.exports = [
		'$filter',
		function SwTableController($filter) {
			this.filterService = $filter;
			this.currentRowSelected = {};

			this.init = function() {
				var defaultOptions = {
					showSearch: true,
					showPaginator: true,
					itemsByPage: 10,
					displayedPages: 10
				};

				this.mergedOptions = angular.extend(defaultOptions, this.options);
			};

			this.selectRow = function(rowData) {
				if (typeof this.mergedOptions.rowClick === 'function') {
					this.mergedOptions.rowClick(rowData);
				}

				this.currentRowSelected._isSelected = false;
				rowData._isSelected = true;
				this.currentRowSelected = rowData;
			};

			this.renderModel = function(row, model) {
				var parts = model.split('|');
				var modelString = parts[0].trim();
				// get model value
				var splitModel = modelString.split('.');
				var modelValue = row[splitModel[0]];
				for (var i = 1; i < splitModel.length; i++) {
					modelValue = modelValue[splitModel[i]];
				}
				// apply filters
				var filters = parts.slice(1);

				filters.forEach(function(f) {
					modelValue = this.filterService(f.trim())(modelValue);
				});

				return modelValue;
			};

			this.toggleFilterWidthClick = function(event) {
				if (angular.element(event.target).width() <= 80) {
					angular.element(event.target).width(300);
				}
			};

			this.toggleFilterWidthBlur = function(event) {
				if (angular.element(event.target).width() > 80 && !event.target.value) {
					angular.element(event.target).width(80);
				}
			};

			this.init();
		}
	];

})();

},{}],60:[function(require,module,exports){
var component = require('./component');

var swCell = require('./swCell');
var swActions = require('./swTableActions');

module.exports = angular
	.module('swTable', [
		swCell,
		swActions
	])
	.component('swTable', component)
	.name;

},{"./component":58,"./swCell":63,"./swTableActions":66}],61:[function(require,module,exports){
var controller = require('./controller');

module.exports = {
	restrict: 'E',
	bindings: {
		cellTemplate: '=',
		parentRow: '=',
		tableCtrl: '=',
		caller: '='
	},
	controller: controller,
	controllerAs: 'ctrl'
};

},{"./controller":62}],62:[function(require,module,exports){
module.exports = [
	'$scope',
	'$element',
	'$compile',
	function SwCellController($scope, $element, $compile) {
			var elementCompiled = $compile(this.cellTemplate)($scope);
			$element.replaceWith(elementCompiled);
	}
];

},{}],63:[function(require,module,exports){
var component = require('./component');

module.exports = angular.module('swCell', [])
.component('swCell', component)
.name;

},{"./component":61}],64:[function(require,module,exports){
var controller = require('./controller');

module.exports = {
	restrict: 'E',
	bindings: {
		template: '=',
		caller: '='
	},
	controller: controller,
	controllerAs: 'ctrl'
};

},{"./controller":65}],65:[function(require,module,exports){
module.exports = [
	'$scope',
	'$element',
	'$compile',
	function UnTableActionsCtrl($scope, $element, $compile) {
		var elementCompiled = $compile(this.template)($scope);
		$element.replaceWith(elementCompiled);
	}
];

},{}],66:[function(require,module,exports){
var component = require('./component');

module.exports = angular
	.module('swTableActions', [])
	.component('swTableActions', component)
	.name;

},{"./component":64}],67:[function(require,module,exports){
var componentsGenerics = require('./generics');
var componentsPages = require('./pages');

module.exports = angular.module('you-movin.components', [
  componentsGenerics,
  componentsPages
])
.name;

},{"./generics":25,"./pages":68}],68:[function(require,module,exports){
var swLogin = require('./swLogin');

module.exports = angular.module('you-movin.components.pages', [
  swLogin
]).name;

},{"./swLogin":71}],69:[function(require,module,exports){
var controller = require('./controller');

module.exports = {
  restrict: 'E',
  templateUrl: 'app/components/pages/swLogin/template.html',
  controllerAs: 'ctrl',
  bindings: {
  },
  controller: controller
};

},{"./controller":70}],70:[function(require,module,exports){
(function () {
    'use strict';

    module.exports = [
      '$state',
      'loginService',
      'pnotifyService',
      function YmLoginController($state, loginService, pnotifyService) {
          var self = this;

          self.user = {};

          self.doLogin = function() {
            loginService.login(self.user).then(function(data) {
              $state.go('base.secured.home');
            }, function(err) {
              if ([400, 404].indexOf(err.status) >= 0) {
                pnotifyService.error('Usuário e/ou senha inválidos.');
              }
            })
          }
      }
    ];
})();

},{}],71:[function(require,module,exports){
var component = require('./component');

module.exports = angular.module('swLogin', [])
	.component('swLogin', component)
	.name;

},{"./component":69}],72:[function(require,module,exports){
(function() {
    'use strict';

    function BlobbService() {
        var self = this;

        self.base64toBlob = function(b64Data, contentType, sliceSize) {
            contentType = contentType || '';
            sliceSize = sliceSize || 512;

            b64Data = b64Data.replace(/^data:image\/\w+;base64,/, "");

            var byteCharacters = atob(b64Data);
            var byteArrays = [];

            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
              byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
            }

            var blob = new Blob(byteArrays);

            return blob;
        };
    }

    module.exports = angular.module('blobService', [])
        .service('blobService', BlobbService)
        .name;

})();

},{}],73:[function(require,module,exports){
(function() {
	'use strict';

	function BootBoxService($filter, $ngBootbox) {
		this.alert = function(translateKey, params) {
			return $ngBootbox.alert(resolveParams($filter("translate")(translateKey), params));
		};

		this.confirm = function(translateKey, params) {
			var keyTranslated = resolveParams($filter("translate")(translateKey), params);
			return $ngBootbox.confirm(keyTranslated);
		};

		this.prompt = function(translateKey, params) {
			return $ngBootbox.prompt(resolveParams($filter("translate")(translateKey), params));
		};

		function resolveParams(keyTranslated, params) {
			if (params) {
				for (var i = 0; i < params.length; i++) {
					keyTranslated = keyTranslated.replace('{' + i + '}', params[i]);
				}
			}

			return keyTranslated;
		}
	}

	module.exports = angular.module('bootBoxService', [])
		.service('bootBoxService', [
			'$filter',
			'$ngBootbox',
			BootBoxService
		]).name;

})();

},{}],74:[function(require,module,exports){
(function() {
    'use strict';

    function ConfigSystem($http, CONFIG) {
        var baseUrl = CONFIG.apiUrl + 'api/config-system';

        this.create = function(configSystem) {
            return $http.post(baseUrl, configSystem)
              .then(
                  function(response) {
                    return response.data;
                });
        };

        this.update = function(configSystem) {
            return $http.put(baseUrl + '/' + configSystem.Id, configSystem)
              .then(function(response) {
                return response.data;
              });
        };

        this.getById = function(id) {
            return $http.get(baseUrl + '/' + id)
              .then(function(response) {
                return response.data;
              });
        };

        this.getAll = function(id) {
            return $http.get(baseUrl)
              .then(function(response) {
                return response.data;
              });
        };

        this.getByKeys = function(keys) {
            return $http.get(baseUrl + '/keys', { params: { keys: keys } })
              .then(function(response) {
                return response.data;
              });
        };
    }

    module.exports = angular.module('configSystemService', [])
        .service('configSystemService', [
        	'$http',
        	'CONFIG',
        	ConfigSystem
        ]).name;

})();

},{}],75:[function(require,module,exports){
(function() {
    'use strict';

    function DateService() {
      var self = this;

    	self.locale = 'pt-br';
    	self.defaultDateFormat = 'L';
    	self.defaultDateTimeFormat =  self.defaultDateFormat + ' HH:mm';

    	self.formatDate = function(dateAsString, dateFormat) {
    		var momentDate = moment.utc(dateAsString).locale(self.locale);
    		return momentDate.format(dateFormat || self.defaultDateFormat);
    	};

    	self.formatDateTime = function(dateTimeAsString, dateTimeFormat) {
    		var momentDateTime = moment.utc(dateTimeAsString).locale(self.locale);
    		return momentDateTime.format(dateTimeFormat || self.defaultDateTimeFormat);
    	};

    	self.currentDate = function(dateFormat) {
    		return self.formatDate(new Date().toISOString(), dateFormat);
    	};

    	self.currentDateTime = function(dateTimeFormat) {
    		return self.formatDateTime(new Date().toISOString(), dateTimeFormat);
    	};

    	self.momentToDate = function(date, format) {
    		if (format) {
    			return new Date(moment(date).utcOffset('pt-BR').format(format));
    		}

    		return new Date(moment(date).utcOffset('pt-BR').format('YYYY-MM-DD HH:mm'));
    	};

        self.momentAddDay = function(days, date) {
            if (date) {
                return moment(date).add(days, 'days');
            }

            return moment().add(days, 'days');
        };

        self.diff = function(startDate, endDate, unit) {
            unit = unit || 'seconds';
            var milliseconds = (endDate - startDate);

            if (unit === 'days') {
                return Math.round(milliseconds / 1000 / 60 / 60 / 24);
            } else if (unit === 'hours') {
                return Math.round(milliseconds / 1000 / 60 / 60);
            } else if (unit === 'minutes') {
                return Math.round(milliseconds / 1000 / 60);
            } else if (unit === 'seconds') {
                return Math.round(milliseconds / 1000);
            }

            return null;
        };
    }

    module.exports = angular.module('dateService', [])
    	.service('dateService', DateService)
    	.name;

})();

},{}],76:[function(require,module,exports){
(function() {
	'use strict';

	function GenderService($http, CONFIG) {
    var self = this;
    var BASE_URL = CONFIG.apiUrl + '/gender'

		self.findAll = function() {
      return $http.get(BASE_URL).then(function(result) { return result.data; });
		};
	}

	module.exports = angular.module('genderService', [])
		.service('genderService', [
      '$http',
      'CONFIG',
      GenderService
    ])
		.name;

})();

},{}],77:[function(require,module,exports){
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

},{"./blob":72,"./bootbox":73,"./configSystem":74,"./date":75,"./gender-service":76,"./loader":78,"./login-service":79,"./maritial-status-service":80,"./modal":81,"./pnotify-service":82,"./profile-service":83,"./toastr":84,"./validation":85}],78:[function(require,module,exports){
(function() {
	'use strict';

	function LoaderService() {
		this.show = function() {
			$("sw-loader").removeClass("hide");
		};

		this.hide = function() {
			$("sw-loader").addClass("hide");
		};

		this.toggle =function() {
			$("sw-loader").toggleClass("hide");
		};
	}

	module.exports = angular.module('loaderService', [])
		.service('loaderService', LoaderService)
		.name;

})();

},{}],79:[function(require,module,exports){
(function() {
    'use strict';

    function LoginService($rootScope, $http, CONFIG) {
        var baseUrl = CONFIG.apiUrl + '/auth';
        var self = this;

        self.login = function(credentials) {
          return $http.post(baseUrl + '/authenticate', credentials).then(function(response) {
            self.saveLoggedUserLocalStorage(response.data.data);
            $rootScope.loggedUser = response.data.data;
            $rootScope.userAuthenticated  = true;
            return response.data;
          });
        };

        self.checkAuth = function() {
          return $http.post(baseUrl + '/checkAuth').then(function(response) {
            return response.data;
          });
        }

        self.logout = function() {
          self.removeLoggedUserLocalStorage();
        }

        self.getLoggedUserLocalStorage = function() {
          var localStorageString = localStorage.getItem('loggedUser');
          return JSON.parse(localStorageString);
        }

        self.removeLoggedUserLocalStorage = function() {
          localStorage.removeItem('loggedUser');
        }

        self.saveLoggedUserLocalStorage = function(loggedUser) {
          localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
        }
    }

    module.exports = angular.module('loginService', [])
        .service('loginService', [
          '$rootScope',
        	'$http',
        	'CONFIG',
        	LoginService
        ]).name;

})();

},{}],80:[function(require,module,exports){
(function() {
    'use strict';

    function MaritialStatusService($http, CONFIG) {
        var self = this;
        var BASE_URL = CONFIG.apiUrl + '/maritial-status';

        self.findAll = function() {
            return $http.get(BASE_URL).then(function(response) { return response.data });
        };
    }

    module.exports = angular.module('maritialStatusService', [])
        .service('maritialStatusService', [
        	'$http',
        	'CONFIG',
        	MaritialStatusService
        ]).name;

})();

},{}],81:[function(require,module,exports){
(function() {
    'use strict';

    function ModalService($uibModal) {
        var defaultOptions = {
            openedClass: 'modal-opened',
            backdrop: 'static',
            controllerAs: 'ctrl',
            size: 'md'
        }

        this.custonModal = function(modal) {
            var options = angular.extend(defaultOptions, modal);
            return $uibModal.open(options);
        };
    }

    module.exports = angular.module('modalService', [])
        .service('modalService', [
        '$uibModal',
        ModalService
    ]).name;

})();

},{}],82:[function(require,module,exports){
(function() {
	'use strict';

	function PnotifyService($filter) {
    var configDefault =  getConfig();

		this.success = function(translateKey, params) {
      configDefault.title = 'Successo';
      configDefault.text = resolveParams($filter('translate')(translateKey), params);
      configDefault.type = 'success';

      $.pnotify(configDefault);
		};

		this.error = function(translateKey, params) {
      configDefault.title = 'Erro';
      configDefault.text = resolveParams($filter('translate')(translateKey), params);
      configDefault.type = 'error';

      $.pnotify(configDefault);
		};

		this.information = function(translateKey, params) {
      configDefault.title = 'Informação';
      configDefault.text = resolveParams($filter('translate')(translateKey), params);
      configDefault.type = 'info';

      $.pnotify(configDefault);
		};

		this.notice = function(translateKey, params) {
      configDefault.title = 'Noticia';
      configDefault.text = resolveParams($filter('translate')(translateKey), params);
      configDefault.type = 'notice';

      $.pnotify(configDefault);
		};

		function resolveParams(keyTranslated, params) {
			if (params) {
				for (var i = 0; i < params.length; i++) {
					keyTranslated = keyTranslated.replace('{' + i + '}', params[i]);
				}
			}

			return keyTranslated;
		}

    function getConfig() {
      return {
        title: '',
    		title_escape: true,
    		text: '',
    		cornerclass: '',
    		type: '',
    		icon: 'false',
    		width: '320px',
    		closer_hover: false,
    		sticker: true,
    		opacity: 0.9,
    		animation: {
    			effect_in: 'shake',
    			effect_out: 'fade'
    		},
    		addclass: 'pnotify-top'
    	}
    }

	}

	module.exports = angular.module('pnotifyService', [])
		.service('pnotifyService', [
			'$filter',
			PnotifyService
		])
		.name;

})();

},{}],83:[function(require,module,exports){
(function() {
	'use strict';

	function ProfileService($http, CONFIG) {
    var self = this;
    var BASE_URL = CONFIG.apiUrl + '/profiles';

		self.findPerfil = function(nickname) {
      return $http.get(BASE_URL + '/user/' + nickname)
        .then(function(result) { return result.data });
		};

		self.register = function(registerUser) {
      return $http.post(BASE_URL, registerUser).then(function(result) { return result.data });
		};

		self.update = function(user) {
      return $http.put(BASE_URL, user).then(function(result) { return result.data });
		};
	}

	module.exports = angular.module('profileService', [])
		.service('profileService', [
      '$http',
      'CONFIG',
			ProfileService
		])
		.name;

})();

},{}],84:[function(require,module,exports){
(function() {
	'use strict';

	function ToastrService($filter) {
		this.success = function(translateKey, params) {
			toastr.success(resolveParams($filter('translate')(translateKey), params));
		};

		this.error = function(translateKey, params) {
			toastr.error(resolveParams($filter('translate')(translateKey), params));
		};

		this.info = function(translateKey, params) {
			toastr.info(resolveParams($filter('translate')(translateKey), params));
		};

		this.warning = function(translateKey, params) {
			toastr.warning(resolveParams($filter('translate')(translateKey), params));
		};

		function resolveParams(keyTranslated, params) {
			if (params) {
				for (var i = 0; i < params.length; i++) {
					keyTranslated = keyTranslated.replace('{' + i + '}', params[i]);
				}
			}

			return keyTranslated;
		}
	}

	module.exports = angular.module('toastrService', [])
		.service('toastrService', [
			'$filter',
			ToastrService
		])
		.name;

})();

},{}],85:[function(require,module,exports){
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

},{}]},{},[24]);
