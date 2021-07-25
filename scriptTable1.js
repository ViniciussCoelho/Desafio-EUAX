// Project Table
var selectedRow = null

// Passa os dados da variável para a tabela 
function onFormSubmit() {
    var formData = readFormData();
    insertNewRecord(formData);
}

// Le os dados do formulário e armazena na variável
function readFormData() {
    var formData = {}
    formData["projectName"] = document.getElementById("projectName").value;
    formData["initialDate"] = document.getElementById("initialDate").value;
    formData["finalDate"] = document.getElementById("finalDate").value;
    return formData;
}

// Insere uma nova linha na tabela
function insertNewRecord(data) {
    var table = document.getElementById("projectList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell0 = newRow.insertCell(0);
    cell0.innerHTML = getProjectId();
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.projectName;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.initialDate;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = data.finalDate;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = "--";
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = "--";
    resetForm();
}

// Reseta o formulário
function resetForm() {
    document.getElementById("projectName").value = "";
    document.getElementById("initialDate").value = "";
    document.getElementById("finalDate").value = "";
    selectedRow = null;
}
