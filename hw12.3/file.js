const input = document.querySelector('.input')
const buttonAdd = document.querySelector('.addBtn')
const ul = document.querySelector('.tasks')

buttonAdd.addEventListener('click', function (){
    if(input.value){
    const createLi = document.createElement('li')
    createLi.textContent = input.value
    ul.appendChild(createLi)
    const createBtnDelete = document.createElement('button')
    createBtnDelete.textContent = "Delete"
    createLi.appendChild(createBtnDelete)
    input.value = ''
    }
})

ul.addEventListener('click', function(event){
    const current = event.target
    if(current.innerText === 'Delete'){
    current.parentElement.remove()
    }
})