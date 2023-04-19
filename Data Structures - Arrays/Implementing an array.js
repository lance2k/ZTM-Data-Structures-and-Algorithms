class MyArray {

    constructor(){
        this.length = 0;
        this.data = {};
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }
    shiftItems(index){
        for(let i = index; i<this.length-1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

const arr= new MyArray();
arr.push(3);
arr.push('hi');
arr.push(34);
arr.push(20);
arr.push('hey');
arr.push('welcome');
arr.delete(3);
console.log(arr);