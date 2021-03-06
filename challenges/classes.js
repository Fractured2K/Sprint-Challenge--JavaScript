// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(cuboidAtt) {
        this.length = cuboidAtt.length;
        this.width = cuboidAtt.width;
        this.height = cuboidAtt.height;
    }

    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

class CubeMaker extends CuboidMaker {
    constructor(cubeAtt) {
        super(cubeAtt);
    }

    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return 6 * this.length * this.width;
    }
}

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
})

const cube = new CubeMaker({
    length: 4,
    width: 4,
    height: 4
})


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

console.log(cube.volume()); // 64
console.log(cube.surfaceArea()); // 96

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
