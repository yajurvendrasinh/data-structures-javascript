/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cacheMap = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cacheMap.has(key)) {
    let currentVal = this.cacheMap.get(key);
    this.cacheMap.delete(key);
    this.cacheMap.set(key, currentVal);
    return this.cacheMap.get(key);
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cacheMap.has(key)) {
    this.cacheMap.delete(key);
  }
  if (this.cacheMap.size === this.capacity) {
    this.cacheMap.delete(this.cacheMap.keys().next().value);
  }
  this.cacheMap.set(key, value);
  return;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
