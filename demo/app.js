"use strict";

const path = require("path");
const express = require( "express" );
const filemanager = require( path.resolve(__dirname, "../") ); 	// Should be `require("rich-filemanager-node")` in your project
const config = __dirname + "/public/config/filemanager.config.json";	//Change this to the actual location of your config file

var app = express();


// These middlewares are being used to serve static files.

//  static files from rich-filemanager module.
app.use( express.static('node_modules/rich-filemanager') );

// Static files from the demo public folder
app.use( express.static(__dirname + '/public') );

//Filemanager route
app.use( '/filemanager', filemanager( __dirname + '/uploads', config ) );
// '/filemanager' is the connector url. 
// Don't forget to set it in the api.connectorUrl of `filemanager.config.json` for the frontend

//Listen for requests
const port = process.env.PORT || 5000;

app.listen( port, function(){
	console.log ( 'App listening on port ' + port );

	// Launch the demo in the browser
	const opn = require("opn");
	opn("http://localhost:" + port );
})