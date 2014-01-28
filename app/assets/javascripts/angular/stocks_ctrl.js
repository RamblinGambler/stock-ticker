app.controller('StocksCtrl', ['$scope', 'Stock', function($scope, Stock) {
  $scope.stocks = Stock.all();

  $scope.deleteStock = function(id, idx) {
    Stock.delete(id);
    $scope.stocks.splice(idx, 1);
  };
}]);