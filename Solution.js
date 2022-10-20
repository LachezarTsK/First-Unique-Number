
/*
 JS Set: insertion order is preserved when only unique values are added. 
 developer.mozilla.org
 */
class FirstUnique {

    /**
     * @param {number[]} inputIntegers
     */
    constructor(inputIntegers) {
        this.NO_UNIQUE_INTEGERS = -1;
        this.seenValues = new Set();// Set<number>
        this.uniqueValues = new Set();//Set<number>

        for (let value of inputIntegers) {
            if (!this.seenValues.has(value)) {
                this.seenValues.add(value);
                this.uniqueValues.add(value);
            } else {
                this.uniqueValues.delete(value);
            }
        }
    }

    /**
     * @return {number}
     */
    showFirstUnique() {
        let [firstUnique] = this.uniqueValues;
        return firstUnique !== undefined ? firstUnique : this.NO_UNIQUE_INTEGERS;
    }

    /** 
     * @param {number} value
     * @return {void}
     */
    add(value) {
        if (!this.seenValues.has(value)) {
            this.seenValues.add(value);
            this.uniqueValues.add(value);
        } else {
            this.uniqueValues.delete(value);
        }
    }
}
