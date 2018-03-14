# Rich Filemanager - Node Connector

This connector is actually an api, so you can use it on a seperate server from your ui.

## Installation
```
npm install rich-filemanager-node --save
```
## Usage

`app.js`

```JAVASCRIPT
const express = require( "express" );
const filemanager = require( "rich-filemanager-node" );
const config = "/path/to/filemanager.config.json";
var app = express();

//Filemanager route
app.use( '/filemanager', filemanager( "/path/to/dir", config ) );


//Listen for requests
const port = process.env.PORT || 9000;
app.listen( proc, function(){
	LOG.info ( 'App listening on port ' + port );
})
```
Note: `config` can be an object or a file path

## Important
When using this connector in your project, the filemanager route must come before any body-parsing ( multer, body-parser, busboy, etc ) routes;


## API functions not yet implemented
1. seekfolder
1. summarize
1. extract