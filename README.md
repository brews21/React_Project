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

package.json -- how to start Server

"scripts": {
"start": "node index.js",
"dev": "nodemon index.js"
},

HTTP is stateless
-- http cannot share info between requests
-- cookies/ tokens ... are used to identify you to a server per http request

MongoDB
-- a schema-less DB -- one difference compared to SQL and Postgres

Third party hosted MongoDB
-- https://mlab.com/databases/emaily-dev#users

every time we make connections to mongodb it is a async action -- promises
