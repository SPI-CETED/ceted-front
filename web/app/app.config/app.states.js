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
			// Skill
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
				url: '/edit/{id}',
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
			// user
			// ---------------------------------------------------------------------------

			.state('base.secured.user', {
				url: '/user',
				abstract: true,
				data: {
					requireLogin: true,
				}
			})

			.state('base.secured.user.create', {
				url: '/create',
				views: {
					'container@': {
						template: '<sw-user-create>'
					}
				},
				data: {
					requireLogin: true,
				}
			})

			.state('base.secured.user.edit', {
				url: '/edit',
				views: {
					'container@': {
						template: '<sw-user-edit>'
					}
				},
				data: {
					requireLogin: true,
				}
			})

			.state('base.secured.user.list', {
				url: '/list',
				views: {
					'container@': {
						template: '<sw-user-list>'
					}
				},
				data: {
					requireLogin: true,
				}
			})

	}
];
