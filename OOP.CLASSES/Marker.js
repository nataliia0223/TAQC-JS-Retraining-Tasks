class Marker {
    color;
    ink;

    constructor(color) {
        this.color = color;
        this.ink = 100; 
    }

    get color() {
        return this.color;
    }

    get ink() {
        return this.ink;
    }

    print(text) {
        for (const char of text) {
            if (this.ink >= 10 || char === ' ') {
                console.log(char);
                if (char !== ' ') {
                    this.ink -= 10;
                }
            } else {
                console.log('No ink!');
                break;
            }
        }
    }
}

class RefillableMarker extends Marker {
    refill() {
        this.ink = 100; 
    }
}

const marker = new Marker('blue');
console.log(`Color: ${marker.color}`);
console.log(`Ink Level: ${marker.ink}%`);
marker.print('Hi!');
console.log(`Ink Level after printing: ${marker.ink}%`);

const refillableMarker = new RefillableMarker('green');
console.log(`Refillable Color: ${refillableMarker.color}`);
console.log(`Ink Level: ${refillableMarker.ink}%`);
refillableMarker.print('Water!');
console.log(`Ink Level after printing: ${refillableMarker.ink}%`);

refillableMarker.refill();
console.log(`Refill: ${refillableMarker.ink}%`);
