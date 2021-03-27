class Chain {
    constructor(b1, b2){
      var options = {
       bodyA : b1,
       bodyB : b2,
       stiffness : 0.1, 
       length : 10
    }
    this.connection = Constraint.create(options)
    World.add(world, this.connection);
}
display(){

    var pointA = this.connection.bodyA.position;
    var pointB = this.connection.bodyB.position;
    strokeWeight(2);
    line(pointA.x,pointA.y, pointB.x,pointB.y);
}
}