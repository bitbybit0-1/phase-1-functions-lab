// Code your solution in this file!


function distanceFromHqInBlocks(distance){
return Math.abs(distance - 42)

}
function distanceFromHqInFeet(distance){

   let hide = distanceFromHqInBlocks(distance);
    return hide * 264

}
function distanceTravelledInFeet(start, destination){
let x = Math.abs(start-destination)
return x * 264
}
function calculatesFarePrice(start, destination){
let y = distanceTravelledInFeet(start,destination)
if (y<400){
    y=0
    return y
}else if (y>400&&y<2000){
    
    return (y-400)*.02

}else if (y>2000&&y<2500){
    y=25
    return y
}else{
    return "cannot travel that far"
}
}