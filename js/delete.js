function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("BucketList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("Nationality").value == "") {
        isValid = false;
        document.getElementById("NationalityNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("NationalityNameValidationError").classList.contains("hide"))
            document.getElementById("NationalityNameValidationError").classList.add("hide");
    }
    return isValid;
}