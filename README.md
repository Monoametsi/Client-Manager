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
	<li>If the command does not run immediately, go to the manage.py file, write whatever text you want, comment that text 
	out then save the file. The command should run after saving the file</li><br>
	<li>Navigate to http://127.0.0.1:8000/admin/</li><br>
	<li>Log in with the information you gave to the createsuper instructions.</li><br>
	<li>Navigate to http://127.0.0.1:8000/admin/client_manager/client/add/ to create a mock client</li><br>
	<li>Navigate to http://127.0.0.1:8000/ to view client information.</li><br>
	<li>Click either the send request button or the envelope icon to activate 
	a form that you can use to send a request to the client.</li><br>
	<li>Navigate to http://127.0.0.1:8000/admin/client_manager/client/ and copy the uuid of the client,
	which is the text written in between brackets next to the name Client object.</li><br>
	<li>Paste the uuid next to the following url http://127.0.0.1:8000/client-dashboard/ and navigate to it.
	your url will look something like this, http://127.0.0.1:8000/client-dashboard/72373c0e-a1be-480c-9533-4c3aea148fc2</li><br>
	<li>You will have accessed the client interface, click the table row to access a form the will allow you to send 
	documents as a response to the relationship manager's request.</li><br>
	<li>After successfully submitting the document, navigate back to http://127.0.0.1:8000/ and click the table row of the client who sent the file. 
	A side navigation will pop up which will include a link to the file sent by the client. 
	Click the link to view the document sent by the client.</li><br>
	<li>The apps mission is accomplished, you have used the app to its full extent and now understand what its all about.
	Play around with it by creating more clients, sending more documents as a client and viewing them on the relationship manager's page as 
	instructed in the instructions above.</li>
</ol>