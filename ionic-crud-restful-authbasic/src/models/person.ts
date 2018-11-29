export class Person {
    id: number;
    name: string;
    age: number;
    constructor(values: Object = {}) {
         Object.assign(this, values);
    }
 }