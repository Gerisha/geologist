class Sand {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1,
          mass:3,
          radius:0.5
      }
      this.body = Bodies.circle(x, y, 20, options);
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
      fill("red");
      ellipse(0, 0, 20,20);
      pop();
    }
  };