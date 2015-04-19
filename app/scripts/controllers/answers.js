'use strict';
angular.module('epicoverflowApp')
        .controller('AnswersCtrl', function($scope, question, config, util) {
            function fetch() {
                question.getAnswers($scope.currentPage).success(function(data) {
                    $scope.response = data;
                    $scope.totalItems = data.total;
                }).error(function(data) {
                    util.showError(data);
                });
            }
            
            $scope.pageChanged = function() {
                fetch();
            };
            fetch();
        });
