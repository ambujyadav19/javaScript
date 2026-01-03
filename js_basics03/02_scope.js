// Local scope and Global scope
//let and const are block scope but var is global scope

if(true){
    let a= 10
    const b=20
    var c=30
}

// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username="ambuj"

    function two(){
        const website="youtube"
        console.log(username);
    }

    // console.log(website);

    two()
}
// one()


if(true){
    const username="ambuj"
    if(username==="ambuj"){
        const website="youtube"
        console.log(username+ website);
    }
    // console.log(website);
}
// console.log(username);


// +++++++++++++++++++++  Interesting concept++++++++++

// console.log(addone(5));
function addone(num){  //in this case we can access the function before decleration
    return num +1
}


// console.log(addTwo(5));
const addTwo = function(num){   //this is also a function,but in this case we can not access the function (declared by this type) before decleration
    return num+2
}

