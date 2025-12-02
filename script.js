//  <div id="container">

//                       <p style="color: red">Hey I'm red!</p>

//                       <h3 style="color: blue">I'm a blue h3!</h3>

//                       <div>

//                         <h1>I'm in a div</h1>

//                         <p>ME TOO!</p>

//                       </div>

//                     </div>




const pizzaSauce = document.getElementById('pizzaSauce');
console.log(pizzaSauce);

const div = document.createElement('div');
div.classList.add('container');

const p = document.createElement('p');
p.style = "color: red";
p.innerText = "Hey I'm red!";

const h3 = document.createElement('h3');
h3.style = "color: blue";
h3.innerText = "I'm a blue h3!";

const insideDiv = document.createElement('div');

const h1 = document.createElement('h1');
h1.innerText = "I'm in a div";

const p2 = document.createElement('p');
p2.innerText = "ME TOO!";

console.log("new version redux");
pizzaSauce.appendChild(div);
div.appendChild(p);
div.appendChild(h3);
div.appendChild(insideDiv);
insideDiv.appendChild(h1);
insideDiv.appendChild(p2);
