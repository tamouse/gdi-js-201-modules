/**
 *
 * The Counter "class", though not a true class in the object-oriented
 * sense, serves the same function (SWIDT). When you call the function
 * and pass in the DOM element that holds the counter, it creates a new
 * closure with a separate counter value, display area, and methods.
 *
 * @param element
 * @returns {{add: add, subtract: subtract, reset: reset}}
 * @constructor
 */

const Counter = function (element) {

    ///////////////////////////////////////////
    // LOCAL VARIABLES
    ///////////////////////////////////////////

    // `value` is going to hold the value of the counter.
    // It won't be accessible to anything outside of this
    // closure, preventing anything else from causing
    // side effects.
    //
    // Even if another function causes the display area
    // to change, this internal local variable will not change.
    //
    var value = 0;

    // `displayArea` holds the element where we'll drop
    // the value after it's been changed.
    var displayArea = element.querySelector('.result');

    ///////////////////////////////////////////
    // EXPORTED FUNCTIONS (i.e. METHODS)
    ///////////////////////////////////////////

    function add () {
        value++;
        display();
    }

    function subtract () {
        value--;
        display();
    }

    function reset () {
        value = 0;
        display();
    }

    ///////////////////////////////////////////
    // INTERNAL FUNCTIONS
    ///////////////////////////////////////////

    function display () {
        displayArea.innerHTML = value;
        displayArea.classList.add('changing');
        setTimeout(function () {
            displayArea.classList.remove('changing')
        }, 1000);
    }

    ///////////////////////////////////////////
    // INITIALIZATIONS
    ///////////////////////////////////////////

    // Attach event listeners to the buttons inside
    // the element.
    element.querySelector('.adder')
        .addEventListener('click', add);
    element.querySelector('.subtractor')
        .addEventListener('click', subtract);
    element.querySelector('.reset')
        .addEventListener('click', reset);

    // Initialize the display
    display();

    // Return the closure, exposing only the
    // external methods as the interface.
    return {
        add: add,
        subtract: subtract,
        reset: reset
    }
};
