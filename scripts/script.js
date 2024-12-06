let tasks = []
let taskId = 1
const taskNameInput = document.getElementById('taskName')
const addBt = document.getElementById('addBt')
const container = document.getElementById('container')

addBt.addEventListener('click', () => {
  const newTask = {
    id: taskId++,
    name: taskNameInput.value
  }
  taskNameInput.value = ''
  tasks.push(newTask)
  // render()
  console.log(tasks)
})

const render = () => {
  container.innerHTML = ''
  tasks.map((task) => {
    const taskDiv = document.createElement("div")
    taskDiv.innerText = task.name
    container.appendChild(taskDiv)
  })
}