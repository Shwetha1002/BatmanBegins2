class Drops{
    constructor(x, y, radius ) {
        var options = {
           'isStatic' : false,
            'restitution':0,
            'friction': 0.8,
           
  
        }
                this.radius = radius;
                
        this.body = Bodies.circle(x, y, radius,options);
        
        
        World.add(world, this.body);
      }

      update(){
        if(this.body.position.y >= 900){
        Matter.Body.setPosition( this.body, {x: random (0,400), y: random (0,400)})
        }
      }



      display(){
        
        
        var pos = this.body.position;
        //var angle = this.body.angle;

        push();
        //translate(pos.x, pos.y);
        //rotate(angle);
       
        noStroke();
        fill("gray");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y,this.radius,this.radius);
        pop();
        
      }
  }