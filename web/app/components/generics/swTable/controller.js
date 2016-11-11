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
