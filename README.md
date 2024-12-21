# AI Image Captioning Web Application

## Overview

This project is an AI-powered web application that generates text descriptions for uploaded images using a pre-trained image captioning model. It leverages the BLIP (Bootstrapping Language-Image Pre-training) model via Hugging Face to provide accurate and meaningful captions. The project includes a React frontend for user interaction and a Node.js backend for image processing and API communication.

## Features

- **User-Friendly Interface**: Intuitive design for seamless image uploads.
- **Real-Time Preview**: Displays the uploaded image before generating captions.
- **AI-Generated Captions**: Generates descriptive text using the BLIP model.
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.

## Technologies Used

### Frontend

- **React.js**: For building the user interface.
- **Axios**: For API requests.
- **Tailwind CSS**: For responsive and modern styling.

### Backend

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: For creating RESTful APIs.
- **Multer**: For handling file uploads.
- **Axios**: For communication with the Hugging Face API.

### AI Model

```bash
- **BLIP**: The Salesforce/blip-image-captioning-base model accessed via Hugging Face API.
```

## Prerequisites

Before you begin, ensure you have the following:

- **Node.js**: Version 14.0.0 or later.
- **npm**: Version 6.0.0 or later.
- **Hugging Face Account**: With an API key.

## Setup and Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/ai-image-captioning.git
cd ai-image-captioning
```

### Step 2: Install Dependencies

```bash
cd backend
npm install
```

```bash
cd ../frontend
npm install
```

### Step 3: Configure Environment Variables

Create an `.env` file in the `backend` directory and add the following:

```bash
HUGGINGFACE_API_KEY=your_hugging_face_api_key
PORT=5000
```

### Step 4: Run the Application

```bash
cd backend
npm start
```

```bash
cd frontend
npm start
```

### Step 5: Access the Application

Open your browser and navigate to `http://localhost:3000`.

## Folder Structure

```text
.
├── backend
│   ├── app.js
│   ├── routes
│   │   └── upload.js
│   ├── controllers
│   │   └── captionController.js
│   ├── middleware
│   │   └── multerConfig.js
│   ├── package.json
│   └── .env
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── UploadForm.js
│   │   │   ├── CaptionDisplay.js
│   │   └── App.js
│   ├── public
│   │   └── index.html
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

## API Endpoints

### Upload Image

**POST** `/api/upload`

- **Description**: Accepts an image file and returns a generated caption.
- **Request Body**: Multipart form data containing the image.
- **Response**: JSON object with the image caption.

Example Response:

```json
{
  "caption": "A scenic view of mountains and a lake."
}
```

## Deployment

Frontend -: <https://imagedescription.vercel.app/>

## Additional Features

- **Multi-language Support**: Generate captions in different languages.
- **Caption Editing**: Allow users to edit the generated captions.
- **Image History**: Store and display previously uploaded images and captions.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
Feel free to contribute to this project by submitting issues or pull requests.
