const card=document.getElementById('new-card');
clone=card.cloneNode(true);
clone.querySelector('h5').innerHTML="Project 7";
const newButton=document.getElementById('new');
newButton.addEventListener('click',()=>{
    document.getElementsByClassName('cards')[0].appendChild(clone);
});




