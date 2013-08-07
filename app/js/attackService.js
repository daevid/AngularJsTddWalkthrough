gameModule.factory('attackService', function() {
    return {
        attack: function(mob) {
            mob.currentHealth -= 20;
        }
    };
});