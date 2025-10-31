console.log('Working!!')

// let awesomeName: string = 'Alex'
//
// let amount: number = 20
// // amount = 'pants'
//
// let isAwesome: boolean = true
// isAwesome = true;
//
// // PRACTICE STRING ============================================================
// let myName: string = 'olek'
// // console.log(myName.toUpperCase())
//
// let myNumber: number = 1;
// // console.log(myNumber)
//
// let myBoolean: boolean = true
// // myBoolean ? console.log('true') : console.log('false')
//
// let orderStarus: 'processing' | 'shipped' | 'delivered';
// orderStarus = 'processing'
// orderStarus = 'shipped'
//
// let discount: number | string;
// discount = 20;
// discount = '20%'

//// // PRACTICE ARRAY & OBJECTS =================================================
// let prices: number[] = [1, 2, 3]
// prices.push(1)
// let array: (string | boolean)[] = ['olek', true]
// let temperatures: number[] = [1, 2, 3]
// // temperatures.push('olek')
// let colors: string[] = ['red', 'orange']
// // colors.push(true)
//
// let mixedArray: (string | number)[] = ['olek', 1, 3]
// // mixedArray.push(true)
// []
// let car: { brand: string; year: number } = {brand: 'toyota', year: 2020}
// let car1: { brand: string; year: number } = {brand: 'audi', year: 2022}

// let book = {title: 'book', cost: 20}
// let pen = {title: 'pen', cost: 30}
// let notebook = {title: 'book'}]
//
// let items: { readonly title: string; cost?: number }[] = [book, pen, notebook]
// // items[0].title = 'new'
// let bike:{brand:string; year:number} = {brand:'Trek' , year: 2025}
// // bike.year = '2025'
// let laptop:{brand:string ; year?:number} = {brand:'toshiba'}
//
// let products:{title:string;price?:number}[] = [{title:'apple'}]

//// // PRACTICE FUNCTIONS =================================================
// function sayHi(name: string) {
//     console.log(`Hello there ${name.toUpperCase()}`)
// }
// sayHi('olek')
// // sayHi(3)

// function calculateDiscount(price: number): number {
//     return price * 0.9
// }
//
// const finalPrice = calculateDiscount(200)
//
// let names: string[] = ['olek', 'liza']
//
// function isInArray(name: string): boolean {
//     return names.includes(name)
// }
//
// isInArray('olek') ? console.log('yes') : console.log('no')

//// // PRACTICE PARAMETERS =================================================
//
// function calculatePrice(price: number, discount?: number) {
//     return price - (discount || 0)
// }
//
// let priceAfterDiscoun = calculatePrice(10, 20);
//
// function calculateScore(initialScore: number, penaltyPoints: number = 0): number {
//     return initialScore - penaltyPoints
// }
//
// let scoreAfterPenalty = calculateScore(100, 20)
// let scoreWithoutrPenalty = calculateScore(100)

// function sum(message: string, ...numbers: number[]): string {
//     const doubled = numbers.map((num) => num * 2)
//
//     let total = numbers.reduce((acc, curr) => {
//         return acc + curr
//     }, 0)
//
//     return `${message} ${total}`
//
// }
//
// let result = sum('The total is :', 1, 2, 3, 4, 5)
// console.log(result)

// function logMessaage(message: string) {
//     console.log(message)
// }
//
// logMessaage('hello')

// function processInput(input: string | number): void {
//     if (typeof input === 'number') {
//         console.log(input * 2)
//     } else {
//         console.log(input.toUpperCase())
//     }
// }
//
// processInput(10); // Output: 20
// processInput('Hello'); // Output: HELLO

//// // PRACTICE OBJECTS AS PARAMETERS =================================================
//
// function createEmployee({id}: { id: number }): { id: number; isActive: boolean } {
//     return {id, isActive: id % 2 === 0}
// }
//
// const first = createEmployee({id: 1})
// const second = createEmployee({id: 2})

// console.log(first, second)


// function createStudent(student: { id: number; name: string }): void {
//     console.log(student.name)
// }
//
// const newStudent = {
//     id: 1, name: 'Olek'
// }
//
// createStudent(newStudent)
// createStudent({id: 1, name: 'Olek2', email: 'bobo'})
//
// function processData(input: string | number, config: { reverse: boolean } = {reverse: false}): string | number {
//     if (typeof input === 'number') {
//         return input * input
//     } else {
//         if (config.reverse) {
//             return input.toUpperCase().split('').reverse().join('')
//         } else {
//             return input.toLowerCase()
//         }
//
//     }
// }
//
// processData(4)
//// // PRACTICE ALIAS =================================================
//
// type User = { id: number; name: string; isActive: boolean }
//
// const john: User = {
//     id: 1,
//     name: 'john',
//     isActive: true,
// };
// const susan: User = {
//     id: 1,
//     name: 'susan',
//     isActive: false,
// };
//
// function createUser(user: User): {
//     id: number;
//     name: string;
//     isActive: boolean;
// } {
//     console.log(`Hello there ${user.name.toUpperCase()} !!!`);
//
//     return user;
// }

