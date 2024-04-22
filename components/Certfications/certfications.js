const printButtons = document.querySelectorAll('.print-btn');
for (const button of printButtons) {
  button.addEventListener('click', () => {
    // Replace with your logic to generate and print certificate
    console.log('Generating and printing certificate for student...');
  });
}

const sendButtons = document.querySelectorAll('.send-btn');
for (const button of sendButtons) {
  button.addEventListener('click', () => {
    // Replace with your logic to generate a certificate PDF and send via email
    console.log('Generating certificate PDF and sending email...');
  });
}

const uploadInputs = document.querySelectorAll('.upload-input');
for (const input of uploadInputs) {
  input.addEventListener('change', (event) => {
    const uploadedFile = event.target.files[0];
    // You can access the uploaded file details here (e.g., name, size, type)
    console.log('Uploaded file:', uploadedFile);

    // Optional: Store uploaded file data in a hidden element
    const uploadedFileData = btoa(uploadedFile.slice(0, 4096)); // Base64 encode first 4KB
    document.getElementById('uploaded-file-data').value = uploadedFileData;
  });
}
