- play with routes and route extensions ex. /hello // hello/2
- orders or sequence of routes matter a lot

- write logic to handle GET, POST,PUT,DELETE by adding routes and play with app.use make naming convention in postman

- diff b/w app.use and app.all

- middlewares are used to eliminate the redundancy of code ex- to check whether user is authorised or not

-  write a dummy auth middlewares for all user routes except  /user/login routes

- error handling using app.use("/",(err,req,res,next)=>{})

- in a cluster there can be multiple databases 

-create a free cluster on mong atlas
-install mongoose
- connect application with the database devTinder
- connect databse before startig the server 


-- study about promises and async & await
--  Database connections are input/output (I/O) operations, and I/O operations are generally asynchronous in JavaScript
-- js object and json diff
-- make data dynamic
-- use express.json to convert json into javascript object and attached with req.body

-- User.findOne with duplicate email id which one it will return new or old 
-- explore mongoose documentaion
-- what are options in findByIdnad update play with options 


-- explore schemaTypes from documentaion
-- add custom validations for gender field and some other field also in user schema
-- improve DB schema- put appropriate validations on each field in schema
-- Add timestamps for  userSchema 
-- DB level validation and Api level validations both are important
-- Add api level validations on Patch request & Signup post api
-- Add api validation for each field 
-- sanitize data before entering into the database
-- install validator
-- explore all functions for validator library use validator function for pass, emal, photourl, pgonenymber
-- explore validator package documentation dont write manual code for validations for filed like email, password
-- Put api level validations using validator
-- never trust req.body while patch and post it can have any malicious data which can break database always sanitize and validate data