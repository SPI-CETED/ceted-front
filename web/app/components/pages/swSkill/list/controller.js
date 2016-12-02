(function () {
    'use strict';

    module.exports = [
      '$state',
      'skillService',
      function SwSkillListController($state, SkillService) {
          var self = this;

          self.goEdit = function(data) {
            $state.go('base.secured.skill.edit', {id: data.id, description: data.description});
          };

          self.tableSkillsOptions = {
            title: 'Skills',
            rowClick: self.goEdit,
            showSearch: true,
            showPaginator: true,
            itemsByPage: 10,
            columns:
            [
              {
                title: 'Código',
                model: 'id',
                width: '50%'
              },
              {
                title: 'Nome',
                model: 'description',
                width: '50%'
              }
            ]
          };

          self.$onInit = function() {
		          init();
          };

          var init = function() {
          	updateGrid();
            findAllSkills();
          };

          var updateGrid = function() {
          	self.skillsGrid = self.skills;
          };

          var findAllSkills = function() {
            SkillService.list().then(function(data) {
              self.skills = data.data.result;
              updateGrid();
            });
          }

      }
    ];
})();
