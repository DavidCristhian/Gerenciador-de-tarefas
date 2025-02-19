let taskItems = [];

function addTask() {
    let message = document.getElementById("message");
    const successMessage = "Tarefa adicionada!";
    const errorMessage = "Campo vazio! Digite uma tarefa para adicioná-la!";

    const inputElement = document.getElementById("inputTask"); // Captura o elemento HTML
    let inputTask = inputElement.value.trim(); // Captura o valor do input atualizado

    if (inputTask !== "") { // Verifica se o campo está vazio
        message.classList.remove("errorMessage"); 
        message.classList.add("successMessage");
        message.textContent = successMessage; // Mensagem de sucesso

        if (retryCheck(inputTask)) { // Verifica se a tarefa já existe
            alert("Item já incluso na lista");
        } else {
            taskItems.push(inputTask);
            console.log(taskItems);
            displayTask();
        }
    } else {
        message.classList.remove("successMessage");
        message.classList.add("errorMessage");
        message.textContent = errorMessage; // Mensagem de erro
    }

    inputElement.value = ""; // Reseta o input
}

function displayTask() {
    const listTasks = document.getElementById("listTask"); // Captura o elemento HTML UL
    listTasks.innerHTML = ""; // Reseta a lista

    for (let i = 0; i < taskItems.length; i++) {
        let newTask = document.createElement("li"); // Criação de um novo elemento li
        newTask.textContent = taskItems[i];
        listTasks.appendChild(newTask); // Adiciona o elemento à lista
    }
}

function retryCheck(task) {
    return taskItems.includes(task); // Verifica se a tarefa já existe no array
}
