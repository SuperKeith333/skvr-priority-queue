export class PriorityQueue {
    constructor() {
        this.data = [];
        this.priorityFunc = this.minHeap;
    }

    push(item) {
        this.data.push(item);
        this.fizzle(this.data.indexOf(item));
    }

    fizzle(index) {
        if (index > 0) {
            while (this.priorityFunc(this.data[index], this.data[index - 1])) {
                let item = this.data[index]
                this.data.splice(index, 1);
                this.data.splice(index - 1, 0, item)

                index -= 1;
                
                if (index <= 0)
                    break;
            }
        }
    }
    
    pop() {
        return this.data.shift();
    }

    top() {
        return this.data[0];
    }

    isEmpty() {
        return this.data === 0;
    }

    setHeapFunc(func) {
        this.priorityFunc = func
    }

    minHeap(a, b) {
        return a < b;
    }
};