// jshint esversion:6
const debounce = (func, delay) => {
    let inDebounce; //record the time
    return function(){
        const context = this;
        console.log(context); // this button
        const args = arguments;
        console.log(args); // mouse event
        clearTimeout(inDebounce); // clear the time
        inDebounce = setTimeout(()=>func.apply(context,args),delay);
    };
};
document.querySelector("#debounceBtn").addEventListener('click', debounce(function(){
    console.info('It is', new Date().toUTCString());
}, 3000));

const throttle = (func, limit)=>{
    let inThrottle;
    return function(){
        const context = this;
        const args = arguments;
        if(!inThrottle){
            func.apply(context, args);
            inThrottle = true;
            setTimeout(()=>{
                inThrottle = false;
            }, limit);
        }
    };
};

document.querySelector("#throttleBtn").addEventListener('click', throttle(function(){
    console.info('It is', new Date().toUTCString());
}, 1000));