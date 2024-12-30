const globalVar = "Soy global";

function outerFunction() {
    const outerVar = "Soy de outerFunction";

    function innerFunction() {
        const innerVar = "Soy de innerFunction";
        console.log(innerVar); // "Soy de innerFunction"
        console.log(outerVar); // "Soy de outerFunction"
        console.log(globalVar); // "Soy global"
    }

    innerFunction();
}

outerFunction();
