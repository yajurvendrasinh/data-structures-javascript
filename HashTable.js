function HashTable(size) {
	this.bucket = Array(size);
	this.numBucket = this.bucket.length;
}

function HashNode(key, value, next) {
	this.key = key;
	this.value = value;
	this.next = next || null;
}

/*hash function gives you place in where to put in your key*/

HashTable.prototype.hash = function(key) {
	var total = 0;
	for(var i = 0; i < key.length; i++) {
		total += key.charCodeAt(i);
	}

	var bucketIndex = total % this.numBucket; // it will always be < numBucket
	return bucketIndex;
}

/* @property Insert
 * hash the key to identify what index you put the node in
 * handle situation where the bucket at the obtained index is empty
 * handle situation where the bucket at the obtained index is filled - loop to last then
 */
HashTable.prototype.insert = function(key, value) {
	var index = this.hash(key);
	if(!this.bucket[index]) {
		this.bucket[index] = new HashNode(key, value);
	}
	else if (this.bucket[index].key === key) {
		this.bucket[index].value = value;
	}
	else {
		var current = bucket[index];
		while(current.next) {
			if(current.next.key === key) { // in case you are updating the content and not inserting a new one
				current.next.value = value;
				return
			}
			current = current.next;
		}
		current.next = new HashNode(key, value);
	}
}