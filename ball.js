class Paper 
{

    constructor(a,b,c,d){

    this.body=Matter.Bodies.rectangle(a,b,c,d);
    Matter.World.add(world,this.body)
    this.width=c;
    this.height=d;
 this.image=loadImage("paper.png")

    }

    displace(){

        push()

        translate(this.body.position.x,this.body.position.y)

        rotate(this.body.angle*180/PI)

        imageMode(CENTER)

        image(this.image,0,0,this.width,this.height)

        ellipse(0,0, 5, 5);

        pop();

    }

} 
