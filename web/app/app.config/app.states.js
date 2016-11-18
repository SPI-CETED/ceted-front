module.exports = [
	'$stateProvider',
	'$urlRouterProvider',
	'$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider) {
		$locationProvider.html5Mode(true);

		$urlRouterProvider.otherwise("/auth");

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
			// profile
			// ---------------------------------------------------------------------------

			.state('base.secured.skill', {
				url: '/skill',
				abstract: true,
				data: {
					requireLogin: true,
				}
			})

			.state('base.secured.skill.create', {
				url: '/create',
				views: {
					'container@base': {
						template: '<sw-skill-create>'
					}
				},
				data: {
					requireLogin: true,
				}
			})

			.state('base.secured.skill.edit', {
				url: '/edit',
				views: {
					'container@base': {
						template: '<sw-skill-create>'
					}
				},
				data: {
					requireLogin: true,
				}
			})

			.state('base.secured.skill.list', {
				url: '/list',
				views: {
					'container@base': {
						template: '<sw-skill-list>'
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
