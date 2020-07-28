class Animal {
    static type = 'ANIMAL';

    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.hasTail = options.hasTail;
    }
    voice() {
        console.log('I am an animal');
    }
}

const animal = new Animal({
    name: 'Animal',
    age: 5,
    hasTail: true,
});

console.log(animal);
animal.voice();
console.log(Animal.type);

// ****************************

class Cat extends Animal {
    static type = 'CAT';

    constructor({color, ...options}){
        super(options);
        this.color = color;
    }

    voice() {
        super.voice();
        console.log('I am a cat');
    }

    get ageInfo() {
        return this.age * 7;
    }

    set ageInfo(value) {
        this.age = value;
        console.log('new age = ', this.age, this.ageInfo);
    }
}

const cat = new Cat({
    name: 'Cat',
    age: 7,
    hasTail: true,
    color: 'black',
});

console.log('cat:', cat);
console.log('cat.type:', Cat.type);
cat.voice();
console.log(cat.ageInfo);
cat.ageInfo = 6;

// ******** example

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector);
    }

    hide() {
        this.$el.style.display = 'none';
    }

    show() {
        this.$el.style.display = 'block';
    }

    toggle() {
        this.$el.class
    }
}

class Box extends Component {
    constructor({selector, ...options}) {
        super(selector);
        this.$el.style.width = this.$el.style.height = `${options.size}px`;
        this.$el.style.background = options.color;
    }
}

const box1 = new Box({
    selector: "#box1",
    size: 100,
    color: 'red',
});

const box2 = new Box({
    selector: "#box2",
    size: 200,
    color: 'blue',
});

class Circle extends Box {
    constructor(options) {
        super(options);
        this.$el.style.borderRadius = '50%';
    }
}

const circle = new Circle({
    selector: "#circle",
    size: 150,
    color: 'green',
});

setTimeout(() => {
    box2.hide();
}, 1500);

setTimeout(() => {
    box1.hide();
    box2.show();
    circle.hide();
}, 3000);

setTimeout(() => {
    box1.show();
    circle.show();
}, 4500);