<h1><strong>Dynamic Questionnaire System</strong></h1>

<h3>Description</h3> 
This is a backend developed on node.js and express framework for the project . The system designs a questionnaire with different validations and condtitions. The questionnare generated can then be rendered by frontend based on validation provided in the questions and then can be taken by end users and be submitted .
Server - Node.js
Language - Javascript
Framework - express.js
Data base - MongoDB

<h4><strong>How to Install and Run the Project</strong> </h4>
steps to install the git repo
<ol>
<li>git clone ["git-http-utl](https://github.com/inderjeetKaur97/planet-x-dynamic_questionnaire_system.git)</li>
<li>npm install //node_modules</li>
</ol>

<h4><strong>How to use the project </strong> </h4>
<p>Below is the api documentation url for the project . The documentation is written with all request , response and other parameters</p>
<h5>Postman collection documentaion URL - </h5>
<a href="https://documenter.getpostman.com/view/32959700/2sA3JNa11Z">https://documenter.getpostman.com/view/32959700/2sA3JNa11Z</a>

<h4><strong>Project Folder Structure</strong> </h4>
<p>Following are the project modules</p>
<ol>
<li>config - has env variables(to be used directly as variables) and db configuration file</li>
<li>controller - has controller function for user and questionnaire module</li>
<li>helpers - has modular function like generate auth token and response handler class.</li>
<li>middleware - has auth middleware used in questionnaire apis</li>
<li>models - has mongodb collection schema written with mongoose library</li>
<li>resources - has function to read/write into databse collection</li>
<li>routes - has user and questionnaire route modules</li>
<li>validation - has joi validation functions used as middleware in apis</li>
<li>.gitignore - has has node modules in gitignore. .env is added to repo as it is a sample project</li>
<li>app.js - has the app logic in the file</li>
<li>server.js - has server and port logic in the file</li>
</ol>

<h4><strong>Project Flow</strong> </h4>
<ol>
<li>The project user authentication and role authorisation for admin and user</li>
<li>Admin needs to be created manually. user can be created by admin only/li>
<li>admin can create a questionnaire . The questionnaire fields can have various validations. The validations are added in a meta collection where certain propeties like a number can have min_limit ,max_limit is given . many more properties can be created/li>
<li>Frontend can fetch these properties and can show what validation admin wants to add/li>
<li>Admin can add those validations to the questionnaire and create it/li>
<li>User are then allowed to submit questionnaire/li>
<li>Admin can view analytics like , total views , total submissions , total views by a particular user etc</li>
</ol>

