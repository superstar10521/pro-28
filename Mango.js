class Mango
{
constructor(x, y, radius)
{
var options=
{
isStatic:true,
restitution:0,
friction :1
// density:1.2
}
this.body = Bodies.circle(x, y, radius/2, options);
this.radius = radius;

World.add(world, this.body);
this.image = loadImage("mango.png");
}
display()
{
    var pos=this.body.position
    // fill("green")
    imageMode(CENTER);
    image(this.image,pos.x, pos.y,this.radius, this.radius);
}
}