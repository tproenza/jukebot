app.directive("controlPanel", function(){
	return {
		restrict: "E",
		templateUrl: "/pre-build/controlPanel/controlPanel.html",
		link: function(scope){
			scope.showMe = false;
			scope.doShowMe = function(){
				scope.showMe = true;
			}
			scope.dontShowMe = function(){
				scope.showMe = false;
			}
		}
	};
});