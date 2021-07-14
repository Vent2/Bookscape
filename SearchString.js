// Load a book from disk
function loadBook(fileName, displayName) {
    let currentBook = "";
    let url = "books/" + fileName;

    // reset our UI
    document.getElementById('fileName').innerHTML = displayName;
    document.getElementById('searchstat').innerHTML = "";
    document.getElementById('keyword').value = "";

    // create a server request to load our books
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            currentBook = xhr.responseText;

            // remove line breaks and carriage returns and replace with a <br>
            currentBook = currentBook.replace(/(?:\r\n|\r|\n)/g, '<br>');

            document.getElementById('fileContent').innerHTML = currentBook;

            let elmnt = document.getElementById('fileContent');
            elmnt.scrollTop = 0;
        }
    };
}