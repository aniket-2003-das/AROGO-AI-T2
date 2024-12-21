import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function App() {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setImagePreview(URL.createObjectURL(selectedFile));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/caption`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setCaption(response.data.caption);
    } catch (error) {
      console.error('Error:', error);
      setCaption('An error occurred while processing the image');
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Image Captioning</h1>
      </header>
      <main>
        <section className="info-section">
          <h2>About This Project</h2>
          <p>
            This application uses advanced AI technology to generate captions for your images. 
            We're using the BLIP (Bootstrapping Language-Image Pre-training) model, which excels at 
            understanding and describing visual content.
          </p>
          <p>
            Simply upload an image, and our AI will analyze it to provide a detailed caption. 
            This technology can be used for accessibility, content management, and much more!
          </p>
        </section>
        <section className="upload-section">
          <h2>Upload Your Image</h2>
          <form onSubmit={handleSubmit}>
            <div className="file-input-container">
              <input 
                type="file" 
                onChange={handleFileChange} 
                accept="image/*" 
                id="file-upload"
                className="file-input"
              />
              <label htmlFor="file-upload" className="file-label">
                Choose an image
              </label>
            </div>
            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Preview" />
              </div>
            )}
            <button type="submit" disabled={!file || loading} className="submit-button">
              {loading ? 'Generating Caption...' : 'Get Caption'}
            </button>
          </form>
        </section>
        {caption && (
          <section className="result-section">
            <h2>Image Caption</h2>
            <p className="caption">{caption}</p>
          </section>
        )}
      </main>
      <footer>
        <p>© 2023 AI Image Captioning. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

