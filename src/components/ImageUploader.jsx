import React, { useState } from "react";

const ImageUploader = () => {

  const [selectedImage, setSelectedImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);

 
  const handleFileChange = (event) => {
    const file = event.target.files[0];

   
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setSelectedImage(file);
      setErrorMessage(""); 
      setIsUploaded(false); 
    } else {
      setErrorMessage("Please select a valid JPEG or PNG image.");
      setSelectedImage(null);
      setIsUploaded(false);
    }
  };

  
  const handleUpload = () => {
    if (selectedImage) {
      console.log("Uploading image:", selectedImage);
      alert("Image uploaded successfully!");
      setIsUploaded(true); 
    } else {
      alert("No image selected.");
    }
  };

  return (
    <div>
      <div>Upload or Edit an Image</div>
      {!isUploaded && (
        <input type="file" accept="image/jpeg, image/png" onChange={handleFileChange} />
      )}
      
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {selectedImage && (
        <div>
          <p>Selected image: {selectedImage.name}</p>

          <button onClick={handleUpload}>
            {isUploaded ? "Uploaded" : "Upload Image"}
          </button>

          {isUploaded && (
            <div>
              <button
                onClick={() => {
                  setSelectedImage(null);
                  setIsUploaded(false);
                }}
              >
                Edit Image
              </button>
            </div>
          )}

          
          {isUploaded && (
            <div>
              <a
                href={URL.createObjectURL(selectedImage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Image in New Tab
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
