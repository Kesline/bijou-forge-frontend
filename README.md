# bijou-forge-documentation

# Generative 3D Jewelry Design: From Prompt or Image to Printable Shape

## Project Documentation

### Project Overview
This documentation outlines the development of a generative 3D jewelry design tool that transforms text prompts or images into printable 3D models. The platform leverages AI models and 3D rendering technologies to democratize custom jewelry design, making it accessible to users without specialized 3D modeling expertise.

### Team Members
- Navkar Jain
- Nirmit Raj
- Kesline Jean Baptiste
- Enock Ayiku

### Project Track
Fine-Tuning of Models

## Table of Contents
1. [Introduction](#introduction)
2. [System Architecture](#system-architecture)
3. [Frontend Components](#frontend-components)
4. [Backend Implementation](#backend-implementation)
5. [Model Training and Fine-Tuning](#model-training-and-fine-tuning)
6. [Data Processing](#data-processing)
7. [Features and Functionalities](#features-and-functionalities)
8. [Technical Challenges](#technical-challenges)
9. [Future Improvements](#future-improvements)
10. [Installation and Setup](#installation-and-setup)
11. [Usage Guide](#usage-guide)

## Introduction
The Generative 3D Jewelry Design project addresses a significant bottleneck in the jewelry creation process. Traditional jewelry design requires extensive expertise in 3D modeling software like Rhino or Blender, creating barriers to entry for many creative individuals. Our solution leverages AI models to generate print-ready 3D models from simple inputs like text descriptions or reference images, dramatically reducing the time and expertise required for jewelry design.

The project aims to:
- Enable non-experts to create high-quality jewelry designs
- Streamline the design-to-print pipeline
- Facilitate mass personalization at scale
- Provide a foundation for AI-driven creativity in physical manufacturing

## System Architecture

### Overall System Design
The system follows a client-server architecture with:

1. **Frontend**: React-based web application providing user interface for design creation and visualization
2. **Backend**: Python-based service handling model processing and 3D transformations
3. **Model Pipeline**: Fine-tuned generative models for 3D jewelry creation
4. **Rendering Engine**: Three.js/React Three Fiber for real-time 3D visualization

### Technology Stack
- **Frontend**: React, TailwindCSS, React Three Fiber, Three.js
- **Backend**: Python, Flask, Blender (headless mode)
- **Models**: Fine-tuned variants of 3D generative models
- **Data Processing**: Objaverse utilities, custom data transformation scripts
- **Deployment**: Standard web deployment with GPU acceleration for model inference

## Frontend Components

The frontend is built with React and utilizes modern 3D web technologies for an interactive design experience.

### Key Components

#### Home Component
The main container component that organizes the application layout and manages global state.

```jsx
// Home.jsx - Main application container
// Manages application state and layout
```

#### GenerationPanel Component
Handles user input for both text-based and image-based generation workflows.

```jsx
// GenerationPanel.jsx - User input handling
// Supports text prompts and image uploads
```

#### ImprovedModelViewer Component
Provides an interactive 3D visualization of the generated jewelry models.

```jsx
// ImprovedModelViewer.jsx - 3D model visualization
// Features include:
// - Material presets (gold, silver, platinum)
// - Multiple view modes (orbit, presentation, detail)
// - Camera controls and screenshot functionality
// - Model download as STL for 3D printing
```

#### HistorySidebar Component
Manages the user's design history with search and filtering capabilities.

```jsx
// HistorySidebar.jsx - Design history management
// Includes filtering by type and time range
```

#### Header Component
Application header with authentication controls and theme switching.

```jsx
// Header.jsx - Application header
// Includes theme toggle and authentication
```

### User Interface

The UI is designed with a focus on simplicity and intuitiveness:

1. **Input Section**: Simple interface for entering text prompts or uploading reference images
2. **3D Viewer**: Real-time interactive display of the generated 3D model
3. **Controls**:  Camera controls, and download options
4. **History Panel**: Access to previously generated designs with search and filter functionality

## Backend Implementation

The backend handles the heavy computation tasks including model inference and 3D processing.

### Blender Script Integration

The backend leverages Blender's Python API for 3D model processing, optimization, and rendering.

```python
# blender_script.py handles:
# - Loading and normalizing 3D models
# - Setting up rendering environments
# - Generating multiple views of models
# - Optimizing meshes for 3D printing
```

The script provides flexible rendering options including:
- Multiple camera angles
- Different lighting setups
- Resolution control
- Output format selection

### API Endpoints

The backend provides several RESTful API endpoints:

1. `/api/generate/text`: Generate a 3D model from a text prompt
2. `/api/generate/image`: Generate a 3D model from an uploaded image
3. `/api/edit`: Modify an existing model based on text instructions
4. `/api/save`: Save a model to the user's account
5. `/api/download/stl/:modelId`: Download a model in STL format for 3D printing

## Model Training and Fine-Tuning

### Dataset Preparation

The project utilized the Objaverse dataset, focusing specifically on jewelry-related 3D models.

```python
# Jewelry model identification
jewelry_uids = [
    uid
    for uid, ann in annotations.items()
    if any(tag["slug"] in candidate_slugs for tag in ann.get("tags", []))
]
print(f"Found {len(jewelry_uids):,} jewelry models in Objaverse 1.0")
```

### Model Selection and Fine-Tuning

The project explored multiple 3D generative models with a focus on those that could produce high-quality, structurally sound outputs suitable for 3D printing.

Key considerations for model selection included:
- Geometric integrity
- Detail preservation
- Structural soundness for printing
- Support for conditional generation (text/image)

## Data Processing

### Data Cleaning and Normalization

Several utility scripts were developed to process the 3D model data:

1. `copy_files_flat.py`: Flattens directory structures for easier batch processing
2. `dedupe_by_size.py`: Removes duplicate models based on file size
3. `blender_script.py`: Normalizes and prepares models for rendering and training

### Data Augmentation

To improve model robustness, the dataset was augmented with:
- Multiple camera angles per model
- Variation in lighting conditions
- Material and texture variations

## Features and Functionalities

### Text-to-3D Generation

Users can describe their desired jewelry piece in natural language, and the system generates a corresponding 3D model. Examples include:
- "A gold ring with a square emerald surrounded by small diamonds"
- "Art deco style silver bracelet with geometric patterns"

### Image-to-3D Generation

Users can upload reference images of jewelry pieces, and the system generates a 3D model that matches the visual characteristics of the input image.

### Model Editing and Refinement

The platform supports iterative refinement through:
- Text-based editing instructions
- Material and finish selection
- Structural optimization for printability

### 3D Model Visualization

The interactive viewer provides:
- Real-time 3D manipulation
- Multiple view modes
- Material visualization options
- Lighting configuration

### Model Export for Manufacturing

Models can be exported in STL format, ready for:
- 3D printing
- CNC milling
- Traditional lost-wax casting

## Technical Challenges

### Geometric Integrity

Ensuring the generated models are watertight and structurally sound for 3D printing required:
- Post-processing to repair mesh issues
- Minimum thickness enforcement
- Support structure considerations

### Material Visualization

Accurately representing jewelry materials (metals, gemstones) in the web-based viewer required:
- Custom Three.js material configurations
- Environment mapping for reflections
- Physically-based rendering techniques

### Model Size Optimization

Balancing model detail with performance constraints for web delivery involved:
- Mesh decimation algorithms
- Level-of-detail implementations
- Progressive loading techniques

## Future Improvements

### Short-term Enhancements

1. **User Accounts and Cloud Storage**: Implement persistent storage for user designs
2. **Material Cost Estimation**: Add real-time cost estimates based on materials and dimensions
3. **Advanced Customization**: More granular control over design elements

### Long-term Vision

1. **Direct Manufacturing Integration**: Connect with jewelry manufacturing services
2. **AR Try-on**: Mobile AR functionality to visualize designs on the user
3. **Style Transfer**: Generate designs that combine characteristics from multiple reference pieces
4. **Collaborative Design**: Enable multiple users to work on designs simultaneously

## Installation and Setup

### Prerequisites
- Node.js and npm for frontend development
- Python 3.8+ for backend services
- Blender 3.0+ for 3D processing
- GPU with CUDA support (recommended for model inference)

### Frontend Setup
```bash
# Clone the repository
git clone https://github.com/Kesline/bijou-forge-frontend.git

# Install dependencies
cd bijou-forge-frontend
npm install

# Start development server
npm start
```

### Backend Setup
```bash
# Clone the repository
git clone https://github.com/navkar98/bijou-forge-backend.git

# Create virtual environment
cd bijou-forge-backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start the server
python app.py
```

## Usage Guide

### Creating a Design from Text
1. Navigate to the application in your web browser
2. Select the "Describe" tab in the generation panel
3. Enter a detailed description of your desired jewelry piece
4. Click "Generate 3D Model"
5. Interact with the 3D model in the viewer
6. Optional: Apply material changes or other adjustments
7. Download the STL file for 3D printing

### Creating a Design from Image
1. Navigate to the "Upload Image" tab
2. Drag and drop an image or click to browse
3. Upload a reference image of jewelry
4. Click "Generate from Image"
5. Review and interact with the generated 3D model
6. Download the model or save to your account

### Editing an Existing Design
1. Select a design from your history
2. Click "Edit This Design"
3. Enter text instructions describing the desired changes
4. Click "Apply Changes"
5. Review the updated design
6. Download the modified model

## Conclusion

The Generative 3D Jewelry Design project demonstrates the potential of AI-driven creativity in physical manufacturing domains. By reducing the technical barriers to jewelry design, the platform enables a wider audience to participate in the creation process, potentially transforming the jewelry industry's approach to custom design.

The project serves as a proof of concept for similar applications in other fields requiring 3D modeling expertise, showing how generative AI can bridge the gap between creative vision and manufacturing-ready 3D assets.
