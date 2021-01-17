class Rubber {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1,
          mass:5,
          "radius":1
      }
      this.body = Bodies.circle(x, y, 50, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      stroke("black");
      strokeWeight(5);
      fill("blue");
      ellipse(0,0, 50,50);
      pop();
    }
  };