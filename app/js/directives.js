parking.directive("alert", function () {
	return {
		restrict: 'E',
		scope: {
			topic: '=',
			description: '=',
			close: '&'
		},
		templateUrl: "alert.html",
		replace: true

	};
});
parking.directive("accordion", function () {
	return {
		template: "<div ng-transclude></div>",
		restrict: "E",
		transclude: true,
		controller: function ($scope, $element, $attrs, $transclude) {
			var accordionItems = [];
			var addAccordionItem = function (accordionScope) {
				accordionItems.push(accordionScope);
			};
			var closeAll = function () {
				angular.forEach(accordionItems, function (accordionScope) {
					accordionScope.active = false;
				});

			};
			return {
				addAccordionItem: addAccordionItem,
				closeAll: closeAll
			};
		}
	};
});

parking.directive("accordionItem", function () {
	return {
		templateUrl: "accordionItem.html",
		restrict: "E",
		scope: {
			title: "@"
		},
		transclude: true,
		require: "^accordion",
		link: function (scope, element, attrs, ctrl, transcludeFn) {
			ctrl.addAccordionItem(scope);
			element.bind("click", function () {
				ctrl.closeAll();
				scope.$apply(function () {
					scope.active = !scope.active;
				});
			});
		}
	};
});