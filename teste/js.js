var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["id"] = document.getElementById("id").value;
    formData["horariodeinicio"] = document.getElementById("horariodeinicio").value;
    formData["horariodetermino"] = document.getElementById("horariodetermino").value;
    formData["evento"] = document.getElementById("evento").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.horariodeinicio;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.horariodetermino;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.evento;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("id").value = "";
    document.getElementById("horariodeinicio").value = "";
    document.getElementById("horariodetermino").value = "";
    document.getElementById("evento").value = "";
    selectedRow = null; 
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("horariodeinicio").value = selectedRow.cells[1].innerHTML;
    document.getElementById("horariodetermino").value = selectedRow.cells[2].innerHTML;
    document.getElementById("evento").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.horariodeinicio;
    selectedRow.cells[2].innerHTML = formData.horariodetermino;
    selectedRow.cells[3].innerHTML = formData.evento;
}

function onDelete(td) {
    if (confirm('Deseja deletar ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("id").value == "") {
        isValid = false;
        document.getElementById("idinvalido").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("idinvalido").classList.contains("hide"))
            document.getElementById("idinvalido").classList.add("hide");
    }
    return isValid;
}