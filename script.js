const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const ol = document.getElementById('lista-tarefas');
// const newTasks = ['Formar-se na Trybe', 'Trabalhar na área', 'Ser feliz'];
let liSelected = null;
const btnClear = document.getElementById('apaga-tudo');
const btnRemove = document.getElementById('remover-finalizados');
const btnSalvar = document.getElementById('salvar-tarefas');
const btnCima = document.getElementById('mover-cima');
const btnBaixo = document.getElementById('mover-baixo');
const btnRemoveSelected = document.getElementById('remover-selecionado');

const createItem = () => {
  const li = document.createElement('li');
  li.innerText = input.value;
  ol.appendChild(li);
  input.value = '';

  li.addEventListener('click', () => {
    if (liSelected !== null) {
      liSelected.style.backgroundColor = '';
    }
    liSelected = li;
    li.style.backgroundColor = 'gray';
  });

  li.addEventListener('dblclick', () => {
    li.classList.toggle('completed');
  });
};

const clear = () => {
  ol.innerText = '';
};

const removeRisk = () => {
  const itemsCompleted = document.querySelectorAll('.completed');
  itemsCompleted.forEach((item) => {
    item.remove();
  });
};

const save = () => {
  localStorage.setItem('listaTarefas', ol.innerHTML);
};

const moveUp = () => {
  if (liSelected && liSelected.previousElementSibling) {
    ol.insertBefore(liSelected, liSelected.previousElementSibling);
  }
};

const moveDown = () => {
  if (liSelected && liSelected.nextElementSibling) {
    ol.insertBefore(liSelected.nextElementSibling, liSelected);
  }
};

const removeSelected = () => {
  if (liSelected) {
    liSelected.remove();
    liSelected = null;
  }
};

if (localStorage.getItem('listaTarefas')) {
  ol.innerHTML = localStorage.getItem('listaTarefas');
}

window.onload = () => {
  btnSalvar.addEventListener('click', save);
  button.addEventListener('click', createItem);
  btnClear.addEventListener('click', clear);
  btnRemove.addEventListener('click', removeRisk);
  btnCima.addEventListener('click', moveUp);
  btnBaixo.addEventListener('click', moveDown);
  btnRemoveSelected.addEventListener('click', removeSelected);
};
