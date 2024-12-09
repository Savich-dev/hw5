let tasks = []
let taskId = 1
const taskNameInput = document.getElementById('taskName')
const addBtn = document.getElementById('addBtn')
const container = document.getElementById('container')

const modal = document.getElementById('modal')
const modalId = document.getElementById('modalId')
const modalName = document.getElementById('modalName')
const saveBtn = document.getElementById('saveBtn')

addBtn.addEventListener('click', () => {
  const newTask = {
    id: taskId++,
    name: taskNameInput.value,
    value: undefined,
  }
  taskNameInput.value = ''
  tasks.push(newTask)
  render()
  console.log(tasks)
})

saveBtn.addEventListener('click', () => {
  const newId = modalId.value
  const newName = modalName.value
  tasks.map((task) => {
    if(task.id === Number(newId)){
      task.name = newName
    }
  })
  render()
  console.log(tasks)
  modal.classList.add('hidden')
})

const render = () => {
  container.innerHTML = ''
  tasks.map((task) => {
    const taskDiv = document.createElement("div")
    taskDiv.classList.add('task-div')
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
      tasks = tasks.filter((item) => item.id !== task.id)
      render()
    }
    taskDiv.appendChild(deleteBtn)
    taskDiv.appendChild(editBtn)
    container.appendChild(taskDiv)
    }
  )
}
