'use strict;'

describe('gameController tests', function() {
    var controller, scope, mockAttackService;

    beforeEach(function() {
        module('gameModule');
    });

    beforeEach(inject(function($controller, $rootScope, attackService) {
        scope = $rootScope.$new();
        mockAttackService = sinon.stub(attackService);
        controller = $controller('gameController', {$scope: scope, attackService: attackService});
    }));

    describe('when constructing the controller', function() {
        it('should set Ganandorf as the first mob', function() {
            expect(scope.mob).toEqual({name: 'Ganandorf', totalHealth: 120, currentHealth: 120, imageUrl: 'img/Ganandorf.jpg'});
        });
    });

    describe('when the attack button is clicked', function() {
        it('should attack the mob', function() {
            scope.mob = {name: 'Ganandorf', totalHealth: 120, currentHealth: 120, img: ''};

            scope.attack();

            expect(mockAttackService.attack.calledWith(scope.mob)).toBeTruthy();
        });
    });
});