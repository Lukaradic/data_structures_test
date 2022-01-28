import { Queue } from '../components/Queue';

describe('test Queue and its methods', () => {
    let queue;
    beforeEach(() => {
        queue = new Queue();
    })

    it('should push a value', () => {
        expect(queue.enqueue(1)).toBe(1);
        expect(queue.first.value).toBe(1);
        expect(queue.last.value).toBe(1);
        expect(queue.size).toBe(1);
        
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        queue.enqueue(6);

        expect(queue.first.value).toBe(1);
        expect(queue.last.value).toBe(6);
        expect(queue.size).toBe(6);  
    })

    it('should remove the first value', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        queue.enqueue(6);

        expect(queue.dequeue()).toBe(1);
        expect(queue.size).toBe(5);
        
        expect(queue.dequeue()).toBe(2);
        expect(queue.size).toBe(4);

        expect(queue.dequeue()).toBe(3);
        expect(queue.size).toBe(3);
    })
})