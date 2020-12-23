class Roof{
    constructor(x,y){
        
        this.body=Bodies.rectangle(x,y,350,35,{isStatic: true})
        World.add(world,this.body);
    
    }

    display(){
        fill("orange")
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,350,35)
    }

}