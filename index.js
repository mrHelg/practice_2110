class Queue {
  constructor(...args) {
    this._head = 0;
    this._tail = 0;
    args.every((item) => this.push(item));
  }

  get size() {
    return this._tail - this._head;
  }

  push(item) {
    this[this._tail] = item;
    this._tail++;
    return this.size;
  }

  unshift() {
    if (this.size) {
      const deItem = this[this._head];
      delete this[this._head++];
      return deItem;
    }
  }
}

const mergeQueues = (q1, q2) => {
  const q3 = new Queue();
  const length = q1.size > q2.size ? q1.size : q2.size;
  for (let i = 0; i < length; i++) {
    const item1 = q1.unshift();
    const item2 = q2.unshift();
    if (item1) {
      q3.push(item1);
    }
    if (item2) {
      q3.push(item2);
    }
  }
  return q3;
};

const queue1 = new Queue(1, 2, 3, 4);
const queue2 = new Queue('a', 'b', 'c', 'd', 'e', 'f', 'g');
const queue3 = mergeQueues(queue1, queue2);
console.log(queue3);
