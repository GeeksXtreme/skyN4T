
lychee.define('game.net.Server').requires([
	'lychee.data.BitON',
	'game.net.remote.Ping'
]).includes([
	'lychee.net.Server'
]).exports(function(lychee, game, global, attachments) {

	var _BitON = lychee.data.BitON;
	var _ping  = game.net.remote.Ping;


	var Class = function() {

		lychee.net.Server.call(this, {
			encoder: _BitON.encode,
			decoder: _BitON.decode
		});


		this.bind('connect', function(remote) {

			console.log('(Boilerplate) game.net.Server: New Remote (' + remote.id + ')');

			remote.register('ping', _ping);
			remote.accept();

		}, this);

	};


	Class.prototype = {

		listen: function(port, host) {

			console.log('(Boilerplate) game.net.Server: Listening on ' + host + ':' + port);

			lychee.net.Server.prototype.listen.call(this, port, host);

		}

	};


	return Class;

});

