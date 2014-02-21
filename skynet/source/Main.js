
lychee.define('game.Main').requires([
	'game.net.Client',
	'game.state.Game'
]).includes([
	'lychee.game.Main'
]).exports(function(lychee, game, global, attachments) {

	var Class = function(data) {

		var settings = lychee.extend({

			title: 'Game Boilerplate',

			// Is configured by sorbet/module/Server
			client: null,

			input: {
				delay:       0,
				key:         false,
				keymodifier: false,
				touch:       true,
				swipe:       true
			},

			jukebox: {
				music: true,
				sound: true
			},

			renderer: {
				id:     'game',
				width:  null,
				height: null
			},

			viewport: {
				fullscreen: false
			}

		}, data);


		lychee.game.Main.call(this, settings);

		this.load();

	};


	Class.prototype = {

		load: function() {


			// 1. Initialize Client via Sorbet Gateway
			lychee.game.Main.prototype.load.call(this);



			/*
			 * 2. MANUAL preloading:
			 *
			 * Usually, every Entity has its required
			 * assets attached to it, so you don't need
			 * to preload. If you still want to, here's
			 * how...
			 *
			 */

			/*

			var urls = [
				'./asset/img/example.png'
			];


			this.preloader = new lychee.Preloader({
				timeout: 5000
			});

			this.preloader.bind('ready', function(assets, mappings) {

				console.log(urls[0], assets[urls[0]]);

				this.assets = assets;
				this.init();

			}, this);

			this.preloader.bind('error', function(assets, mappings) {

				if (lychee.debug === true) {
					console.warn('Preloader error for these assets: ', assets);
				}

			}, this);

			this.preloader.load(urls);

			*/

		},

		init: function() {

			// Overwrite client with game.net.Client
			var clientsettings   = this.settings.client;
			this.settings.client = null;

			lychee.game.Main.prototype.init.call(this);

			this.reshape();


			if (clientsettings !== null) {
				this.client = new game.net.Client(clientsettings, this);
			}


			this.setState('game', new game.state.Game(this));
			this.changeState('game');

		}

	};


	return Class;

});
