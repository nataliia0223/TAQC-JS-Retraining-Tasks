class Circle {
    constructor(center, radius) {
        this.center = { x: center.x, y: center.y };
        this.radius = radius;
    }

    getLength() {
        return 2 * Math.PI * this.radius;
    }

    static getLengthFromRadius(radius) {
        return 2 * Math.PI * radius;
    }

    getCopy() {
        return new Circle({ x: this.center.x, y: this.center.y }, this.radius);
    }

    static createCircle(x, y, r) {
        return new Circle({ x, y }, r);
    }

    checkPointInside(point) {
        const distanceSquared = Math.pow(point.x - this.center.x, 2) + Math.pow(point.y - this.center.y, 2);
        return distanceSquared <= Math.pow(this.radius, 2);
    }

    toString() {
        return `Circle with center (${this.center.x}, ${this.center.y}) and radius ${this.radius}`;
    }
}


