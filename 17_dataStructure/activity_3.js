// queue

class Queue{
    constructor(){
        this.items = [];
    }
    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
        if(this.isEmpty()){
            console.log('Queue is empty');
            return;
        }
        return this.items.shift();
    }
    front(){
        if(this.isEmpty()){
            console.log('Queue is empty');
            return;
        }
        return this.items[0];
    }


    isEmpty(){
        return this.items.length === 0;
    }
    display(){
        if(this.isEmpty()){
            console.log('Queue is empty');
            return;
        }
        console.log(this.items);
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.display();
console.log(queue.front());
console.log(queue.dequeue())
queue.display();

class PrinterQueue{
    constructor(){
        this.queue = new Queue();
    }

    addPrinterJobs(task){
        console.log('Task added:', task);
        this.queue.enqueue(task);
    }

    processPrinterJobs(){
        console.log('processing printer jobs');
        while(!this.queue.isEmpty()){
            console.log('printing:', this.queue.dequeue());
        }
        console.log('All tasks are completed');
    }

    display(){
        this.queue.display();
    }
}

const printerQueue = new PrinterQueue();
printerQueue.addPrinterJobs('task1');
printerQueue.addPrinterJobs('task2');
printerQueue.addPrinterJobs('task3');
printerQueue.display();
printerQueue.processPrinterJobs();
printerQueue.display();