
const button = document.querySelector('.but')
const deletebutton = document.querySelector('.del')
const li = document.querySelector('.todo-list')
const list = []
const inpt = document.getElementById('inp')
const warning = document.querySelector('.warn')

function displayWarning(text){
  warning.textContent = text
  setTimeout(()=>{ warning.textContent = ""},3000 ) 


}



window.addEventListener('DOMContentLoaded',()=>{
  
  

})

button.addEventListener('click', (e)=>{
  const inp = document.getElementById('inp').value
  
    e.preventDefault()
    if (inp){
      
      list.push(inp)
      const todos = list.map( (todo)=>{
        return `  <li>${todo}</li> `
      }).join('')
      li.innerHTML = todos
      inpt.value = ""
      
    }else{
      displayWarning('enter a text')
      
      
      
      
    }
    
    
  })
  deletebutton.addEventListener('click',()=>{
    const lis = document.querySelectorAll('li')
    lis.forEach( (item)=>{
      list.forEach( (elem)=>{
        list.pop(elem)
      })
      li.removeChild(item)

    })
    console.log('del')
    
    })
 