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
    formData["Nationality"] = document.getElementById("Nationality").value;
    formData["age"] = document.getElementById("age").value;
    formData["dream"] = document.getElementById("dream").value;
    formData["NoCountry"] = document.getElementById("NoCountry").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("BucketList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Nationality;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.age;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.dream;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.NoCountry;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}
function resetForm() {
    document.getElementById("Nationality").value = "";
    document.getElementById("age").value = "";
    document.getElementById("dream").value = "";
    document.getElementById("NoCountry").value = "";
    selectedRow = null;
}
