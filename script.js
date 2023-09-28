const dropBox = document.getElementById("drop-box")
const inputFile = document.getElementById("input-file")
const imageContainer = document.getElementById("image-container")
const uploader = document.getElementById("uploader")

inputFile.addEventListener('change', uploadImage)

function uploadImage(){
    let imgLink= URL.createObjectURL(inputFile.files[0]);
    var previewImg = document.createElement("img");
    previewImg.setAttribute("src", imgLink);
    previewImg.style.maxWidth = '200px';
    previewImg.style.maxHeight = '200px';
    
    imageContainer.appendChild(previewImg);

}

dropBox.addEventListener('dragover', function(e){
    e.preventDefault();
    uploader.style.opactiy = '0.5';
    uploader.style.border = '2px solid green';
    uploader.style.transform = 'scale(1.1)';
})

dropBox.addEventListener('dragleave', function(e){
    e.preventDefault();
    uploader.style.opactiy = '1';
    uploader.style.border = '2px dotted black';
    uploader.style.transform = 'scale(1)';
})

dropBox.addEventListener('drop', function(e){
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage();
    uploader.style.opactiy = '1';
    uploader.style.border = '2px dotted black';
    uploader.style.transform = 'scale(1)';
})