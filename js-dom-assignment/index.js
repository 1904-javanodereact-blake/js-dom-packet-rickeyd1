// Use the provided index.html
// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.

function getUSA(){
    const spans = document.getElementsByTagName('span');
    for (let i = 0; i < spans.length; i++){
        if (spans[i].innerText === 'USA'){
            console.log(spans[i].innerText);
        }
    }
}

// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.

function getPeopleInSales() {
    const employees = document.getElementsByClassName('empName');
    for (let b = 0; b < employees.length; b++) {
        if ( employees[b].nextElementSibling.innerText === 'Sales') {
            console.log(employees[b].innerText);
        }
    }
}

// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>

function getAnchorChildren() {
    const anchor = document.getElementsByTagName('a');
    for ( let a = 0; a < anchor.length; a++) {
        if ( anchor[a].children.length !== 0){              // Anchor tag has a child tag
            for (let child = 0; child < anchor[a].childElementCount; child++){
                if ( anchor[a].children[child].localName === 'span'){
                    console.log(anchor[a].children[child].innerText);
                }
            }
        }
    }
}

// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.

function getHobbies() {
    const hobbies = document.getElementsByName('skills');
    for (let h = 0; h < hobbies[0].childElementCount; h++){
        if (hobbies[0].children[h].selected) {
            return hobbies[0].children[h].innerText;
        }
    }
}

// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute. 

function getCustomAttribute() {
    const custAttr = document.querySelectorAll('[data-customAttr]');
    for (let i = 0; i < custAttr.length; i++){
        console.log(`Element ${custAttr[i].localName}'s data-customAttr = ${custAttr[i].getAttribute('data-customAttr')}`);
    }
}

// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>  
// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element
function sum(event) {
    let input2 = +document.getElementById('num1').value;
    let input1 = +document.getElementById('num2').value;
    let sum = input1 + input2;
    const sumDisplay = document.getElementById('sum');

    if (isNaN(sum)) {
        sumDisplay.innerText = 'Cannot add';
    } else {
        sumDisplay.innerText = sum;
    }
}

document.getElementById('num1').addEventListener('input', sum);

document.getElementById('num2').addEventListener('input', sum);

// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.
function printSkill(){
    alert("Are you sure " + getHobbies() + " is one of your skills?");
}

document.getElementsByName('skills')[0].addEventListener('change', printSkill);


// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
let previous;

function alertColor(newColor) {
    if (previous === undefined){
        alert(`So your favorite color is ${newColor}`);
        previous = newColor;
    } else {
        alert(`So you like ${newColor} more than ${previous}`);
        previous = newColor;
    }
}

const colors = document.getElementsByName('favoriteColor');
for (let i = 0; i < colors.length; i++){
    colors[i].addEventListener('change', () => {
        alertColor(colors[i].value);
    })
}

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.
const names = document.getElementsByClassName('empName');

function changeVisibility(element) {
    if (element.style.opacity === '1') {
        element.style.opacity = '0';
    } else {
        element.style.opacity = '1';
    } 
}

for (let n = 0; n < names.length; n++) {
    names[n].style.visibility = 'visible';
    names[n].addEventListener('mouseenter', (event) => {
        changeVisibility(names[n])
    });
}

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.
const time = document.getElementById('currentTime');

function displayTime(element){
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    if (hours > 12) {
        hours = hours % 12;
        if(hours === 0)
            hours = 12;
        if (seconds < 10) {
            time.innerText = `${hours}:${minutes}:0${seconds} PM`;
        } else {
            time.innerText = `${hours}:${minutes}:${seconds} PM`;
        }
        if (minutes < 10) {
            time.innerText = `${hours}:0${minutes}:${seconds} PM`;
        } else {
            time.innerText = `${hours}:${minutes}:${seconds} PM`;
        }
    } else {
        if (hours === 0)
            hours = 12;
        if (seconds < 10) {
            time.innerText = `${hours}:${minutes}:0${seconds} AM`;
        } else {
            time.innerText = `${hours}:${minutes}:${seconds} AM`;
        }
        if (minutes < 10) {
            time.innerText = `${hours}:0${minutes}:${seconds} AM`;
        } else {
            time.innerText = `${hours}:${minutes}:${seconds} AM`;
        }
    }
}

setInterval(displayTime, 1000);

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.
const hello = document.getElementById('helloWorld');

function changeColor() {
    hello.style.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
}

hello.addEventListener('click', () => {
    setTimeout(changeColor, 3000);
})

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).

function myFunc(node){
    console.log(node.localName);
}

function functionOne(x) { alert(x); }

function functionTwo(var1 ,callback) {
    callback(var1);
}

function walkTheDOM(node, func){
    func(node);
    for (let i = 0; i < node.childElementCount; i++) {
        walkTheDOM(node.children[i], func);
    }
}