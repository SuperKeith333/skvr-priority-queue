# Priority Queue Library
A Library that only add a priority queue to js

To use the library first import it
```
const { PriorityQueue } = require("skvr-prioity-queue");
```

Then add a Priority Queue object
```
let priorityQueue = new PriorityQueue();
```

To add an item to the queue
```
priorityQueue.push(one);
```

To get the top item 
```
priorityQueue.pop();
```

To peek the top item 
```
priorityQueue.top();
```

To check if the queue is empty
```
priorityQueue.isEmpty();
```

To set heap function
```
function maxHeap(a, b) {
    return a.height > b.height;
}


priorityQueue.setHeapFunc(maxHeap);
```

