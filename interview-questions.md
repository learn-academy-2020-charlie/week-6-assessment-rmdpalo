# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: the foreign key would be named Animal_id and the foreign key would be part of the sightings model because the sightings belong to the Animal.

  Researched answer:
  a has_many association indicates a one to many association. It tells us that multiple entries in this table can belong to a single entry in the table that it belongs to. therefore the foreign key must exist on the table that belongs_to another.



2. Which routes must always be passed params and why?

  Your answer: I'm not entirely sure but my educated guess would be that any routes that require user input, for example if a route that returns any entries in the database contain a certain value, the parameter the user is searching for must be passed through the route.

  Researched answer: routes that need to get entries that meet a certain condition must have params passed into it, this is because when we generate the paths we ask the user to enter a param to finish the url 
  i.e. (
    get '/books/:id', to 'books#show', as: 'book'
    @book = Book.find(params[:id])
    )

we could do the same thing to find entries that meet other params, so long as we have routes made for these. An example of this is if we had a method that returned all the books written by a particular author.

3. Based on your knowledge of Rails conventions, write a route for a webpage called "game" that takes in a parameter called "guess" with a controller called "main".

  Your answer:
  get 'game/guess' => 'main#game'



4. Name three rails generator commands. What is created by each?

  Your answer:
  rails generate migration (creates a migration file for us to alter our schema)
  rails generate resource (generates basic routes for us.)
  rails generate model (generates models for us, we input the column and data type of the expected input.)

  Researched answer:
  the generate command allows us to easily create a number of things. If you want to get the list of things you can generate enter "rails generate" to get a list.



5. Consider the Rails routes below. Describe the responsibility of each route.

method="GET"    /users          

  Gets all the entries in the table "users".

method="GET"    /users/1  

  Gets the entry in the table "users" with the id of 1.

method="GET"    /users/new

  Gets the newly created user entry.

method="GET"    /users/edit/1    

  Gets the newly edited entry in the table "users" with the id of 1.

method="POST"   /users/       

  Allows us to create a new entry in the table "users"

method="PUT"    /users/1     

  Allows us to edit the entry with an id of 1 in the table "users"

method="DELETE" /users/1      

  Deletes the entry in the table "users" with an id of 1.
