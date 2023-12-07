function calcRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number') {
        throw new Error('Width or/and height are not numbers');
    }

    return width * height;
}

try {   
    console.log(calcRectangleArea('5', 8));
} catch (error) {
    console.error(error.message);
}
