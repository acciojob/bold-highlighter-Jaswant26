function highlight() {
    //Write your code here
const boldElements = document.querySelectorAll('strong');

    for (const element of boldElements) {
        element.style.color = 'green';
    }

}


function return_normal() {
    //Write your code here
const boldElements = document.querySelectorAll('strong');

    for (const element of boldElements) {
        element.style.color = 'black';
    }
    
}
