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
//         console.log(`This preson is  Employee and belongs to ${person.department}`)
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

// let person: [string, number] = ['john ', 25]
//
// let date: [number, number, number] = [12, 27, 2001]
//
// function getPerson(): [string, number] {
//     return ['john', 25]
// }

// enum ServerResponseStatus {
//     Success, Error
// }
//
// interface ServerResponse {
//     result: ServerResponseStatus;
//     data: string[];
// }
//
// function getServerResponce(): ServerResponse {
//     return {
//         result: 0,
//         data: ['first']
//     }
// }
//
// const response: ServerResponse = getServerResponce()
// console.log(response)

// enum UserRole {
//     Admin = 'Admin', Manager = 'Manager', Employee = 'Employee'
// }
//
// type User = {
//     id: number, name: string, role: UserRole, contact: [number, string]
// }
//
// function CreateUser(person: User) {
//     return person
// }
//
// const alex: User = {
//     id: 10, name: 'olek', role: UserRole.Admin, contact: [2, '222']
// }
//
// console.log(CreateUser(alex))

//// // PRACTICE ASSERTION =================================================

// let someValue: any = 'this is a string'
// let strlLength: number = (someValue as string).length
//
// type Bird = {
//     name: string
// }
//
// let birdString = '{"name": "Eagle"}';
// let dogString = '{"breed": "Poodle"}';
//
// let birdObject = JSON.parse((birdString))
// let dogObject = JSON.parse((dogString))
//
// let bird = birdObject as Bird;
// let dog = dogObject as Bird;
//
// enum Status {
//     Pending = 'pending', Decline = 'declined '
// }
//
// type User = {
//     name: string, status: Status
// }
//
// // save Status.Pending in the DB as a string
// // retrieve string from the DB
//
// const statusValue = 'pending'
//
// const user: User = {name: 'olek', status: statusValue as Status}

//// // PRACTICE UNKNOWN =================================================

// let unknownValue: unknown;
// unknownValue = 'Hello world'
// unknownValue = [1, 2, 3]
// unknownValue = 12345
//
// if (typeof unknownValue === 'number') {
//     unknownValue.toFixed(2)
// }

// let someValue: never;

//// // PRACTICE NEVER =================================================

// type Theme = 'light' | 'dark'
//
// function checkTheme(theme: Theme): void {
//     if (theme === 'light') {
//         console.log('light theme')
//         return
//     }
//     if (theme === 'dark') {
//         console.log('dark theme')
//         return
//     }
//
// }
//
// enum Color {
//     Red, Blue, Green
// }
//
// function getColorName(color: Color) {
//     switch (color) {
//         case Color.Red :
//             return 'Red'
//         case Color.Blue :
//             return 'Blue'
//         case Color.Green:
//             return 'Green'
//         default:
//             // at build time
//             let unexpextedColor: never = color
//             throw new Error('Unexpexted color')
//     }
// }
//
// console.log(getColorName(Color.Red))
// console.log(getColorName(Color.Blue))
// console.log(getColorName(Color.Green))

//// // PRACTICE TYPEGUARD =================================================

// type ValueType = string | number | boolean;
//
// let value: ValueType;
// const random = Math.random();
// value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true;
//
// function checkValue(value: ValueType): void {
//     if (typeof value === 'string') {
//         console.log(value)
//         return
//     }
//     if (typeof value === 'number') {
//         console.log(value.toFixed(2))
//         return;
//     }
//     console.log(`This is a boolean ${value}`)
// }
//
// checkValue(value)

// ==============

// type Dog = { type: 'dog'; name: string; bark: () => void };
// type Cat = { type: 'cat'; name: string; meow: () => void };
// type Animal = Dog | Cat;

// function makeSound(animal: Animal): void {
//     if ('bark' in animal) {
//         animal.bark()
//     } else {
//         animal.meow()
//     }
// }

// function makeSound(animal: Animal) {
//     if (animal.type === 'dog') {
//         animal.bark()
//     } else {
//         animal.meow()
//     }
// }

// function printLength(str: string | null | undefined): void {
//     if (str) {
//         console.log(str.length)
//     } else {
//         console.log('No string provided')
//     }
// }
//
// printLength(false)


// function checkInput(value: Date | string): void {
//     if (value instanceof Date) {
//         return value.getFullYear().toString()
//
//     } else {
//         return value
//     }
// }
//
// const year = checkInput(new Date());
// const random = checkInput('2020-05-05');
// console.log(year);
// console.log(random);


