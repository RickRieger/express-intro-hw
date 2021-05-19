Express hw
ONLY .gitignore node_modules***

Create an express app
1. Make a new directory called express-intro-hw
2. Go inside express-intro-hw folder
3. In terminal, Make an app.js file using touch
4. In terminal, npm init -y
5. Open folder
6. Add express, Morgan, and ejs through npm i and call them inside app.js file
7. Create a server using Express, and use logger (Morgan) in App.js (don’t forger to use .json())
8. Create a view folder
9. Make sure the views folder and view engine is connected to ejs through path in App.js (review class work if you don’t remember)
10. Add a public folder and connect it in App.js
11. Make a javascript, image and stylesheet folder inside the public folder
12. In stylesheet folder, add style.css file
13. In javascript folder, add method.js that logs "hello world"
14. In image folder, add 3 random pictures of your choice
15. Connect style, javascript and images file to each ejs file as needed

We will be making different requests, and different ejs files. Please follow naming convention based on the instructions.

16. Create a GET request with path “/“ that renders index.ejs with user info (a name) and 3 fun light infos of yourself(array of info).
a. In index.ejs should contain the html:5 boilerplate, a h1 that says `Welcome to my App ${user.name}`, and the list of fun light info of yourself. ex: "My favorite cuisines contain only carbs!!!". Also the h1 should be colored as your favorite color, this style should be imported in from stylesheets.

17. Create a GET request with path "/photo-fun" that renders photos.ejs
a. In photos.ejs should contain html:5 boilerplate, and all 3 photos from images folder

18. Create a GET request with path "/:pet/:age" that renders pets.ejs
a. In pets.ejs should show the pet's name and age (which is grabbed from the params... should be passed through from the GET request). Should attach method.js to log hello world in your browser.