##Making a question bank
* Clone

1. Make new db at mlabs, questionbank
  * questions collection
2. Connect to new db using Mongoose in your cloned question bank app
3. route '/questions' shows an input template with title question and text box for answer. Currently it just POST and out to console. **MOVE** logic into questions controller. 
4. Create questions schema. Should have at least question, answer, createdAt, updatedAt, author
5. Now, instead of console.log we want to insert into our database at mlabs that we created!!!!!!! how cool!!! 


##Making the question bank list
1. on the questions page, rather than add question lets list the questions and author in order of most recent to oldests
1. our template to add questions needs to be moved to 'questions/new'
2. Limit list to 25
3. let's add a button to LINK to the 'questions/new' route, a sort of add question button
4. Sweet! now on successful submit (add new question), we want to redirect and render the questions page with our list of questions, the one we just added should be at the top!
5. Add some sweet style, bc marketing wants more padding!!!!