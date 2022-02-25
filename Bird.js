class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
  this.rockImage = loadImage("sprites/smoke.png");
    this.image = loadImage("sprites/bird.png");
    this.trajectory=[];
  }

  display() {

    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.velocity.x>10&&this.body.position.x>200){
      var position=[this.body.position.x,this.body.position.y];
      this.trajectory.push(position);
     
    }
     for(var AEAH=0;AEAH<this.trajectory.length;AEAH++){
      image(this.rockImage, this.trajectory[AEAH][0],this.trajectory[AEAH][1]);
   
    }
  }
}
