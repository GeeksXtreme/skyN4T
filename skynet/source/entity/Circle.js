
lychee.define('game.entity.Circle').includes([
	'lychee.ui.Entity'
]).exports(function(lychee, game, global, attachments) {

	var _sound = attachments["snd"];


	var Class = function(data, game) {

		var settings = lychee.extend({}, data);


		this.game = game || null;

		this.color = '#888888';

		this.__pulse = {
			duration: 500,
			color:    '#888888',
			radius:   0,
			start:    null,
			active:   false
		};


		this.setColor(settings.color);

		delete settings.color;


		settings.radius = 48;
		settings.shape  = lychee.ui.Entity.SHAPE.circle;


		lychee.ui.Entity.call(this, settings);

		settings = null;



		/*
		 * INITIALIZATION
		 */

		this.bind('touch', function() {

			this.game.jukebox.play(_sound);


			var color = this.color;
			if (color === '#ff3333') {
				this.setColor('#33ff33', true);
			} else {
				this.setColor('#ff3333', true);
			}

		}, this);

	};


	Class.prototype = {

		/*
		 * ENTITY API
		 */

		serialize: function() {

			var data = lychee.ui.Entity.prototype.serialize.call(this);
			data['constructor'] = 'game.entity.Circle';


			return data;

		},

		update: function(clock, delta) {

			var pulse = this.__pulse;
			if (pulse.active === true) {

				if (pulse.start === null) {
					pulse.start = clock;
				}

				var t = (clock - pulse.start) / pulse.duration;
				if (t <= 1) {
					pulse.radius = t * this.radius;
				} else {
					this.color = pulse.color;
					pulse.active = false;
				}

			}


			lychee.ui.Entity.prototype.update.call(this, clock, delta);

		},

		render: function(renderer, offsetX, offsetY) {

			var position = this.position;
			var radius   = this.radius;

			renderer.drawCircle(
				offsetX + position.x,
				offsetY + position.y,
				radius,
				this.color,
				true
			);


			var pulse = this.__pulse;
			if (pulse.active === true) {

				renderer.drawCircle(
					offsetX + position.x,
					offsetY + position.y,
					pulse.radius,
					pulse.color,
					true
				);

			}

		},



		/*
		 * CUSTOM API
		 */

		setColor: function(color, fade) {

			color = typeof color === 'string' ? color : null;
			fade  = fade === true;


			if (color !== null) {

				if (fade === true) {

					var pulse = this.__pulse;

					pulse.duration = 250;
					pulse.color    = color;
					pulse.radius   = 0;
					pulse.start    = null;
					pulse.active   = true;

				} else {

					this.color = color;

				}


				return true;

			}


			return false;

		}

	};


	return Class;

});

