'use strict';

class Rectangle {
    constructor(height,width) {
        this.height = height;
        this.width = width;
    }

    claclArea() {
        return this.height * this.width;
    }
}

class ColorredRectangleWithText extends Rectangle {
    constructor(height,width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColorredRectangleWithText(25,10,'Hello World', 'red');

div.showMyProps();
console.log(div.claclArea());

const square = new Rectangle(10,10);
const log = new Rectangle(20,100);

console.log(log.claclArea());
console.log(square.claclArea());