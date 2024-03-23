submit.addEventListener('click',(e) => {
    e.preventDefault()
    let titleContent = title.value
    let descContent = desc.value
    localStorage.setItem('todo', JSON.stringify([titleContent,descContent]))
})

deleteBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    localStorage.removeItem('todo')
});