# Module 6 Labs

## Lab1
1) Create a Greeting component, in its own file, which renders the text “Hello World”.
2) Import it into App.jsx, and pass in a prop called ‘name’ when rendering the Greeting component
3) If the name prop exists, make sure the Greeting component replaces ‘World’ with that name value, i.e. “Hello John”.
4) Include support for a greeting message via children.
## Lab2
1) Create a BigCats component, in its own file, which uses the cats array (below) to display a styled list of cats.
2) Include a unique id and fix the warning about keys
3) Create a SingleCat component for rendering each individual cat, and add an image property for each one.
## Lab3
1) Create an Emoji component, in its own file, which initially renders a happy emoji.
2) Add a ‘Change Mood’ button in the component to switch between 2 emojis when clicked.
## Lab4
1) Extend your BigCats component from Exercise 2 to include buttons for alphabetically sorting and reversing the list
2) Add another button to filter the list and display only the cats in the ‘Panthera’ family, and one to reset and show the full list.
## Lab5
1) Create a new AddCatForm component that renders a form with controlled components to capture name, latin Name and image details for a new Big Cat (extending Exercises 2 and 4)
2) Submitting the form should update the parent BigCats component and re-render the list
3) Add a Delete link next to each cat allowing it to be removed from the list.
## Lab6
1) Design and create a basic Calculator component which takes 2 numbers and the operator provided by the user and displays the result.
