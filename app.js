class App {
    run() {
        const math = require("./modules/math");

        const a = 5;
        const b = 2;

        console.log(`Hello Ryan Song. add = ${math.add(a, b)}, subtract = ${math.subtract(a,b)}`);
    }
}

new App().run();