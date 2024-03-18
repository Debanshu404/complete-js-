// *****************************HOW JS WORK (BEHIND THE SCENES)*********************************************************************************
// When JavaScript (JS) is executing code, it follows a specific sequence of steps, often referred to as the "execution context." Here's a simplified explanation of how JS works behind the scenes while executing something:

// Parsing and Lexical Analysis:

// When the browser encounters a script tag or an external JavaScript file in the HTML, it starts parsing the JavaScript code.
// During parsing, the code is broken down into tokens, and the relationships between the tokens are identified.
// Creation of the Execution Context:

// Before executing any code, JS creates a global execution context, which represents the global scope.
// For each function call, a new execution context is created and added to the execution stack (call stack). This forms a stack of execution contexts.
// Variable Declarations (Hoisting):

// JS scans the code for variable declarations (using var, let, or const) and function declarations.
// Declarations are hoisted, meaning they are moved to the top of their respective scopes, but variables are initialized with undefined.
// Execution of Code:

// The actual execution of code begins line by line.
// Expressions and assignments are evaluated, and values are stored in memory.
// Functions are called and added to the call stack, creating new execution contexts for each function call.
// Function Scope:

// Each function has its own local scope, which can access variables from its parent scopes (lexical scope).
// When a variable is accessed, JS looks up the scope chain, starting from the current function's scope and moving up to the global scope.
// Asynchronous Operations:

// JS can perform asynchronous operations like fetching data, timers, or responding to events.
// When an asynchronous operation is encountered, it's moved to the event queue for later execution.
// Event Loop:

// While executing code, JS constantly checks if the execution stack is empty.
// If the stack is empty, the event loop retrieves and executes tasks from the event queue.
// This allows JS to handle non-blocking, asynchronous tasks and maintain responsiveness.
// Callbacks and Promises:

// Callback functions are often used to handle the completion of asynchronous tasks.
// Promises provide a more structured way to work with asynchronous code, allowing you to chain .then() methods.
// Garbage Collection:

// JS has a built-in garbage collector that identifies and removes objects and variables that are no longer in use.
// This helps manage memory and prevent memory leaks.
// DOM Manipulation:

// JS can access and manipulate the Document Object Model (DOM) to modify the content and structure of a web page.
// Changes to the DOM can trigger reflows and repaints to update the visible page.
// Error Handling:

// If an error occurs during execution and is not caught by a try-catch block, it can result in an exception that may terminate script execution.
// Termination:

// Once all code has been executed, or if an unhandled error occurs, the execution stack is cleared, and the script terminates.
// In summary, JavaScript works behind the scenes by creating execution contexts, executing code line by line, handling asynchronous operations through callbacks and promises, and interacting with the DOM. It manages variable scopes, memory, and error handling to provide the interactivity and functionality we see in web applications. The event loop ensures that the browser remains responsive even during time-consuming tasks.