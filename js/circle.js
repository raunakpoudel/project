
const radius =[2,4,6,8]

function area(r){
    return Math.PI*r*r;
}

function diameter(r){
    return r*2;
}
function circumference(r){
    return 2*Math.PI*r;
}

function calculate(logic,radius){
    const result=[]
    for( i=0;i<radius.length;i++){
       result.push(logic(radius[i])) ;
    }
    return result;

}

console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));

// now both code run same and give same result

console.log(calculate(area,radius));
console.log(calculate(circumference,radius));
console.log(calculate(diameter,radius));
