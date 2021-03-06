angular.module('highlow').controller('HighscoreCtrl', ['$scope', '$modalInstance', 'HighscoreFactory', function($scope, $modalInstance, HighscoreFactory) {
	'use strict';
	
	var loadScores = function() {
	    $scope.loading = true;
        HighscoreFactory.getHighscores().then(function(scores) {
            $scope.scores = scores;
            $scope.loading = false;
        });
	};
    
    $scope.localSelected = function() {
        $scope.showReset = false;
        $scope.showResetOptions = true;
    };
    
    $scope.leaderboardsSelected = function() {
        $scope.showReset = false;
        $scope.showResetOptions = false;
    };
    
  	$scope.close = function() {
    	$modalInstance.dismiss('close');
  	};
  	
  	$scope.reset = function() {
  		$scope.showReset = true;
  	};
  	
  	$scope.confirmReset = function() {
  		$scope.showReset = false;
  		HighscoreFactory.reset();
  		loadScores();
  	};
  	
  	$scope.declineReset = function() {
  		$scope.showReset = false;
  	};
    
    $scope.showReset = false;
    $scope.showResetOptions = true;
    $scope.maxNameLength = HighscoreFactory.getMaxNameLength();
    loadScores();
}]);