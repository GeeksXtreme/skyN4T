
// Set to true to see lychee debug messages
lychee.debug = true;


// Rebase required namespaces for inclusion
lychee.rebase({
	lychee: "../../../lychee/source",
	game:   "./source"
});


// Tags are required to determine which libraries to load
lychee.tag({
	platform: [ 'nodejs-webgl', 'webgl', 'html' ]
});


lychee.build(function(lychee, global) {

	new game.Main();

}, typeof global !== 'undefined' ? global : this);

