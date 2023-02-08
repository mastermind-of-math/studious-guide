function snap(){
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML = '<img id="captured_img" src="' + data_uri + '"/>';
    });
};

function modelLoaded(){
    console.log("model loaded")
}

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
Webcam.attach('#camera');

console.log('ml5 version: ', ml5.version);
var camera = document.getElementById('camera');
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/uQyLDK0b-/model.json', modelLoaded);
var pguess1 = null;
var pguess2 = null;