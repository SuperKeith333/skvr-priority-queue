export class PriorityQueue {
    constructor() {
        this.data = [];
        this.priorityFunc = this.minHeap;
    }

    push(item) {
        this.data.push(item);
        let index = this.data.length - 1;
        while (index > 0 && this.priorityFunc(this.data[index], this.data[index - 1])) {
            [this.data[index], this.data[index - 1]] = [this.data[index - 1], this.data[index]];
            index -= 1;
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
        this.priorityFunc = func;
    }

    minHeap(a, b) {
        return a < b;
    }
};