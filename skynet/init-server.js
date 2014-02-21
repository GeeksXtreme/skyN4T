
var path = "../../../lychee/source";

require(path + '/core.js');
require(path + '/Builder.js');
require(path + '/Preloader.js');

// bootstrap.js requires the root path to this file.
require(path + '/platform/nodejs/bootstrap.js')(__dirname);

require('./source/net/Server.js');


// lychee.debug = true;


lychee.rebase({
	lychee: "../../../lychee/source",
	game:   "./source"
});


lychee.tag({
	platform: [ 'nodejs' ]
});


lychee.build(function(lychee, global) {

	var host = process.argv[2] || 'null';
	var port = process.argv[3] || '8181';


	if (host === 'null') host = null;

	if (typeof port === 'string') {
		port = parseInt(port, 10);
	}

	if (!isNaN(port)) {

		var server = new game.net.Server();

		server.listen(port, host);

	}

}, typeof global !== 'undefined' ? global : this);

