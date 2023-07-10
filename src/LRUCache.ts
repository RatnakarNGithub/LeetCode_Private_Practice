type LRUNode = {
    key: number;
    value?: unknown;
    prev?: LRUNode;
    next?: LRUNode;
};

export class LRUCache {
    itemMap: Map<number, LRUNode>;
    lruItem?: LRUNode;
    mruItem?: LRUNode;
    capacity: number;
    constructor(capacity: number) {
        this.capacity = capacity;
        this.itemMap = new Map();
        this.lruItem = this.mruItem = undefined;       
    }

    get(key: number) {
        const node = this.itemMap.get(key);
        if (!node) {
            console.log(`Get ${key} = -1`);
            return -1;
        }

        this.unlinkNode(node);
        this.setAsMRU(node);

        console.log(`Get ${key} = ${node.value}`)
        return node.value;
    }

    remove(key: number) {
        const node = this.itemMap.get(key);
        if (!node) return;

        this.unlinkNode(node);
        this.itemMap.delete(key);
    }

    put(key: number, value?: unknown) {
        let node = this.itemMap.get(key);

        if (node) {
            this.get(key);
            node.value = value ?? node.value ?? key;
            return;   
        } 
        
        node = {
            key,
            value
        };

        if (this.itemMap.size === this.capacity) {
            this.remove(this.lruItem!.key);
        }
        this.setAsMRU(node);
        this.itemMap.set(key, node);
        console.log(`Added ${node.key}: ${node.value}`)
    }

    private unlinkNode(node?: LRUNode) {
        if (!node) return;

        const prevNode = node.prev;
        const nextNode = node.next;

        if (this.lruItem === node)
            this.lruItem = nextNode;

        if (this.mruItem === node) 
            this.mruItem = prevNode;

        if (prevNode) prevNode.next = nextNode;
        if (nextNode) nextNode.prev = prevNode;
    }

    private setAsMRU(node: LRUNode) {
        if (this.lruItem === undefined)
            this.lruItem = node;
            
        if (this.mruItem) {
            this.mruItem.next = node;
            node.prev = this.mruItem;
        }
        this.mruItem = node;
        node.next = undefined;
    }
}

function main() {
    const lRUCache = new LRUCache(2);
    lRUCache.put(1, 1); // cache is {1=1}
    lRUCache.put(2, 2); // cache is {1=1, 2=2}
    lRUCache.get(1);    // return 1
    lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
    lRUCache.get(2);    // returns -1 (not found)
    lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
    lRUCache.get(1);    // return -1 (not found)
    lRUCache.get(3);    // return 3
    lRUCache.get(4);    // return 4
}

main();