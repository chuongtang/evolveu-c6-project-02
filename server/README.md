# SERVER>
    This is the listing of files copied from Superhero and the associated actions and required updates to configure with re-jiji

>models
	>db.js
		- set-up mongoose 
		- credentials for mongoDB 
			- user - gwhagerty
			- password - gwhagerty
			- DBName - rejiji
			- mongoServer - mongodb+srv://gwhagerty:<password>@rejiji.v07fo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
		- return status of DB connection or Error
	>user.js 
	>listing.js
        - sets schema for user and listing model

>node_modules
	- Have not updated, checked .gitignore is enabled
	- Based off of npx create-react-app, may have unnecessary modules

>routes
	>index.js 
		- standard express for .Router
		- export "router"
	>user.js 
		- standard express for .Router
		- UPDATE model from user.js to ***********
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

Added more dependencies:
bcryptjs - hash to password before storing
concurrently - allow backend and frontend concurrently on different ports 3000/4400
is-empty - global function to support validator
jsonwebtoken - used for authorization
passport - used to authenticate requests thru strategies
passport-jwt passport strategy that uses JSON WebToken to authenticate endpoints
validator - used to validate inputs such as email format, password match
AND NODEMON 