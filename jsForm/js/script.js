var selectedRow = null;

function onFormSubmit(){
	var formData = readFormData();
	if (selectedRow == null)
	insertNewRecord(formData);
	else
	resetForm();
}

function readFormData(){
	var formData = {};
	formData["NomComplet"] = getElementById("NomComplet").value;
	formData["Courriel"] = getElementById("Courriel").value;
	formData["Telephone"] = getElementById("Telephone").value;
	formData["Ville"] = getElementById("Ville").value;

	return formData;
}

function insertNewFormData(data){
	var table = document.getElementById("clientList").getElementByTagName('tbody')[0];
	var newRow = table.insertRow(table.length);
	cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.NomComplet;
	cell2 = newRow.insertCell(1);
	cell2.innerHTML = data.Courriel;
	cell3 = newRow.insertCell(2);
	cell3.innerHTML = data.Telephone;
	cell4 = newRow.insertCell(3);
	cell4.innerHTML = data.Ville;
	cell5.innerHTML = '<a>Edit</a> <a>Delete</a><a onClick="onDelete(this)">Delete</a>';
}

function resetForm(){
	document.getElementById("NomComplet").value = "";
	document.getElementById("Courriel").value = "";
	document.getElementById("Telephone").value = "";
	document.getElementById("Ville").value = "";
}

function onEdit(td){
	selectedRow = td.parentElement.parentElement;
	document.getElementById("NomComplet").value. = selectedRow.cells[0].innerHTML;
	document.getElementById("Courriel").value. = selectedRow.cells[1].innerHTML;
	document.getElementById("Telephone").value. = selectedRow.cells[2].innerHTML;
	document.getElementById("Ville").value. = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
	selectedRow.cells[0].innerHTML = formData.NomComplet;
	selectedRow.cells[1].innerHTML = formData.Courriel;
	selectedRow.cells[2].innerHTML = formData.Telephone;
	selectedRow.cells[3].innerHTML = formData.Ville;
}

function onDelete(){
	if(confirm('Vous êtes sur pour effacer ces infos?'))
	row = td.parentElement.parentElement;
	document.getElementById(clientList).deleteRow(row.rowIndex);
	resetForm();
}












