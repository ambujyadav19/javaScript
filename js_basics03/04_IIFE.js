//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB Connected`);
})();

( (name)=>{
    console.log(`IIFE using arrow function ${name}`);
} )("ambuj")