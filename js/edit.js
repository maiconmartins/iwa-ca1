function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Nationality").value = selectedRow.cells[0].innerHTML;
    document.getElementById("age").value = selectedRow.cells[1].innerHTML;
    document.getElementById("dream").value = selectedRow.cells[2].innerHTML;
    document.getElementById("NoCountry").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Nationality;
    selectedRow.cells[1].innerHTML = formData.age;
    selectedRow.cells[2].innerHTML = formData.dream;
    selectedRow.cells[3].innerHTML = formData.NoCountry;
}