
lychee.define('game.net.remote.Ping').includes([
	'lychee.net.Service'
]).exports(function(lychee, game, global, attachments) {

	/*
	 * HELPERS
	 */

	var _on_ping = function(data) {

		if (this.tunnel !== null) {

			this.tunnel.send({
				pingstart: data.pingstart,
				pingstop:  Date.now().toString(),
				pongstart: Date.now().toString()
			}, {
				id:    this.id,
				event: 'pong'
			});

		}

	};



	/*
	 * IMPLEMENTATION
	 */

	var Class = function(remote) {

		lychee.net.Service.call(this, 'ping', remote, lychee.net.Service.TYPE.remote);


		this.bind('ping', _on_ping, this);

	};


	Class.prototype = {

	};


	return Class;

});

