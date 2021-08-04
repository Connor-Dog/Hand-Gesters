prediction="";
camera=document.getElementById("camera");
Webcam.set({
height:300,
width:350,
image_format:'png',
png_quality:90
});
Webcam.attach('#camera');
function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="captured_image"src="'+data_uri+'">';
});
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/yYwKV_7Gx/model.json',modelLoaded);
function modelLoaded(){
console.log('model Loaded');
}
function speak(){
var synth=window.speechSynthesis;
speak_data1="the prediction is"+prediction;
var utterThis=new SpeechSynthesisUtterance(speak_data1);
synth.speak(utterThis);
}
function check(){
img=document.getElementById('captured_image');
classifier.classify(img,gotResult);
}
function gotResult(error, results) {
if (error) {captured_image
   console.error(error)
} else {
console.log(results);
document.getElementById('result_gesture_name').innerHTML = results[0].label;
prediction=results[0].label;
speak();
if(results[0].label=="Hello"){
document.getElementById("update_gesture").innerHTML="&#9995";
}
if(results[0].label=="Peace"){
document.getElementById("update_gesture").innerHTML="&#9996";
}
if(results[0].label=="Left"){
document.getElementById("update_gesture").innerHTML="&#128072";
}
}}