'use strict';
angular.module('epicoverflowApp')
        .controller('BadgeCtrl', function($scope, user, config, util, $timeout) {
            
            $scope.fetch = function() {
                $timeout(function() {
                    fetch();
                });
            };
            $scope.pageChanged = function() {
                fetch();
            };
            function fetch() {
                user.getBadges($scope.currentPage).success(function(data) {
                    $scope.response = data;
                    $scope.totalItems = data.total;
                }).error(function(data) {
                    util.showError(data);
                });
            }
        });
