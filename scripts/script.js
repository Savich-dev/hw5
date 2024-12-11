let tasks = []
let taskId = 1
const taskNameInput = document.getElementById('taskName')
const addBtn = document.getElementById('addBtn')
const container = document.getElementById('container')

const modal = document.getElementById('modal')
const modalId = document.getElementById('modalId')
const modalName = document.getElementById('modalName')
const saveBtn = document.getElementById('saveBtn')

const filterAccept = document.getElementById("filterAccept")
const filterFalse = document.getElementById("filterFalse")
const filterAll = document.getElementById("filterAll")


addBtn.addEventListener('click', () => {
  const newTask = {
    id: taskId++,
    name: taskNameInput.value,
    res: false,
  }
  taskNameInput.value = ''
  tasks.push(newTask)
  render()
  // console.log(tasks)
})

saveBtn.addEventListener('click', () => {
  const newId = modalId.value
  const newName = modalName.value
  tasks.map((task) => {
    if(task.id === Number(newId)){
      task.name = newName
    }return task
  })
  render()
  // console.log(tasks)
  modal.classList.add('hidden')
})

filterAccept.addEventListener('click', () =>{
  if (tasks.res=true){
    // taskDiv.classList.remove('hidden')
    taskDiv.classList.add('hidden')
    }
    else{
      taskDiv.classList.add('hidden')
    }
    render()
  }
)

filterFalse.addEventListener('click', () =>{
  if (tasks.res=false){
    // taskDiv.classList.remove('hidden')
    taskDiv.classList.add('falseTask')
    }
    else{ 
      taskDiv.classList.add('hidden')
    }
    render()
  } 
)

filterAll.addEventListener('click', () =>{
  taskDiv.classList.add('hidden')
  render()
})

const render = () => {
  container.innerHTML = ''
  tasks.map((task) => {
    const taskDiv = document.createElement("div")
    // taskDiv.classList.remove('hidden')
        if (task.res === true){
            taskDiv.classList.add('accTask')}
        else{
          taskDiv.classList.add('task-div')
        }
    taskDiv.innerText = task.name
    
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    deleteBtn.innerText = "Удалить"
    deleteBtn.onclick = () => {
      tasks = tasks.filter((item) => item.id !== task.id)
      render()
    }
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-Btn')
    editBtn.innerText = "Редактировать"
    editBtn.onclick = () => {
      modal.classList.remove('hidden')
      modalId.value = task.id
      modalName.value = task.name
      }

    const accBtn = document.createElement('button')
    accBtn.innerText = "Выполнено"
    accBtn.addEventListener('click', () => {
      task.res=!task.res;
      render()
    }
    )

    taskDiv.appendChild(deleteBtn)
    taskDiv.appendChild(editBtn)
    taskDiv.appendChild(accBtn)
    container.appendChild(taskDiv)
    }
  )
}
