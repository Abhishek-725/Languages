let objFunc = (info = {} ) => {
    if (Object.keys(info).length) {
        console.log(`My name is ${info?.name} and I am ${info?.age} old.`);
    }
}

objFunc({name : "Abhi",age : 7});
objFunc({});