# Signalize: ASL Translator

Signalize is an **American Sign Language (ASL) translator** that uses computer vision and machine learning to recognize hand signs and provide real-time translations. The project aims to bridge the communication gap for ASL users and serve as an educational tool for learning and training hand signs.

## Features

- **Real-Time ASL Translation**: Recognizes and translates hand signs using the device's camera.
- **Train-It-Yourself Functionality**: Users can train the model with new hand signs by providing custom inputs.
- **Interactive Flip Cards**: Displays instructions and additional information in a user-friendly interface.
- **Educational Content**: Explains the purpose and operation of the translator with engaging visuals and FAQs.

## Technologies Used

### Frontend
- **HTML5**: For structuring the application.
- **CSS3**: Used for styling, including animations and responsive design.
  - Flip card animations.
  - Centered and visually appealing layouts.
- **JavaScript**: Handles interactivity and animations.
  - **p5.js**: For integrating video and visual elements.
  - **Bootstrap 5**: Provides responsive components and a consistent design framework.

### Machine Learning
- **ml5.js**: A JavaScript library built on TensorFlow.js for easy machine learning integration.
  - Used for hand sign detection and training.

### Media
- **Custom Videos and Images**: Enhances the user experience with background videos and hand sign visuals.

## How It Works

1. **ASL Translation**:
   - The application captures real-time video from the user's camera.
   - Pre-trained machine learning models process the hand signs.
   - Translations appear dynamically on the screen.

2. **Training**:
   - Users input a custom label for their hand sign.
   - The model is trained in real-time by capturing multiple instances of the sign.
   - Users can save their training data for further use.

3. **Interactive Flip Cards**:
   - Provide step-by-step guides for using the translator and training the model.
   - Flip animations and overlays enhance user engagement.

## Possible Future Improvements 
- Cloud-based training and data storage for collaborative model improvement.
- Support for more hand signs.
- Enhanced accuracy with larger datasets and advanced models.
