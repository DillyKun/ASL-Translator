let video;
let features;
let userInstructions;
let knn;
let ready = false;
let labelText;
let trainButton;
let saveButton;

function setup() {
  let canvas = createCanvas(950, 700);
  fetchWebCam();

  // Call back function, waiting until the MobileNet model is ready
  features = ml5.featureExtractor("MobileNet", modelReady);
  
  userInterface();
  labelText = createInput("");
  labelText.parent("user-input");
  canvas.parent("user-video");
}

function draw() {
  image(video, 0, 0, width, height);
  document.getElementById("tbutton").onclick = trainModelButton;
  document.getElementById("sbutton").onclick = saveTrainingButton;
  // if (!ready && knn.getNumLabels() > 0) {
  //   goClassify();
  //   ready = true;
  // }
}

// toUpperCase() method allows for all labels to be uppercase
function trainModelButton() {
  let logits = features.infer(video);
  knn.addExample(logits, labelText.value().toUpperCase());
  console.log("Added Label: " + labelText.value().toUpperCase());
}

function saveTrainingButton() {
  knn.save("model.json");
}
