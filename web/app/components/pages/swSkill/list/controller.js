(function () {
    'use strict';

    module.exports = [
      function SwSkillListController() {
          var self = this;

          self.$onInit = function() {
          	self.skills = [
	          	{
	          		Name: 'skill 1'
	          	},
	          	{
	          		Name: 'skill 2'
	          	},
	          	{
	          		Name: 'skill 3'
	          	}
	          ];

	          self.goEdit = function(data) {
	          	console.log(data);
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
		            title: 'Nome',
		            model: 'Name',
		            width: '100%'
		          }
		        ]
		      };

		      init();
          }

          

          var init = function() {
          	updateGrid();
          };

          var updateGrid = function() {
          	self.skillsGrid = self.skills;
          };

          

	      

      }
    ];
})();
