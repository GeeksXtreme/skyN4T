
lychee.define('game.state.Game').requires([
	'lychee.ui.Button',
	'lychee.ui.Label',
	'game.entity.Button',
	'game.entity.Circle'
]).includes([
	'lychee.game.State'
]).exports(function(lychee, game, global, attachments) {

	var _blob  = attachments["json"];
	var _fonts = {
		headline: attachments["headline.fnt"],
		normal:   attachments["normal.fnt"]
	};


	var Class = function(game) {

		lychee.game.State.call(this, game);


		this.intervalId = null;


		this.deserialize(_blob);
		this.reshape();

	};


	Class.prototype = {

		deserialize: function(blob) {

			lychee.game.State.prototype.deserialize.call(this, blob);


			var entity = null;


			var client = this.client;
			if (client !== null) {

				entity = this.queryLayer('ui', 'statistics');


				var service = client.services.ping;
				if (service !== null) {

					service.bind('unplug', function() {
						this.setLabel('Ping: - ms / - ms');
					}, entity);

					service.bind('statistics', function(ping, pong) {
						this.setLabel('Ping: ' + ping + ' ms / ' + pong + ' ms');
					}, entity);

				}

			}

		},

		reshape: function(orientation, rotation) {

			lychee.game.State.prototype.reshape.call(this, orientation, rotation);


			var entity = null;


			var renderer = this.renderer;
			if (renderer !== null) {

				var width  = renderer.width;
				var height = renderer.height;


				entity = this.queryLayer('ui', 'button');
				entity.position.y = 1/2 * height - 42;

			}

		},

		enter: function() {

			lychee.game.State.prototype.enter.call(this);


			var circle = this.queryLayer('ui', 'circle');
			if (circle !== null) {
				circle.setColor('#888888', true);
			}


			var loop = this.loop;
			if (loop !== null) {

				this.intervalId = loop.setInterval(1000, function() {

					var client = this.client;
					if (client !== null) {

						var service = this.client.services.ping;
						if (service !== null) {
							service.ping();
						}

					}

				}, this);

			}


		},

		leave: function() {

			var loop = this.loop;
			if (loop !== null) {
				loop.removeInterval(this.intervalId);
			}


			lychee.game.State.prototype.leave.call(this);

		}

	};


	return Class;

});
