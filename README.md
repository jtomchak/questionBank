##Making a question bank
* Clone

1. Make new db at mlabs, questionbank
  * questions collection
2. Connect to new db using Mongoose in your cloned question bank app
3. route '/questions' shows an input template with title question and text box for answer. Currently it just POST and out to console. **MOVE** logic into questions controller. 
4. Create questions schema. Should have at least question, answer, createdAt, updatedAt, author
5. Now, instead of console.log we want to insert into our database at mlabs that we created!!!!!!! how cool!!! 


## Making the question bank list
1. on the questions page, (root app) lets list the questions and author in order of most recent (updatedAt) to oldests, Limit list to 25
2. let's add a button to LINK to the 'questions/new' route, a sort of add question button
3. Sweet! now on successful submit (add new question), we want to redirect and render the questions page with our list of questions, the one we just added should be at the top!
4. **ALSO** We want to be able to click on a question, and be taken to /editquestion where the form has all the data(question, answer, author) already filled out. This will let the user edit the question, answer, or author fields and hit "update". This will then return the user to the home page (root) with the list of 25 questions. 
5. Add some sweet style, bc marketing wants more padding!!!!