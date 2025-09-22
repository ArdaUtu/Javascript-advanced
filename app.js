const firstName = document.getElementById('inputName');
const showName = document.getElementById('getName');
console.log(showName)

function saveName(){
localStorage.setItem('firstname', firstName.value);

}
function getName(){
    showName.innerText = localStorage.getItem('firstname');
}