harrypotter_theme = "";
avengers_theme = "";
function preload(){
    harrypotter_theme = loadSound("Hedwigs_Theme.mp3");
    avengers_theme = loadSound("Avengers_Theme.mp3");
}
function setup(){
    canvas = createCanvas(550, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 600, 500);
}