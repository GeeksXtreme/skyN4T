
lychee.define('game.net.Client').requires([
	'lychee.data.BitON',
	'game.net.client.Ping'
]).includes([
	'lychee.net.Client'
]).exports(function(lychee, game, global, attachments) {

	var _BitON = lychee.data.BitON;
	var _ping  = game.net.client.Ping;


	var Class = function(settings, game) {

		this.loop = game.loop || null; // required for reconnect

		this.services = {};
		this.services.ping = new _ping(this);


		lychee.net.Client.call(this, {
			encoder: _BitON.encode,
			decoder: _BitON.decode
		});


		this.bind('connect', function() {

			this.plug(this.services.ping);


			if (lychee.debug === true) {
				console.log('(Boilerplate) game.net.Client: Remote connected');
			}

		}, this);

		this.bind('disconnect', function(code, reason) {

			if (lychee.debug === true) {
				console.log('(Boilerplate) game.net.Client: Remote disconnected (' + code + ' | ' + reason + ')');
			}

			if (this.loop !== null) {

				this.loop.setTimeout(1000, function() {
					this.connect();
				}, this);

			}

		}, this);


		this.listen(settings.port, settings.host);

	};


	Class.prototype = {

	};


	return Class;

});

