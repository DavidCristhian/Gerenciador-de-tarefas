function addTask(){

    let message = document.getElementById("message");
    let successMessage = "Tarefa adicionada!";
    let errorMessage = "Campo vazio!, digite uma tarefa para adicioná-la!";
    let inputElement = document.getElementById("inputTask"); // Captura o elemento HTML
    let inputTask = inputElement.value.trim(); // Captura o valor do input

    // console.log(inputTask);

    let listTasks = document.getElementById("listTask"); // Captura o elemento HTML
    let newTask = document.createElement("li"); // Criação de um novo elemento li

    // Verifica se o campo está vazio
    if(inputTask != ""){
        newTask.textContent = inputTask;

        listTasks.appendChild(newTask); // Criação de um elemento filho
        
        message.classList.remove("errorMessage");
        message.classList.add("successMesage");
        message.textContent = successMessage; // Mensagem de sucesso
    } else{
        // alert("O campo está vazio!");

        message.classList.remove("successMesage");
        message.classList.add("errorMessage");
        message.textContent = errorMessage; // Mensagem de erro
    }

    // Reseta o input usando a referência do elemento HTML
    inputElement.value = "";
}