// type Student = {
//     name: string;
//     study: () => void;
// };
//
// type User = {
//     name: string;
//     login: () => void;
// };
//
// type Person = Student | User;
//
// const randomPerson = (): Person => {
//     return Math.random() > 0.5
//         ? {name: 'john', study: () => console.log('Studying')}
//         : {name: 'mary', login: () => console.log('Logging in')};
// };
//
// const person = randomPerson();
//
// function isStudent(person: Person): person is Student {
//     return (person as Student).study !== undefined
// }
//
// if (isStudent(person)) {
//     person.study();
// } else {
//     person.login();
// }

//// // PRACTICE GENERICS =================================================


// let array1: Array<string> = ['Apple', 'Banana', 'Mango'];
// let array2: Array<number> = [1, 2, 3];
// let array3: Array<boolean> = [true, false, true];
//
// function createString(arg: string): string {
//     return arg
// }
//
// function createNumber(arg: number): number {
//     return arg
// }
//
// function genericFunction<T>(arg: T): T {
//     return arg
// }
//
// const someStringValue = genericFunction<string>('Hello world')
// const someNumberValue = genericFunction<number>(2)
//
// interface GenericInterface<T> {
//     value: T;
//     getValue: () => T
// }
//
// const genericString: GenericInterface<string> = {
//     value: 'hello world',
//     getValue() {
//         return this.value;
//     }
// }
//
// async function someFunc(): Promise<string> {
//     return 'Hello World';
// }
//
// const result = someFunc();
//


// function generateStringArray(length: number, value: string): string[] {
//     let result: string[] = []
//     result = Array(length).fill(value)
//     return result
// }
//
// // console.log(generateStringArray(5, 'hello world'))
//
// function createArray<T>(length: number, value: T): Array<T> {
//     let result: T[] = [];
//     result = Array(length).fill(value);
//     return result;
// }
//
// let arrayStrings = createArray<string>(3, 'hello'); // ["hello", "hello", "hello"]
// let arrayNumbers = createArray<number>(4, 100); // [100, 100, 100, 100]
//
// console.log(arrayStrings);
// console.log(arrayNumbers);

//=======================================
// function pair<T, U>(param1: T, param2: U): [T, U] {
//     return [param1, param2]
// }
//
// let result = pair<number, string>(5, 'hello')
// console.log(result)
//
// function processValue<T extends string | number>(value: T): T {
//     console.log(value)
//     return value;
// }
//
// processValue<string>('hello')
// processValue<number>(12)
// =======================================

// ======================================
// type Car = {
//     brand: string;
//     model: string;
// };
//
// const car: Car = {
//     brand: 'ford',
//     model: 'mustang',
// };
//
// type Product = {
//     name: string;
//     price: number;
// };
//
// const product: Product = {
//     name: 'shoes',
//     price: 1.99,
// };
//
// type Student = {
//     name: string;
//     age: number;
// };
//
// const student: Student = {
//     name: 'peter',
//     age: 20,
// };
//
// function printName<T extends { name: string }>(input: T): void {
//     console.log(input.name)
// }
//
// printName(student)
// printName(product)
// printName(car)

// ======================================
//
// interface StoreData<T = any> {
//     data: T[]
// }
//
// const storeNumbers: StoreData<number> = {
//     data: [1, 2, 3, 4]
// }
//
// const randomStuff: StoreData = {
//     data: ['random', 1]
// }

//================================
//// // PRACTICE DATA =================================================

// import {z} from 'zod'
//
// const tourSchema = z.object({
//     id: z.string(),
//     name: z.string(),
//     info: z.string(),
//     image: z.string(),
//     price: z.string(),
// })
//
// type Tour = z.infer<typeof tourSchema>
//
// // type Tour = {
// //     id: string;
// //     name: string;
// //     info: string;
// //     image: string;
// //     price: number;
// // }
//
// const url = 'https://www.course-api.com/react-tours-project';
//
// async function fetchData(url: string): Promise<Tour[]> {
//     try {
//         const response = await fetch(url)
//         if (!response.ok) {
//             throw new Error(`Http error ! status: ${response.status}`)
//         }
//         const rawData: Tour[] = await response.json()
//         const result = tourSchema.array().safeParse(rawData)
//         if (!result.success) {
//             throw new Error(`Invalid data ${result.error}`)
//         }
//         return result.data
//
//     } catch (error) {
//         const errorMsg = error instanceof Error ? error.message : ' there was an error'
//         console.log(errorMsg)
//         return []
//     }
// }
//
// const tours = await fetchData(url)
// tours.map((tour) => {
//     console.log(tour.name)
// })

//// // PRACTICE FILES =================================================