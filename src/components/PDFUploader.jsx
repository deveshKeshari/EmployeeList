import React, { useState } from "react";

const PDFUploader = () => {
  
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);

 
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
      setErrorMessage(""); 
      setIsUploaded(false);
    } else {
      setErrorMessage("Please select a valid PDF file.");
      setSelectedFile(null);
      setIsUploaded(false);
    }
  };

  
  const handleUpload = () => {
    if (selectedFile) {
      
      console.log("Uploading file:", selectedFile);
      alert("PDF file uploaded successfully!");
      setIsUploaded(true); 
    } else {
      alert("No file selected.");
    }
  };

  return (
    <div>
      <div>Upload or Edit a PDF</div>
      
     
      {!isUploaded && (
        <input type="file" accept="application/pdf" onChange={handleFileChange} />
      )}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {selectedFile && (
        <div>
          <p>Selected file: {selectedFile.name}</p>

          
          <button onClick={handleUpload}>
            {isUploaded ? "Uploaded" : "Upload PDF"}
          </button>

         
          {isUploaded && (
            <div>
              <button
                onClick={() => {
                  setSelectedFile(null);
                  setIsUploaded(false);
                }}
              >
                Edit PDF
              </button>
            </div>
          )}

          
          {isUploaded && (
            <div>
              <a
                href={URL.createObjectURL(selectedFile)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open PDF in New Tab
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PDFUploader;
