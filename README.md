### code challenge Shopping List Webpage (README.md)
This project creates a simple shopping list webpage with the following functionalities:

Users can add items to the list.
Users can mark items as purchased.
Users can clear the entire list.
 ### Requirements:

### HTML, CSS, and JavaScript are used for development.
The shopping list items are stored in a JavaScript array (not persisted beyond page refresh).
Running the Code:

### Set up the project structure:
Create three folders: html, css, and js.
Place your code:
Copy the provided HTML code into a file named index.html in the html folder.
Copy the provided JavaScript code into a file named DOM.js in the js folder.
Create a CSS file named style.css in the css folder (initially empty, you'll define styles for purchased items here).
Open the HTML file:
Open index.html in a web browser to run the application.
## Explanation:

The index.html file defines the basic structure of the webpage, including the form for adding items, the list container, and buttons.
## The DOM.js file handles the JavaScript logic:
It creates an empty array to store shopping list items.
It listens for form submission and adds the entered item to the list.
It creates buttons ("purchased" and "clear") for each list item.
Clicking "purchased" marks the item with a visual indicator (defined in style.css).
Clicking "clear" removes all items from the list.
## Customize Styles (Optional):
In style.css, define styles for the "purchased" class (e.g., strikethrough text, color change).
## Further Enhancements 

Implement local storage to persist the shopping list even after page refresh.
Add features like item deletion, item editing, or priority levels.