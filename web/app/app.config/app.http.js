module.exports = [
	'$httpProvider',
	function($httpProvider) {
		$httpProvider.interceptors.push('httpLoginInterceptor');
		$httpProvider.interceptors.push('httpLoaderInterceptor');
	}
];
