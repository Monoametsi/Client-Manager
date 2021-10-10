<h1> Client-Manager </h1>
<p> Client Manager is a small mock application that provides a platform for Relationship managers to manage their clients.
It helps them to view all information about their clients and also allows for them to make requests to their clients. 
The app also allows for clients to submit responses to requests through an interface. 
The app has no authentication and has been hard coded to look as if a user was logged in.
The webapp was created with the help of Python, Django and Sqlite. </p>

<h2>Running the Application Locally: </h2>

<ol>
	<li><code>$ git clone https://github.com/Monoametsi/Client-Manager.git </code></li><br>
	<li><code>$ cd try django</code></li><br>
	<li><code>$ virtualenv2 --no-site-packages env</code></li><br>
	<li><code>$ source ./Scripts/activate</code></li><br>
	<li><code>(env)$ pip install -r requirements.txt</code></li><br>
	<li><code>(env)$ cd src</code></li><br>
	<li><code>(env)$ python manage.py runserver</code></li><br>
	<li>Navigate to http://127.0.0.1:8000</li>
</ol>