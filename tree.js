class Tree
{
    constructor(x,y,width,height)
    {
       var options={
           isStatic:true,
       }
        this.body=Matter.Bodies.rectangle(x,y,width,height,options);
        this.width=200;
        this.height=400;
        this.image = loadImage("tree.png");
        World.add(world,this.body);
    }
    display()
    {
        var roc=this.body.position;
        imageMode(CENTER);
        image(this.image, roc.x, roc.y, this.width, this.height);
        
    }

}