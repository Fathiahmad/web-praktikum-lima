const tangkepul = document.querySelector("ul")
const tangkepinput = document.querySelector("input")
const tangkepbutton = document.querySelector("button")
const libaru = document.createElement("li")

tangkepbutton.addEventListener('click', function(){
    const libaru = document.createElement("li");
    const isiinput = document.createTextNode(tangkepinput.value);
    libaru.appendChild(isiinput);
    tangkepul.appendChild(libaru);
    tangkepinput.value = '';
});