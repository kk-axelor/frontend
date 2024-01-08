
const addMore = ()=>{

    
    // take the parent element  ie ol
const ol = document.querySelector("ol.orderlist")


// find the value and img
const movieName = document.querySelector("input[name='name']").value
console.log(movieName);


const imgLink = document.querySelector("input[name='img']").value
console.log(imgLink);


// apply the style
const li = document.createElement('li');


const img = document.createElement('img');
img.src = imgLink
img.style.width = "30px"
img.style.height = "30px"
img.style.borderRadius="4px"



const span = document.createElement("span");
span.innerText=movieName;

li.appendChild(img);
li.appendChild(span);

console.log(ol)

console.log(li)

    // append it to parent

    ol.appendChild(li);

}