
# How to use this file
This may be your first introduction to Markdown! Like HTML, Markdown is a structural language that facilitates formatting. You'll wanna have some basics in your back pocket for when you write README files in the future (Something like `README.md` is a markdown file because it ends with the `.md` extension).

If you look at the raw Markdown text of this file, you'll notice that hashes `#` are like header elements in HTML: a single hash is like an `<h1>`, and more hashes represents subsequent header sizes. You can also write checkboxes using square brackets, and lists (ordered and unordered) using numbers and hyphens, respectively.

As you complete the sections of the assignment, I encourage you to check off your progress in this file!

# Assignment Instructions
## Adding Validation
Ignore the book's instructions for this section. Instead, try to accomplish these goals within `script.js`:
- [x] TODO #1: using DOM methods, create a reference to the entire form object and store it in a variable. Add a submission event listener with an `event` parameter in the anonymous function.
- [x] TODO #2: create references to the values of the form fields and store them in variables inside of your submission event.
- [x] TODO #3: add some validation for the form fields to alert the user if any of the fields are empty. If they are empty, use `event.preventDefault()` to prevent form submission.

## Updating Shuttle Requirements
Feel free to follow the book's instructions here.

## Fetching Planetary Data
Like the Adding Validation section, the book won't be helpful here. Try these instead:
- [x] TODO #4: Pass the [JSON Data set](https://handlers.education.launchcode.org/static/planets.json) as an argument into the fetch function. This will make an HTTP GET request to use the data locally. You can refer to the data set using `response`, which is defined in the anonymous function within `.then()`.
- [x] TODO #5: Convert `response` into the JSON format using `.json()` and store it in a variable.
- [x] TODO #6: Using your new variable, create another promise using the `.then()` function. Inside of that `.then()` function, create another anonymous function with a parameter for your JSON data.
- [x] TODO #7: Inside of your anonymous function, use a DOM method to create a reference to the relevant HTML element.
- [x] TODO #8: Replace the innerHTML of the element with a template literal. This template literal should contain the commented HTML text in `script.js`, with each `${}` containing the relevant reference to your JSON data set.
- [x] BONUS: if you'd like, you can create a variable that stores a randomly generated number from `Math.random()` and use that variable as the index within your JSON array.
