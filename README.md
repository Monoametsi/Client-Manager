<h1> Client-Manager </h1>
<p> Client Manager is a small mock application that provides a platform for Relationship managers to manage their clients.
It helps them to view all information about their clients and also allows for them to make requests to their clients. 
The app also allows for clients to submit responses to requests through an interface. 
The app has no authentication and has been hard coded to look as if a user was logged in.
The webapp was created with the help of Python, Django and Sqlite. </p>

<h2>Running the Application Locally: </h2>

<ol>
	<li>Install python 3.7.3</li><br>
	<li><code>$ git clone https://github.com/Monoametsi/Client-Manager.git </code></li><br>
	<li><code>$ cd Client-Manager</code></li><br>
	<li><code>$ virtualenv env</code></li><br>
	<li><code>$ source ./Scripts/activate</code></li><br>
	<li><code>$ pip install -r requirements.txt</code></li><br>
	<li><code>$ cd src</code></li><br>
	<li><code>$ touch .env</code></li><br>
	<li> Navigate to https://djecrety.ir/ , generate a secret key and copy it.</li><br>
	<li>Open .env file and write <code>SECRET_KEY=(Paste generated secret key)</code>, 
	done forget to paste your generated secret key.</li><br>
	<li><code>$ python manage.py makemigrations</code></li><br>
	<li><code>$ python manage.py makemigrations client_manager</code></li><br>
	<li><code>$ python manage.py migrate</code></li><br>
	<li><code>$ python manage.py migrate client_manager</code></li><br>
	<li><code>$ python manage.py createsuperuser</code></li><br>
	<li>Follow instructions from createsuper command</li><br>
	<li><code>$ python manage.py runserver</code></li><br>
	<li>Navigate to http://127.0.0.1:8000/admin/</li>
	<li></li>
</ol>