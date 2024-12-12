// Telling the user that the MobileNet model is ready. Used in a callback function, runs only after the MobileNet is ready
function modelReady() {
  console.log("MobileNet Loaded");
  // Loading the KNN Classifier to start training a model
  knn = ml5.KNNClassifier();
   knn.load("model.json", function() {
    console.log("KNN Data Loaded")
    goClassify();
  });
}

//
function goClassify() {
  let logits = features.infer(video);
  knn.classify(logits, function (error, result) {
    if (error) {
      console.error(error);
    } else {
      userInstructions.html(getLabel(result));
      goClassify();
    }
  });
}

// Fetching the user's webcam. Allows for computer vision and for the model to know what to read.
function fetchWebCam() {
  //Fetch webcam
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.style("transform", "scale(-1,1)");
  video.hide();
}

// Sets up an interface for the users. Lets them know what the current translation is
function userInterface() {
  // Letting the user know that they need to input Training Data
  userInstructions = createP("Need Training Data");
  userInstructions.style("font-size", "32pt");
  userInstructions.parent("user-instructions");
}

// https://github.com/ml5js/ml5-library/issues/775 
function getLabel(result) {
  const entries = Object.entries(result.confidencesByLabel);
  let greatestConfidence = entries[0];
  for(let i = 0; i < entries.length; i++) {
    if(entries[i][1] > greatestConfidence[1]) {
      greatestConfidence = entries[i];
    }
  }
  return greatestConfidence[0];
} 