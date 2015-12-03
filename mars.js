(function () {

    process.on('uncaughtException', function (e) {
        console.log('uncaughtException', e);
    });

    var sys = require('require-dir')('lib/system');
    var lib = require('require-dir')('lib');
    var mod = require('require-dir')('modules');

    function init() {
        sys.bus.emit('refresh', 'config');
        sys.bus.emit('refresh', 'tasks');
    }
    init();

})();