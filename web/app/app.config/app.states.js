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
