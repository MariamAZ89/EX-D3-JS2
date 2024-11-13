const form = document.querySelector('form');
const input = document.getElementById('new-task');
const button = document.querySelector('button');
const ul = document.querySelector('ul');

const getTask = function(e){
    e.preventDefault()
    let task = input.value 
    aggiungiTask(task);

}
const aggiungiTask = function(task){
    const li = document.createElement('li');
    li.innerText = task
    ul.appendChild(li)
    taskComplate(li, task)
}
 const taskComplate = function(li, task){
    li.addEventListener('click', () => {
        li.style.textDecoration = "line-through";
        console.log( task,li)
    })
 }

form.addEventListener('submit', (e)=>{
    getTask(e)

});


