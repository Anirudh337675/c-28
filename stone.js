class Stone
{
    constructor(x,y,width,height)
    {
       var options={
           isStatic:false,
           restitution:0,
           density:1.2,
           friction:1
       }
        this.body=Matter.Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image = loadImage("stone.png")
        World.add(world,this.body);
    }
    display()
    {
        var rox=this.body.position;
        imageMode(CENTER);
        image(this.image, rox.x, rox.y, this.width, this.height);
        
    }

}