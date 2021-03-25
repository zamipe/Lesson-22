// function someClickStuff() { someClickStuff jāieraksta arī html failā pie "onclick"
//     console.log(321);
//     console.log(window);
//     console.log(document);

// }

function changeColor() { //sakrīt ar to, ka html failā pie 'onclick' rakstīts
    const h2Element = document.getElementById('important-h2-element');
    if (h2Element.style.color === 'red') {
        h2Element.style.color = 'black';
    h2Element.style.fontSize = '24px';
    h2Element.innerText = 'Some h2 element';
    } else {
    h2Element.style.color = 'red'; // value is a string
    h2Element.style.fontSize = '36px';
    h2Element.innerText = 'Hello World!';
    }
}
    // console.log(h2Element); // parāda visu info par šo elementu
