require('dotenv').config();
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Update CORS to accept requests from your Vercel deployment
app.use(cors({
  // origin: process.env.FRONTEND_URL || 'http://localhost:3000'  
  // origin: process.env.FRONTEND_URL || 'https://imagedescription.vercel.app/'  
  origin: 'https://imagedescription.vercel.app/'  
}));

app.post('/caption', upload.single('image'), async (req, res) => {
  try {
    const imageFile = fs.createReadStream(req.file.path);
    
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base',
      imageFile,
      {
        headers: {
          'Content-Type': 'application/octet-stream',
          'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY}`
        },
      }
    );

    const caption = response.data[0].generated_text;
    res.json({ caption });

    // Clean up: delete the uploaded file
    fs.unlinkSync(req.file.path);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while processing the image' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

