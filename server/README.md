# SERVER>
    This is the listing of files copied from Superhero and the associated actions and required updates to configure with re-jiji

>models
	>user.js
	>listing.js
	>data in JSON for seeding DB or Postman

>routes
	>index.js 
		- standard express for .Router
		- export "router"
	>user.js 
		- standard express for .Router
		- UPDATE model from user.js to seeded to collection in MongoDB
		- export "router"
	>??? or listing.js 
		- standard express for .Router
		- UPDATE model from listing.js seeded to collection in MongoDB
		- export "router"

		Want to have 1 schema for each collection - 1 collection per CRUD

		We will have two models:  userID and listing, each with schema from this link:
		https://app.diagrams.net/#G1OSfeHqitMWooxYB1QKy3kEXx8PavaB34

		Review REST APIs: Create(POST), Read(GET), Update(PUT), Delete(Delete)
		Need to define endpoint or path - either userID or listing

		userID Endpoint segments: 
		GET/api/user/:userID to validate new unique userID in registration
		POST/api/user/ to register the new user with validation of schema inputs

		listing Endpoint segments: 
		GET/api/listing/:userID to query items to the userID
		PATCH - we could update listings IF we get that far.
		DELETE/api/listing/ to delete the listing only able to query with matching userID

>package.json 
	- nodemon and dependencies listed
		- cookie-parser
		- debug
		- express
		- http-errors
		- mongoose
		- morgan

>server.js - 

Add these dependencies?
bcryptjs - hash to password before storing?
concurrently - allow backend and frontend concurrently on different ports 3000/4400?
is-empty - global function to support validator?
jsonwebtoken - used for authorization?
passport - used to authenticate requests thru strategies?
passport-jwt passport strategy that uses JSON WebToken to authenticate endpoints?
validator - used to validate inputs such as email format, password match?
AND NODEMON ?