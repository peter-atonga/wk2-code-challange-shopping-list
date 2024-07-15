let shoppingList=[]; //JS array to store list items

document.addEventListener("DOMContentLoaded",()=>{
    let form=document.querySelector('form').addEventListener
    ('submit',(e)=>{
        e.preventDefault();//prevents default behavior of form

        buildToDo(e.target.input.value) //call function that will enable event handling
        e.target.reset(); //resets the form after hitting the submit button

})
})
function buildToDo(todo){

    //create elements
    let p=document.createElement('p');

    let btn=document.createElement('button');
    let butn=document.createElement('button');
    let div=document.querySelector('div');
    //give content to the HTML elements created
    btn.textContent="purchased";
    butn.textContent="clear";
    p.textContent=`${todo}   `;
    shoppingList.push(todo);//pushing input values to the array
    //append the elements to where you need them
    div.appendChild(p);
    p.appendChild(btn);
    p.appendChild(butn);
    btn.addEventListener("click",markPurchased)//call back function to handle the event where item has been purchased
    butn.addEventListener('click',handleDelete)//callback function for deleting item from list
    console.log(shoppingList) //printing array with shopping list items
    }



function handleDelete(e){
    e.target.parentNode.remove();//deletes parent node including all its children nodes

}
function markPurchased(e){
   let item= e.target.parentNode;
   item.classList.toggle("purchased");//change the class name of the button parent node so that it can obtain the css properties
//properties of class purchased have been defined in style.css 
}
