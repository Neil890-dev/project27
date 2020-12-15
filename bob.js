class Bob{
    constructor(x,y,r){
        var options = {
            restitution: 1,
            friction: 0.3,
            density: 1,
            isStatic: false
        }
        this.body=Bodies.circle(x,y,r,options);
        this.radius=r
        World.add(world,this.body);
    }
    display(){
        push()
        fill("red")
        ellipse(this.body.position.x,this.body.position.y,this.radius, this.radius);
        ellipseMode(RADIUS);
        pop();
    }
}