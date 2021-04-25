function setup () {
video = createCapture(VIDEO);
video.size(550, 500);


canvas = createCapture(550, 500);
canvas.postion(560,150)

poseNet = ml5.poseNet(video, modelloaded);
poseNet.on('pose', gotPoses);
}
function modelloaded() {
    console.log('poseNet Is Initialized!');
}

function draw() {
    background('#808080')
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
    }
}