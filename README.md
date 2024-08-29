############ Assignment 1.1: The Foundation ############

In this course, we will use HTML, CSS, and JavaScript to learn the basics of programming. For this assignment, we will create 2 webpages. We will add more code to these pages as the class progresses. 

Files that we will create in this assignment:

index.html
boards.html
Objectives
Understand and code 2 working HTML pages.
Understand technical requirements
Translate technical requirements into 2 HTML pages.
Code HTML 5.0 tags
Requirements
Code each of the following tags below to create an index.html page:

Doctype
HTML open/close tags
Head open/close tags
Title open/close tags
Title text
Body open/close tags
Header open/close tags (hint, h1)
Header text (i.e., page title)
Paragraph open/close tags
Add a fun (school-appropriate) meme to the page. 
Download the image file (.jpg, .png, .gif, or .webp)
Save the image to the same folder where the index.html is located
Include the image in the index.html page using an img tag and place it in between the opening and closing paragraph tags, like so:
<p>

    <img id="memeImage" src="replace_with_the_file_name_and_extension_of_the_image">

</p>

Once you have created the index.html, create another .html page called boards.html
Copy and paste all of the code from index.html to boards.html
Change the title text and the header text
Remove the meme image (delete the whole <img ... > tag)
Copy and paste the program objectives for your major into the boards.html page. 
The program objectives can be found in the University Catalog: UAT Catalogs
Create a nice look and feel for the user.
Comment above almost every line of your code
Comment syntax: <!-- This is an HTML comment -->
Put a comment at the top of your HTML file with your name in it.
Deliverables
Submit a print screen of your application running.
Submit a link to your GitHub repo (see below if you have not set this up yet). 
GitHub (https://github.com/ (Links to an external site.)) is used as a software repository (repo for short). It is a place to store and distribute code for teams of people developing the software. 

For coding assignments, you can:

create a specific repo for the assignment
make the repo public
submit the location of that repo as the submission for the assignment


############ Assignment 1.3: Using CSS to make it personal ############

In this course, we will use HTML, CSS, and JavaScript to learn the basics of programming. For this assignment, we will create a Cascading Style Sheet file that we will link to in each of our html pages. 

File that we will create in this assignment:

main.css
Objectives
Understand and set the website style using a CSS page.
Understand technical requirements
Code CSS tags
Requirements
Code each of the following properties below to set the style for your website:

the properties are set with this syntax:

selector{

property: value;

}

For the body properties
background-color - set a background color you like
color - set the text color you like
For the nav properties
height - set to 6000px
width - set to 200px
float - set to left
padding - set to 5px
line-height - set to 30px
For the footer properties
text-align - set to center
margin-right - set to 200px
For the #memeImage properties
margin-right - set to 200px
For the header properties
text-align - set to center
Link the main.css page to the index.html and boards.html pages between the opening and closing head tags in the index.html and boards pages, like so:
<link rel="stylesheet" href="main.css">

Deliverables
Submit a print screen of your application running.
Submit a link to your GitHub repo (see below if you have not set this up yet). 
GitHub (https://github.com/ (Links to an external site.)) is used as a software repository (repo for short). It is a place to store and distribute code for teams of people developing the software. 

For coding assignments, you can:

create a specific repo for the assignment
make the repo public
submit the location of that repo as the submission for the assignment

############ Assignment 2.1: The Building Blocks for Javascript - Functions ############

Objectives

Understand the role of JavaScript Functions
Write Functions
Comment Functions
Comment code to show your understanding of it.
Understand Inline JavaScript
Understand External JavaScript
Requirements

Create a new webpage called game.html
Add a button to the game.html program to play a game.
You can choose a game of your own (NOT guess a number) or use the rules below to implement at least two random #, some math, conditionals (if/else if/else), and have all the output go the web page from the .js through the use of “.innerhtml “in the javascript.
In a separate code.js page, write a function to implement the game (the function called when the button is clicked)
Comment the function to describe what it does.
Create another function that takes a parameter and uses this input value and outputs results.
Comment almost every line of HTML and JavaScript code demonstrating you know what it does.
Link the .js file to the main HTML file.
Test the program and insure it works properly.
Add a great User Experience, Turn this into Quarks Casino or your choice – make it your own!
Craps Rules

Generate 2 random #s between 1 and 6/output

Calculate the sum/output

If sum = 7 or sum = 11, output CRAPS – you lose!

Else if die1 = die2 and die1 % 2 = 0

Note – die1 %2 = 0 means die1 is even and Else if die1 = die2 and die1 % 2 = 0 means the die are equal (doubles) and even (2,4,6).

            Output You won!

Else

            Output     You pushed!

 

 Deliverables

Submit your .html file
Submit your .js file
Submit any supporting files such as images and sound
OR

Submit the link to you GitHub repo. 
Submit screenshots of your code running.

############ Assignment 3.1: Palindrome Checker ############

Objectives:
Palindromes are words that are spelled the same forward or backward, for example, "radar". For the assignment, you will ask the user to enter a word or phrase and then you will check to see if the letters are the same forward and backward.

Requirements:
Create a new page called strings.html
Create a loop and add a prompt for the user to enter a string.
After you notify the user if the string was a palindrome or not, give the user the option of entering another word.
If the user is done entering words, exit out of the loop.
Check if the string is spelled the same forwards and backward (hint, remove the spaces before checking).
Have at least 2 creative elements – images, fonts, background color, etc. 
Create a nice look and feel for the user and make a great user experience!
Comment above almost every line of your code, both HTML and JavaScript!
Put a comment at the top of your HTML file with your name in it.
Take one or more screen prints of your application running.
Deliverable:
Submit GitHub repo address.
Submit a print screen of your application running.

############ Assignment 3.2: User Input Validation ############

Security is a critical part of every area of tech. For this assignment, you are going to require the user to give you some information before they can access a secret message that your website holds.

Objectives:
String manipulations
User input validation
Requirements:
Use the strings.html page you created in the previous assignment.
Add separate text box inputs for the user's first and last names.
Combine the first name + space + last name into a variable.
Check if the variable has more than >20 characters and give a warning – do not continue the program if invalid.
A text box input for the user's zip code
Check if the zip code is valid and contains just 5 digits – do not continue the program if invalid
If the inputs are valid, show the user the secret message from the website.
Have at least 1 creative element – images, fonts, background color, etc. 
Create a nice look and feel for the user and make a great user experience!
Comment above almost every line of your code, both HTML and JavaScript!
Put a comment at the top of your HTML file with your name in it.
Take one or more screen prints of your application running.
PRO TIPS:
Put all input boxes and buttons inside of one form tag.
On the form, you should have all your input boxes, but only one submit button so the user will submit all the input boxes all at once. Your JavaScript should start validating them all at once when the user presses submit. 
Deliverable:
Submit GitHub repo address.
Submit a print screen of your application running.


############ Assignment 4.1: Event Driven Programming ############

JavaScript can make a webpage interactive in many ways. For this assignment, you are going to take the index.html page with meme image and make the image move around the screen using a Start button. The image should move until the Stop button is clicked.

Objectives
Write code to create 2 buttons on the index.html page
Code those buttons to trigger Events in JavaScript using functions
The Start button should call a function that moves the meme image around the index.html page
The Stop button should call a function that stops the meme image from moving around the index.html page
Apply Event Driven programming
User Acceptance Test the Events
Requirements
Write HTML code to create the Start button.
Write HTML code to create the Stop button.
Create a JavaScript function to enable/disable the Start button.
This function should call another function that moves the meme image around the page.
Create a JavaScript function to enable/disable the Stop button.
This function should call another function that stops moving the meme image.
Wire the Start button using the onClick to JavaScript Functions to disable the start button and Enable the opposite button clicked.
Wire the Stop button using the onClick to JavaScript Functions to disable the stop button and Enable the opposite button clicked.
Test the buttons.
Have at least 1 creative element – images, fonts, background color, etc. 
Create a nice look and feel for the user and make a great user experience!
Comment above almost every line of your code, both HTML and JavaScript!
Put a comment at the top of your HTML file with your name in it.
Take one or more screen prints of your application running.
Deliverables
Submit GitHub repo address.
Submit a print screen of your application running.

############ Assignment 4.2: Incorporate Audio ############

For this assignment, you will add sound to the webpage from week 3. You may use any school-appropriate sound file that is not covered by copyright. SoundBible.com is a resource that provides free sound files, or you may use the background noise from the US space station, included below.

us-lab-background.mp3Download us-lab-background.mp3
Play media comment.

Objectives

Implement sound in your program
Requirements

Implement sound in your week 3 html pages using HTML or JavaScript.
Have at least 3 NEW creative elements – images, fonts, background color, etc. 
Create unique a nice look and feel for the user and make a great user experience beyond what you see above!
Comment above almost every line of your code, both HTML and JavaScript!
Put a comment at the top of your HTML file with your name in it.
Take one or more screen prints of your application running.
Deliverable

Submit GitHub repo address.
Submit a print screen of your application running.


############ Assignment 5.1: Final Project: Website with Navigation and Tables ############

Objectives
Table creation
All pages should be able to navigate to and from each other using a simple menu.
Use CSS to make your web application look and feel professional.
Understand Inline vs Internal vs External CSS
Code HTML 5.0 tags
Requirements
Create a table on a web page with a minimum of 3 columns and 4 rows of data.  This table should hold useful information, not just a "sample table".
Create a menu - you should be able to navigate to and from all of your pages (meme/index, game, palindrome, user input/validation, objectives/boards page, table).  
Every page except the landing page must be able to navigate back to the landing page.
Code each of the following tags below in the index.html and boards.html pages:

Immediately before the end of your body section, place opening and closing <footer> tags
on the first line of the footer section, place: Your Name<br> (use your actual name in place of Your Name)
on the next line of the footer section, write University of Advancing Technology<br>
on the next line write the street address of UAT followed by a <br> (the street address can be found on the uat website
on the last line write the city, state and zip code of UAT followed by a <br> (the street address can be found on the uat website
On each of your .html pages, add navigation:

header
footer
nav
On the first line after the <body> tag, place the <header> tag around your h1 tags
On the next line, after the </header> tag, place a set of <nav> tags
Inside the <nav> tags, place:
Navigation inside <h2> tags
On the next line, <a href="./index.html">Home</a><br>
On the next line, <a href="./boards.html">Boards</a><br>
and so on - each page should have an anchor tag set up for it
Add anything else helpful or interesting to the webpages. 
Modify the opening comment in the index.html page with today's date
Deliverables
Submit GitHub repo address.  Make sure to include all image and sound files that are required to run your project.
Submit screenshots of your code running.
