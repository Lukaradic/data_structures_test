import {Stack} from "../components/Stack";

describe('testing stack and its methods', () => {
    let stack;
    beforeEach(() => {
        stack = new Stack();
    })
    it('should push a value', () => {
        stack.push(1);
        expect(stack.first.value).toBe(1);
        expect(stack.last.value).toBe(1);
        expect(stack.length).toBe(1);
        stack.push(2);
        stack.push(3);
        expect(stack.first.value).toBe(3);
        expect(stack.length).toBe(3);
        expect(stack.last.value).toBe(1)

    });
    it('should pop a value', () => {
        expect(stack.length).toBe(0);
        expect(stack.pop()).toBeNull();
        stack.push(1);
        expect(stack.pop()).toBe(1);
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.pop()).toBe(3);
        expect(stack.length).toBe(2);
        expect(stack.pop()).toBe(2);


    });
})