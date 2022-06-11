const parseCount = function (params) {
    let count = Number.parseInt(params);

    if (isNaN(count)) {
        throw new Error("Невалидное значение");
    } else {
        return count
    }
};

const validateCount = function (counts) {
    try {
        return parseCount(counts)
    } catch (err) {
        return err
    }
};

class Triangle {
    constructor(a, b, c) {
        if ((a + b) < c ||
            (a + c) < b ||
            (c + b) < a) {
            throw new Error("Треугольник с такими сторонами не существует")
        } else {
            this.a = a;
            this.b = b;
            this.c = c
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c
    }

    getArea() {
        let p = this.getPerimeter() / 2;
        let area = Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
        return area
    }
}

const getTriangle = function (a, b, c) {
    try {
        return new Triangle(a, b, c)
    } catch (error) {
        return {
            getArea() {
                return ("Ошибка! Треугольник не существует")
            },

            getPerimeter() {
                return ("Ошибка! Треугольник не существует")
            }
        }
    }
}