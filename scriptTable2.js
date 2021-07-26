// Código para a Tabela de Atividades

// Variável para selecionar uma linha
var selectedRow = null;

/* Aciona quando o formulário é enviado e chama a função actReadFormData, 
pegando as informações e passando para a função de inserção. Caso a linha 
selecionada já exista, vai acionar a função de editar */
function actOnFormSubmit() {
  var actFormData = actReadFormData();
  if (selectedRow == null) {
    actInsertNewRecord(actFormData);
  }
  else {
    actUpdateRecord(actFormData);
    actResetForm();
  }
}

// Lê as informações do formulário e salva numa variável
function actReadFormData() {
  var actFormData = {};
  actFormData["projectId"] = document.getElementById("projectId").value;
  actFormData["actName"] = document.getElementById("actName").value;
  actFormData["actInitialDate"] = document.getElementById("actInitialDate").value;
  actFormData["actFinalDate"] = document.getElementById("actFinalDate").value;
  actFormData["ended"] = document.getElementById("ended").value;
  return actFormData;
}



/* Coloca as informações recebidas numa linha da tabela dentro da tag tbody 
e também chama a função actResetForm */
function actInsertNewRecord(actData) {
  var actTable = document.getElementById("actList").getElementsByTagName('tbody')[0];
  var actNewRow = actTable.insertRow(actTable.length);

  cell0 = actNewRow.insertCell(0);
  cell0.innerHTML = getActId();
  cell1 = actNewRow.insertCell(1);
  cell1.innerHTML = actData.projectId;
  cell2 = actNewRow.insertCell(2);
  cell2.innerHTML = actData.actName;
  cell3 = actNewRow.insertCell(3);
  cell3.innerHTML = actData.actInitialDate;
  cell4 = actNewRow.insertCell(4);
  cell4.innerHTML = actData.actFinalDate;
  cell5 = actNewRow.insertCell(5);
  cell5.innerHTML = actFinalizedCheck();
  cell6 = actNewRow.insertCell(6);
  cell6.innerHTML = `<a onClick="actOnEdit(this)" id="edit">Editar</a>
                     <a onClick="actOnDelete(this)" id="delete">Deletar</a>`;
  completedP();
  lateProject();
  actResetForm();
}

// Limpa o formulário
function actResetForm() {
  document.getElementById("projectId").value = "";
  document.getElementById("actName").value = "";
  document.getElementById("actInitialDate").value = "";
  document.getElementById("actFinalDate").value = "";
  selectedRow = null;
}

// Edita os valores da linha da tabela
function actOnEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("projectId").value = selectedRow.cells[1].innerHTML;
  document.getElementById("actName").value = selectedRow.cells[2].innerHTML;
  document.getElementById("actInitialDate").value = selectedRow.cells[3].innerHTML;
  document.getElementById("actFinalDate").value = selectedRow.cells[4].innerHTML;
  document.getElementById("ended").value = selectedRow.cells[5].innerHTML;
}

// Atualiza a linha da tabela
function actUpdateRecord(actFormData) {
  selectedRow.cells[1].innerHTML = actFormData.projectId;
  selectedRow.cells[2].innerHTML = actFormData.actName;
  selectedRow.cells[3].innerHTML = actFormData.actInitialDate;
  selectedRow.cells[4].innerHTML = actFormData.actFinalDate;
  selectedRow.cells[5].innerHTML = actFinalizedCheck();
}

// Deleta uma linha da tabela
function actOnDelete(td) {
  if (confirm('Tem certeza que quer deletar essa atividade?')) {
    row = td.parentElement.parentElement;
    document.getElementById("actList").deleteRow(row.rowIndex);
    actResetForm();
  }
}