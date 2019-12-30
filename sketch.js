var hypnoticalball,database,position;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    hypnoticalball = createSprite(250,250,10,10);
    hypnoticalball.shapeColor = "red";
    var hypnoticalballposition=database.ref('ball/position');
    hypnoticalballposition.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y,

    })
   
}
function readPosition(data)
{
    position=data.val();
        hypnoticalball.x=position.x;
        hypnoticalball.y=position.y;
}
function showError(){
console.log("error in writing to the database");

}