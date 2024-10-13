function sort(width, height, length, mass) {

    for (const arg of [width, height, length, mass]) {
        if (typeof arg !== 'number') {
            throw new Error('All inputs must be numbers');
        }
        if (arg <= 0) {
            throw new Error('Dimensions and mass must be positive values');
        }
    }

    const volume = width * height * length;

    const isBulky = volume >= 1000000 || Math.max(width, height, length) >= 150;

    const isHeavy = mass >= 20;

    if (isBulky && isHeavy) {
        return 'REJECTED';
    }

    if (isBulky || isHeavy) {
        return 'SPECIAL';
    }

    return 'STANDARD';
}

export { sort };
