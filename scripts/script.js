document.addEventListener('DOMContentLoaded',()=>{
  loadNames();
});

function loadNames(){
  const names = JSON.parse(localStorage.getItem('names')) || [];
  const nameList = document.getElementById('nameList');

  names.forEach(name => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${name}</span>
      <button onclick="editName(this)">Редактировать</button>
      <button onclick="deleteName(this)">Удалить</button>
      <input type="checkbox" id="box" name="box">Выполнено
      `;
    nameList.appendChild(li);
  });
  filterNames();
  // filterAcc()
}

function addName(){
  const nameInput = document.getElementById('nameInput');
  const nameText = nameInput.value.trim();

  if(nameText === "") {
    alert("Название задачи не может быть пустым")
  } else {
  const nameList = document.getElementById('nameList');
  const li = document.createElement('li');
  li.innerHTML = `
      <span>${nameText}</span>
      <button onclick="editName(this)">Редактировать</button>
      <button onclick="deleteName(this)">Удалить</button>
      <input type="checkbox" id="box" name="box">Выполнено
      `;
    nameList.appendChild(li);
    saveNames();
    nameInput.value="";
    filterNames();}
    // filterAcc()
}

function saveNames(){
  const nameList = document.getElementById('nameList');
  const names = Array.from(nameList.children).map(li=>li.querySelector('span').textContent);
  localStorage.setItem('names', JSON.stringify(names));
}

function deleteName(button){
  const li = button.parentElement;
  li.remove();
  saveNames();
  filterNames();
  // filterAcc()
}

function editName(button){
  const li = button.parentElement;
  const nameText = li.querySelector('span').textContent;
  const newNameText = prompt("Редактировать задачу", nameText);

  if(newNameText !== null && newNmaeText.trim() !==""){
    li.querySelector('span').textContent = newNameText.trim();
    saveNames();
    filterNames();
    // filterAcc()
    }
}

function filterNames(){
  const filterInput = document.getElementById('filterInput');
  const filterText = filterInput.value.toLowerCase();
  const nameList = document.getElementById('nameList');

  Array.from(nameList.children).forEach(li=>{
    const nameText = li.querySelector('span').textContent.toLowerCase();
    if (nameText.includes(filterText)){
      li.style.display = "";
    }
    else {
      li.style.display = 'none';
    }
  })
}

function filterAcc(){
  const filterAccept = document.getElementById('filterAccept');
  const filterVal = filterAccept.value.true();
  const nameList = document.getElementById('nameList');
  
    Array.from(nameList.children).forEach(li=>{
      const filterVal = li.querySelector('box');
      if (filterVal=true){
        li.style.display = "";
      }
      else {
        li.style.display = 'none';
      }
    })
}
