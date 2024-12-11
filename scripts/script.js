let tasksList = []
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
  tasksList.push(newTask)
  render()
})

saveBtn.addEventListener('click', () => {
  const newId = modalId.value
  const newName = modalName.value
  tasksList.map((task) => {
    if(task.id === Number(newId)){
      task.name = newName
    }return task
  })
  render()
  modal.classList.add('hidden')
})

const render = () => {
  container.innerHTML = ''
  tasksList.map((task) => {

    // if (filterT=0){
    //   tasksList = tasksList
    // }
    // else if (filterT=1){
    //   tasksList = tasksList.filter((item) => task.res === true)
    // } else if (filterT=2){
    //   tasksList = tasksList.filter((item) => task.res === false)
    // }

    filterAccept.onclick = () => {
        if(task.res === false){
          taskDiv.classList.add('hidden')
        }
      }
    filterFalse.onclick = () => {
      if (task.res === true){
        taskDiv.classList.add('hidden')
      }
    }
    filterAll.onclick = () =>{
      taskDiv.classList.remove('hidden')
    }

    const taskDiv = document.createElement("div")
    
    taskDiv.innerText = task.name
    taskDiv.classList.add("task-div")
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    deleteBtn.innerText = "Удалить"
    deleteBtn.onclick = () => {
      tasksList = tasksList.filter((item) => item.id !== task.id)
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
