// Código para a Tabela de Projetos

// Variável para selecionar uma linha
var selectedRow = null;

/* Aciona quando o formulário é enviado e chama a função readFormData, 
pegando as informações e passando para a função de inserção. Caso a linha 
selecionada já exista, vai acionar a função de editar */
function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    }
    else {
        updateRecord(formData);
        resetForm();
    }
}

// Lê as informações do formulário e salva numa variável
function readFormData() {
    var formData = {}
    formData["projectName"] = document.getElementById("projectName").value;
    formData["initialDate"] = document.getElementById("initialDate").value;
    formData["finalDate"] = document.getElementById("finalDate").value;
    return formData;
}

/* Coloca as informações recebidas numa linha da tabela dentro da tag tbody 
e também chama a função resetForm */
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
    cell5.innerHTML = "Não";
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)" id="edit">Editar</a>
                       <a onClick="onDelete(this)" id="delete">Deletar</a>`;
    resetForm();
}

// Limpa o formulário
function resetForm() {
    document.getElementById("projectName").value = "";
    document.getElementById("initialDate").value = "";
    document.getElementById("finalDate").value = "";
    selectedRow = null;
}

// Edita os valores da linha da tabela
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("projectName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("initialDate").value = selectedRow.cells[2].innerHTML;
    document.getElementById("finalDate").value = selectedRow.cells[3].innerHTML;
}

// Atualiza a linha da tabela
function updateRecord(formData) {
    selectedRow.cells[1].innerHTML = formData.projectName;
    selectedRow.cells[2].innerHTML = formData.initialDate;
    selectedRow.cells[3].innerHTML = formData.finalDate;
}

// Deleta uma linha da tabela
function onDelete(td) {
    if (confirm('Tem certeza que quer deletar esse projeto?')) {
        row = td.parentElement.parentElement;
        document.getElementById("projectList").deleteRow(row.rowIndex);
        resetForm();
    }
}