class Chain{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetY = offsetY
        this.offsetX = offsetX
        var options={
            bodyB:bodyB,
            bodyA:bodyA,
            length:150,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.chain = Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position
        strokeWeight(20)
        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offestY)
        
    }
}