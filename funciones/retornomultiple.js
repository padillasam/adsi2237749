
const [a,b,c]=[100,200,300];
console.log(a);




function variosReturn(){
    const a =()=>"letra a";
    const b =()=>"letra b";
    const c =()=>"letra c";
    return [a,b,c]
}

const [x,y,z]=variosReturn();
console.log(x());
console.log(y());
console.log(z());