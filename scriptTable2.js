// Código para a Tabela de Atividades

/* Aciona quando o formulário é enviado e chama a função actReadFormData, 
pegando as informações e passando para a função de inserção*/
function actOnFormSubmit() {
  var actFormData = actReadFormData();
  actInsertNewRecord(actFormData);
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

// Coloca as informações recebidas numa linha da tabela
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
  actResetForm();
}

// Limpa o formulário
var selectedRow = null;

function actResetForm() {
  document.getElementById("projectId").value = "";
  document.getElementById("actName").value = "";
  document.getElementById("actInitialDate").value = "";
  document.getElementById("actFinalDate").value = "";
  selectedRow = null;
}