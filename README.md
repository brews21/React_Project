# React_Project

ReactDev
Learning React and Nodejs -- https://www.udemy.com/node-with-react-fullstack-web-development/

GitRepo -- https://github.com/StephenGrider/FullstackReactCode

Course content -- https://goo.gl/Xv4ZgB

Nodejs download -- https://nodejs.org/en/download/current/

Within "Server" file run -- "npm init" and accept defaults -- "npm install --save express"

--- LOOK INTO "Heroku" CAN THIS BE DONE ON AWS INSTEAD -- OR IS "Heroku" EASY ENOUGH/WORTH THE HASTLE TO SET UP
-- CAN BE RAN ON AWS, WILL HAVE TO INSTALL NODEJS ON THE SERVER -- WILL NEED TO LOOK INTO HOE NGINX CAN FIT INTO IT

NPM installs
--npm install --save express
--npm install --save passport passport-google-oauth20
--npm install --save nodemon
--npm install --save mongoose
--npm install --save cookie-session

package.json -- scripts to call
"scripts": {
"start": "node index.js",
"dev": "nodemon index.js"
},

To start the SERVER
either;
-- node index.js
-- npm run dev

HTTP is stateless
-- http cannot share info between requests
-- cookies/ tokens ... are used to identify you to a server per http request

MongoDB
-- a schema-less DB -- one difference compared to SQL and Postgres

Third party hosted MongoDB
-- https://mlab.com/databases/emaily-dev#users

every time we make connections to mongodb it is a async action -- promises

Optional Vid at end of Section4

-- with the code we include any cookie management automatically
-- two types of cookie handlers -- cookies-session and express-session

express-session vs cookie-session
-- key difference is that express is a reference to a session whereas cookie-session is the session
-- stores a reference to the session
-- cookie-session will store the data in the cookie, express will store in a remote "session store"
-- cookies are limited to 14kb whereas express-session has an "unlimited" amount

cookies-session takes the userID, finds the user and sets it on the req.session.

express-session takes the seesionID and looks up the relevent info from the session store, which returns all the data. store data in a remote datastore
