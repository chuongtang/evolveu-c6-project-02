# SERVER>
    This is the listing of files copied from Superhero and the associated actions and required updates to configure with re-jiji

>models
	>db.js
		- set-up mongoose 
		- credentials for mongoDB 
			- user
			- password
			- DBName
			- mongoServer
		- return status of DB connection or Error
	>Superhero.js (not superhero.js in routes)
        - sets schema for superheroSchema model

>node_modules
	- Have not updated, checked .gitignore is enabled
	- Based off of npx create-react-app, may have unnecessary modules

>routes
	>index.js 
		- standard express for .Router
		- export "router"
	>superhero.js 
		- standard express for .Router
		- UPDATE model from Superhero.js to ***********
		- export "router"

>apps.js 
	- standard list of required dependencies for APP
	- will need to update ROUTES ln 8/18
	- export "app"

>package.json 
	- nodemon and dependencies listed
		- cookie-parser
		- debug
		- express
		- http-errors
		- mongoose
		- morgan

>server.js - standard set-up of localhost:3000