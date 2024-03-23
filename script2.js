submit.addEventListener('click',(e) => {
    e.preventDefault()
    let titleContent = title.value
    let descContent = desc.value
    localStorage.setItem('todo', JSON.stringify([titleContent, descContent]))
    todo.innerHTML = `<h1>${titleContent}</h1>
    <p>${descContent}</p>`;
    titleContent = ""
    descContent = "";
})

deleteBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    localStorage.removeItem('todo')
    todo.innerHTML=""
});