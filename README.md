# Rich Filemanager - Node Connector

This package is a NodeJS connector for [Rich File Manager](https://github.com/servocoder/RichFilemanager). It is implemented as an api, so you can use it on a seperate server from your front-end.

## Installation
```
npm install rich-filemanager-node --save
```
## Usage
This connector is implemented as a middleware for Expressjs. The code sample is an express app that implements the connector

```javascript
const express = require( "express" );
const filemanager = require( "rich-filemanager-node" );
const config = "/path/to/filemanager.config.json";	//Change this to the actual location of your config file
var app = express();

//Filemanager route
app.use( '/filemanager', filemanager( "/path/to/dir", config ) );
// '/filemanager' is the connector url. 
// Don't forget to set it in the api.connectorUrl of `filemanager.config.json` for the frontend

//Listen for requests
const port = process.env.PORT || 9000;
app.listen( port, function(){
	console.log ( 'App listening on port ' + port );
})
```
Note: `config` can be an object or a file path

## Important
When using this connector in your project, the filemanager route must come before any body-parsing ( multer, body-parser, busboy, etc ) routes;

## Demo Project
This project includes a demo to help you setup your project.

Follow these steps to set up the demo


1. Clone this repo:

	`git clone https://github.com/dekyfin/RichFilemanager-NODE.git fileman`
	
	You can alternatively download the repo and unzip it into a folder called `fileman`
2. Enter the project directory: `cd fileman`
3. Install all dependencies: `npm install`
4. Start the demo:  `npm run demo`



## API functions not yet implemented
1. seekfolder
2. summarize
3. extract