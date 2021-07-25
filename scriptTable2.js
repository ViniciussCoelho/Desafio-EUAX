// Activities Table
function actOnFormSubmit() {
  var actFormData = actReadFormData();
  actInsertNewRecord(actFormData);
}

function actReadFormData() {
  var actFormData = {};
  actFormData["projectId"] = document.getElementById("projectId").value;
  actFormData["actName"] = document.getElementById("actName").value;
  actFormData["actInitialDate"] = document.getElementById("actInitialDate").value;
  actFormData["actFinalDate"] = document.getElementById("actFinalDate").value;
  actFormData["ended"] = document.getElementById("ended").value;
  return actFormData;
}

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

}

function actResetForm() {
  document.getElementById("actName").value = "";
  document.getElementById("actInitialDate").value = "";
  document.getElementById("actFinalDate").value = "";
  selectedRow = null;
}