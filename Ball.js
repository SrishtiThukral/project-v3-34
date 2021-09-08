class Ball{
    constructor(x,y,w,h ){
        var options={
            restitution: 0.02,
            density:0.01
        }
        this.body= Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        World.add(world, this.body);
 
    }
    
    display(){
        push();
        ellipseMode(CENTER);
        fill("white");
        ellipse(this.body.position.x, this.body.position.y, this.w, this.h);
        pop();
    }
}