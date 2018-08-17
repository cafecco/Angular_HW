let app = angular.module('myApp', []);

app.directive('container', function () {
  return {
    restrict: 'EA',
    controllerAs: 'container',
    controller: buttonAlerts,
  }
});

app.directive('myButton', function () {
  return {
    restrict: 'EA',
    transclude: true,
    replace: true,
    templateUrl: 'my-button.html',
  }
});

function buttonAlerts() {
  this.buttonOne = function () {
    alert('Привет, Макар.');
  };
  this.buttonTwo = function () {
    alert('Как у тебя дела?');
  };
  this.buttonThree = function () {
    alert('Хорошего тебе дня!');
  };
}