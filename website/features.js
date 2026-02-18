const themeButton = document.getElementById("themeButton");

const queueInput = document.getElementById("queueInput");
const enqueueBtn = document.getElementById("enqueueBtn");
const dequeueBtn = document.getElementById("dequeueBtn");
const queueView = document.getElementById("queueView");
const queueStatus = document.getElementById("queueStatus");

const stackInput = document.getElementById("stackInput");
const pushBtn = document.getElementById("pushBtn");
const popBtn = document.getElementById("popBtn");
const stackView = document.getElementById("stackView");
const stackStatus = document.getElementById("stackStatus");

const queue = [];
const stack = [];

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const createItem = (value) => {
  const item = document.createElement("span");
  item.className = "slot-item";
  item.textContent = value;
  return item;
};

const drawQueue = () => {
  queueView.innerHTML = "";

  if (queue.length === 0) {
    queueStatus.textContent = "Fila vazia.";
    return;
  }

  queue.forEach((value, index) => {
    const visualValue = index === 0 ? `${value} (frente)` : value;
    queueView.appendChild(createItem(visualValue));
  });

  queueStatus.textContent = `Tamanho da fila: ${queue.length}`;
};

const drawStack = () => {
  stackView.innerHTML = "";

  if (stack.length === 0) {
    stackStatus.textContent = "Pilha vazia.";
    return;
  }

  for (let i = stack.length - 1; i >= 0; i -= 1) {
    const visualValue = i === stack.length - 1 ? `${stack[i]} (topo)` : stack[i];
    stackView.appendChild(createItem(visualValue));
  }

  stackStatus.textContent = `Tamanho da pilha: ${stack.length}`;
};

const readValue = (inputElement) => inputElement.value.trim();

enqueueBtn.addEventListener("click", () => {
  const value = readValue(queueInput);
  if (!value) {
    queueStatus.textContent = "Informe um valor para inserir na fila.";
    return;
  }

  queue.push(value);
  queueInput.value = "";
  drawQueue();
});

dequeueBtn.addEventListener("click", () => {
  if (queue.length === 0) {
    queueStatus.textContent = "Nao e possivel remover: a fila ja esta vazia.";
    return;
  }

  const removed = queue.shift();
  drawQueue();
  queueStatus.textContent = `Saiu da fila: ${removed}. Tamanho atual: ${queue.length}`;
});

pushBtn.addEventListener("click", () => {
  const value = readValue(stackInput);
  if (!value) {
    stackStatus.textContent = "Informe um valor para inserir na pilha.";
    return;
  }

  stack.push(value);
  stackInput.value = "";
  drawStack();
});

popBtn.addEventListener("click", () => {
  if (stack.length === 0) {
    stackStatus.textContent = "Nao e possivel remover: a pilha ja esta vazia.";
    return;
  }

  const removed = stack.pop();
  drawStack();
  stackStatus.textContent = `Saiu da pilha: ${removed}. Tamanho atual: ${stack.length}`;
});

queueInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") enqueueBtn.click();
});

stackInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") pushBtn.click();
});

drawQueue();
drawStack();