// type Employee = {
//     id: number, name: string, department: string
// }
// type Manager = {
//     id: number, name: string, employees: Employee[]
// }
// type Staff = Employee | Manager;
//
// function printStaffDetails(person: Staff) {
//     if ('employees' in person) {
//         console.log(`Tis person is a Manages and has ${person.employees.length}`)
//     } else {
//         console.log(`This preson is a Employee and belongs to ${person.department}`)
//     }
// }
//
// printStaffDetails({id: 4, name: 'olek', employees: [{id: 4, name: 'jan', department: 'police'}]})

//Intersection Types
//
// type Book = {
//     id: number;
//     name: string;
//     price: number
// }
//
// type DiscountedBook = Book & {
//     discount: number
// }
//
// const book1: Book = {
//     id: 1, name: 'aaaa', price: 15
// }
// const book2: Book = {
//     id: 2, name: 'ssss', price: 20
// }
// const discountedBook: DiscountedBook = {
//     id: 2, name: 'ssss', price: 20, discount: 0
// }
//// // PRACTICE INTERFACE =================================================

// interface Book {
//     readonly isbn: number;
//     title: string;
//     author: string;
//     genre?: string;
//     printSomething: (someValue: number) => number;
//
//     printAuthor(): void;
//
//     printTitle(message: string): string;
// }
//
// const deepWork: Book = {
//     isbn: 123,
//     title: 'deep work',
//     author: 'cal newport',
//     genre: 'self-help',
//     printAuthor() {
//         console.log(this.author)
//     },
//     printTitle(message) {
//         return `${this.title} ${message}`
//     },
// //     first option
//     printSomething: function (someValue) {
//         return someValue
//     }
// }
//
// deepWork.printAuthor()
// const result = deepWork.printTitle('is a result ')
// console.log(result)

// interface Computer {
//     readonly id: number,
//     brand: string,
//     ram: number,
//     storage?: number
//
//     upgradeRam(capacity: number): number
// }
//
// let Hp: Computer = {
//     id: 13, brand: 'HP', ram: 10,
//     upgradeRam(capacity) {
//         this.ram = capacity
//         return this.ram
//     }
// }
// console.log(Hp.ram)
// Hp.upgradeRam(12)
// console.log(Hp.ram)
// ====================================
// interface Person {
//     name: string;
//
//     getDetails(): string
// }
//
// interface DodOwner {
//     dogName: string;
//
//     getDogDetails(): string
// }
//
// interface Person {
//     age: number
// }
//
// const person: Person = {
//     name: 'John',
//     age: 23,
//     getDetails() {
//         return `Name: ${this.name} , Age: ${this.age}`
//     }
// }
//
// interface Employee extends Person {
//     employeeid: number
// }
//
// const employee: Employee = {
//     name: 'kane',
//     age: 20,
//     employeeid: 123,
//     getDetails() {
//         return `Name: ${this.name} , Age: ${this.age} , Emoloyee Id :${this.employeeid} `
//     }
// }
//
// // console.log(employee.getDetails())
//
// interface Manager extends Person, DodOwner {
//     managePeople(): void
// }
//
// const manager: Manager = {
//     name: 'bob',
//     age: 35,
//     getDetails() {
//         return `Name: ${this.name} , Age: ${this.age} `
//     },
//     getDogDetails() {
//         return `Name: ${this.dogName}  `
//     },
//     managePeople() {
//         console.log('Managing people')
//     }
// }
// manager.managePeople()
// ====================================
// interface Person {
//     name: string;
// }
//
// interface DogOwner extends Person {
//     dogName: string;
// }
//
// interface Manager extends Person {
//     managePeople(): void;
//
//     delegateTasks(): void;
// }
//
// const employee: Person | DogOwner | Manager = getEmployee();
// console.log(employee);
//
// function getEmployee(): Person | DogOwner | Manager {
//     const random = Math.random();
//
//     if (random < 0.33) {
//         return {
//             name: 'john',
//         };
//     } else if (random < 0.66) {
//         return {
//             name: 'sarah',
//             dogName: 'Rex',
//         };
//     } else {
//         return {
//             name: 'bob',
//             managePeople: () => console.log('Managing people...'),
//             delegateTasks: () => console.log('Delegating tasks...'),
//         };
//     }
// }
//
// function isManager(obj: Person | DogOwner | Manager): obj is Manager {
//     return 'managePeople' in obj;
// }
//
// if (isManager(employee)) {
//     employee.delegateTasks();
// }
//// // PRACTICE TUPLES & ENUMS =================================================