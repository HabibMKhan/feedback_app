let app = angular.module('app', []);

app.controller('FeedbackController', function($scope) {

  $scope.assignmentName = 'Personal Question';

  $scope.defaultParagraphFeedback = {};
  $scope.defaultParagraph = '';
  $scope.secondaryParagraphFeedback = {};
  $scope.secondaryParagraph = '';

  $scope.defaultComments = [
    'Awesome job this week '
  ];
  $scope.secondaryComments = [
    'Overall, good job! '
  ];

  $scope.setDefaultParagraph = () => {
    $scope.defaultParagraph = '';
    for (key in $scope.defaultParagraphFeedback) {
      $scope.defaultParagraph += $scope.defaultParagraphFeedback[key];
    }
  };

  $scope.toggleDefaultCommentSelection = (value, index) => {
    let i = 'comment' + JSON.stringify(index);
    if (!$scope.defaultParagraphFeedback[i]) {
      $scope.defaultParagraphFeedback[i] = value;
    } else {
      $scope.defaultParagraphFeedback[i] = '';
    }
    $scope.setDefaultParagraph();
  };


  $scope.setSecondaryParagraph = () => {
    $scope.secondaryParagraph = '';
    for (key in $scope.secondaryParagraphFeedback) {
      $scope.secondaryParagraph += $scope.secondaryParagraphFeedback[key];
    }
  };

  $scope.toggleSecondaryCommentSelection = (value, index) => {
    let i = 'comment' + JSON.stringify(index);
    if (!$scope.secondaryParagraphFeedback[i]) {
      $scope.secondaryParagraphFeedback[i] = value;
    } else {
      $scope.secondaryParagraphFeedback[i] = '';
    }
    $scope.setSecondaryParagraph();
  };
});
