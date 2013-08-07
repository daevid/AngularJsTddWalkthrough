gameModule.controller('gameController', function($scope, attackService) {

    $scope.mob = {name: 'Ganandorf', totalHealth: 120, currentHealth: 120, imageUrl: 'img/Ganandorf.jpg'};

    $scope.attack = function() {
        attackService.attack($scope.mob);
    };
});