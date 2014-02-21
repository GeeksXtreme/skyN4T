
lychee.define('game.DeviceSpecificHacks').exports(function(lychee, game, global, attachments) {

	var Callback = function() {

		var settings = this.settings;

		if (typeof global.navigator !== 'undefined') {

			if (global.navigator.userAgent.match(/iPad/)) {

				settings.viewport.fullscreen = true;
				settings.jukebox.music = false;
				settings.jukebox.sound = true;

			} else if (global.navigator.userAgent.match(/Android/)) {

				settings.viewport.fullscreen = true;

			}

		}

	};

	return Callback;

});
