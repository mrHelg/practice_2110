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

const queue = new Queue(1, 4, 5, 6);
