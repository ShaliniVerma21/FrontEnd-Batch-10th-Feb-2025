//Example 8: Encapsulation with Static Methods
class MathUtils {
    static #PI = 3.14; // Private static property

    static areaOfCircle(radius) {
        return this.#PI * radius * radius;
    }
}

console.log(MathUtils.areaOfCircle(5)); // 78.5
console.log(MathUtils.areaOfCircle(10)); // 314