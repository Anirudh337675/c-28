class Mango
{
    constructor(x,y,width,height)
    {
       var options={
           isStatic:true,
           restitution:0,
           
           friction:1
       }
        this.body=Matter.Bodies.rectangle(x,y,width,height,options);
        this.width=20;
        this.height=40;
        this.image = loadImage("mango.png")
        World.add(world,this.body);
    }
    display()
    {
        var rox=this.body.position;
        imageMode(CENTER);
        image(this.image, rox.x, rox.y, this.width, this.height);
        
    }

}