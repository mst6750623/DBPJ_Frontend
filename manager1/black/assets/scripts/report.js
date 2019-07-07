var rM = document.getElementById('reportedMusics')
var rU = document.getElementById('reportedUsers')

function addReportedUser(id, name, detail) {
    var rowLength = rU.rows.length;
    var newRow = rU.insertRow(rowLength);
    newRow.insertCell(0).innerHTML = id;
    newRow.insertCell(1).innerHTML = name;
    newRow.insertCell(2).innerHTML = detail;
    newRow.insertCell(3).innerHTML = "<button onclick=\"limitUser(this)\" type=\"button\" class=\"btn btn-rounded btn-bordered btn-danger btn-sm waves-effect waves-light\">封禁</button>"
    updateReportedUsers();
    updateReportNum();
}

function removeReportedUser(index) {
    rU.deleteRow(index);
    reOrderIndex(rU);
    updateReportedUsers();
    updateReportNum();
}

function addReportedMusic(id, name, uploader, detail) {
    var rowLength = rM.rows.length;
    var newRow = rM.insertRow(rowLength);
    newRow.insertCell(0).innerHTML = id;
    newRow.insertCell(1).innerHTML = name;
    newRow.insertCell(2).innerHTML = uploader;
    newRow.insertCell(3).innerHTML = detail;
    newRow.insertCell(4).innerHTML = "<button  onclick=\"removeMusic(this)\" type=\"button\" class=\"btn btn-rounded btn-bordered btn-danger btn-sm waves-effect waves-light\">删除</button>"
    updateReportedMusics();
    updateReportNum();
}

function removeReportedMusic(index) {
    rM.deleteRow(index);
    reOrderIndex(rM);
    updateReportedMusics();
    updateReportNum();
}

function reOrderIndex(table) {
    var rowLength = table.rows.length;
    for (var i = 1; i < rowLength; i++) {
        table.rows[i].cells[0].innerHTML = i;
    }
}

function updateReportedUsers() {
    var numReportedUsers = rU.rows.length - 1;
    sessionStorage.setItem('numReportedUsers', numReportedUsers);
    //document.getElementById('numRU').innerHTML = numReportedUsers;
}

function updateReportedMusics() {
    var numReportedMusics = rM.rows.length - 1;
    sessionStorage.setItem('numReportedMusics', numReportedMusics);
    //document.getElementById('numRM').innerHTML = numReportedMusics;
}

function updateReportNum() {
    var numRU = sessionStorage.getItem('numReportedUsers');
    var numRM = sessionStorage.getItem('numReportedMusics');
    if (numRM && numRU && numRM + numRU > 0) {
        document.getElementById('numReports').innerHTML = numRU + numRM;
    }
}

function removeMusic(btn){
    var rowIndex = btn.parentNode.parentNode.rowIndex;
    removeReportedMusic(rowIndex);
}

function limitUser(btn) {
    var rowIndex = btn.parentNode.parentNode.rowIndex;
    removeReportedUser(rowIndex);
}