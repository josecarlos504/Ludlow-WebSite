filterSelection("all");

//naming filterSection (c) with parameter "c"
function filterSelection(c) {
    var x, i; //declare variables
    x = document.getElementsByClassName("filterDiv"); //inside the function first gather all elements by their parent container(filterDiv)
    //getElementsByClassName("filterDiv") returns an array. a list of element, my only have also single element
    if (c == "all") c = ""; //store that group as variable for later reference
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) { //used to target each element
        removProduct(x[i], "show"); //remove products
        if (x[i].className.indexOf(c) > -1) addProduct(x[i], "show"); //add product
    }
}

// Show filtered elements
function addProduct(element, name) { //function with two parameters (element, name)
    var i, arr1, arr2; // declare variables
    arr1 = element.className.split(" "); //array 1, saves an array lisiting all the product classes
    arr2 = name.split(" "); //array 2, saves an array of number of elements with "show"
    for (i = 0; i < arr2.length; i++) { //i is 
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function removProduct(element, name) {
    var i, arr1, arr2; //declare var
    arr1 = element.className.split(" "); //
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementsById("testing"); //return elements with that id
var btns = btnContainer.getElementsByClassName("btn"); //return element with that class
console.log("running", btns);
//for loop
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() { //attache an event handler to the element btn array
        var current = document.getElementsByClassName("active"); //return elemnt by class name and make them active
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active"; //set method 
    });
}
