(function () {
	'use strict';

	module.exports = [
		function SwUserListController() {
			var self = this;

			self.search = function(terms){
				console.log(terms);
				// TO DO: Buscar dados da API usando os termos de busca

				self.users = [
					{
						nome: "Nome do colaborador",
						cidade: "Novo Hamburgo",
						skills: [
							'AngularJS', 'Gulp', 'Grunt', 'Ionic', 'SASS'
						],
					},
					{
						nome: "Nome do colaborador 2",
						cidade: "São Leopoldo",
						skills: [
							'AngularJS', 'Gulp', 'Grunt', 'Ionic', 'SASS'
						],
					}
				];
			};
		}
	];
})();