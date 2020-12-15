class Chain{
    constructor(bodyA,bodyB){
      
        var c_options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stiffness:0.004
        }
        

        this.chain=Constraint.create(c_options);
        World.add(world,this.chain);
    }
      display(){
        if(this.chain.bodyA){
          var a=this.chain.bodyA.position
          var b=this.chain.bodyB.position
       
        line(a.x,a.y, b.x,b.y);
        }
      }
      fly()
      {
          this.chain.bodyA=null;
      }
      
    }