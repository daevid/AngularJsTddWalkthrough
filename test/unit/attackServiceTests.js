'use strict';
describe('AttackService tests', function() {
    var service;

    beforeEach(function() {
        module('gameModule');
        inject(function(attackService) {
            service = attackService;
        });
    });

    describe('when attack is called', function() {
        it('should reduce the mob\'s health by 20', function() {
            var mob = {currentHealth: 40};
            service.attack(mob);
            expect(mob.currentHealth).toEqual(20);
        });
    });


});