// Currently uploaded files
let uploadedFiles = [];

const appendFilesToList = () => {
    const filesContainer = document.getElementById('files-container');
    // Clear files from DOM
    filesContainer.innerHTML = '';

    // Loop through files and append to files-container
    Array.from(uploadedFiles).forEach(file => {
        const li = document.createElement("li");
        const fileInfoTextNode = document.createTextNode(`${file?.name} ${file?.path}`);
        li.appendChild(fileInfoTextNode);
        filesContainer.appendChild(li);
    });
}

const clearFiles = () => {
    uploadedFiles = [];
    const filesContainer = document.getElementById('files-container');
    filesContainer.innerHTML = '';
    console.log(uploadedFiles);
}

const saveInfo = () => {
    const fs = require('fs');
    fs.appendFile('uploaded-files-info.txt', uploadedFiles, (err) => {
        if (err) throw err;
        console.log('info salvestati!');
    });
}


const onFileUpload = (event) => {
    uploadedFiles = event?.target?.files;
    console.log(event?.target?.files);
    appendFilesToList()
}

const fileInput = document.getElementById('fileid');
document.getElementById('buttonid').addEventListener('click', openDialog);
function openDialog() {
    fileInput.click();
}

fileInput.addEventListener('change', onFileUpload);

const clearButton = document.getElementById('clearfiles');
clearButton.addEventListener('click', clearFiles);

const saveInfoButton = document.getElementsById('saveinfo');
saveInfoButton.addEventListener('click', saveInfo);