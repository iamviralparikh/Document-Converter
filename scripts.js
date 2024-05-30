function convertDocToPdf() {
    const input = document.getElementById('docToPdfInput');
    if (input.files.length === 0) {
        alert('Please select a DOC file to convert.');
        return;
    }

    const file = input.files[0];
    const formData = new FormData();
    formData.append('file', file);

    fetch('YOUR_BACKEND_API_URL/convert-doc-to-pdf', {
        method: 'POST',
        body: formData
    })
    .then(response => response.blob())
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const downloadLink = document.getElementById('docToPdfDownload');
        downloadLink.href = url;
        downloadLink.download = 'converted.pdf';
        downloadLink.style.display = 'block';
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while converting the file.');
    });
}

function convertPdfToDoc() {
    const input = document.getElementById('pdfToDocInput');
    if (input.files.length === 0) {
        alert('Please select a PDF file to convert.');
        return;
    }

    const file = input.files[0];
    const formData = new FormData();
    formData.append('file', file);

    fetch('YOUR_BACKEND_API_URL/convert-pdf-to-doc', {
        method: 'POST',
        body: formData
    })
    .then(response => response.blob())
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const downloadLink = document.getElementById('pdfToDocDownload');
        downloadLink.href = url;
        downloadLink.download = 'converted.doc';
        downloadLink.style.display = 'block';
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while converting the file.');
    });
}
