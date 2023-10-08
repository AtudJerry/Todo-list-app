
const button = document.querySelector('button')
const li = document.querySelector('.todo-list')
const list = []
const inpt = document.getElementById('inp')

window.addEventListener('DOMContentLoaded',()=>{
  
  

})

button.addEventListener('click', (e)=>{
    e.preventDefault()
    const inp = document.getElementById('inp').value
    list.push(inp)
    const todos = list.map( (todo)=>{
      return `  <li>${todo}</li> `
    }).join('')
    li.innerHTML = todos
    inpt.value = ""
})