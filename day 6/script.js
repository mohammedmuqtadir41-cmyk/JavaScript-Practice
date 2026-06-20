// let student = {
//     name: "John",
//     age: 20,
//     grade: "A"
// }

// console.log(student.name); // Output: John
// student.city = "Hyderabad"; 
// student.section = "A";
// console.log(student);
// delete student.age;
// console.log(student);

// let car = {brand: "Honda"};
// car["model"]= "Honda Civic";
// car["year"] = "2022";
// console.log(car);

// let userDatabase = {
//     user1 : {name: "Alice", age: "A", city: "Austin"},
//     user2: {name: "Bob", grade: "B", city: "Boston"}};
//     console.log(userDatabase.user1.name);
//     console.log(userDatabase.user2.grade);

// let school = {
//     classA: {student:30, teacher: "MR. Smith"},
//     classB: {student:28, teacher: "Muqthadir"}}
//     school.classA.students = 32;
//     school.classB.teacher = "Mr. Johnson";
//     console.log(school.classA.students);
//     console.log(school.classB.teacher);

// let students = [
//     {name: "Alice", age: 20, grade: "A"},
//     {name: "Bob", age: 22, grade: "B"},
//     {name: "Charlie", age: 21, grade: "C"}
// ];  
// console.log(students[0].name);
// console.log(students[1].grade);
// console.log(students[2].age);

// let car = {
//     brand: "Tesla",
//     model: "Model 3",
//     year: 2024,
//     color: "white",
// }

// console.log(car.brand);

// let movie = {
//     title:"Inception",
//     director: "Christopher Nolan",
//     year:2010,
//     rating:8.8,
// }

// console.log(movie.director);
// console.log(movie ["rating"]);

// let student = {
//     name:"John",
//     age:20,
//     grade:"B",
// }

// student.city = "Hyderabad";

// console.log(student.city);
// delete student.age;
// console.log(student);  

// let product = {
//     name:"laptop",
//     price:5000,
// }
// product.price = 4500;
// product.brand = "Dell";
// product.addStock = true;

// console.log(product);

// let classroom = {
// teacher: { name: "Ms. Smith", subject: "Math" },
// student1: { name: "Alice", grade: "A" },
// student2: { name: "Bob", grade: "B+" }
// };

// console.log(classroom.teacher.name);
// console.log(classroom.student1.grade);
// console.log(classroom.student2.name);

// let company = {
//     enginerrring: {employees:40 , manager: "John"},
//     sales: {employees:25,manager:"Sarah"}
// };

// console.log(company.enginerrring.employees)
// console.log(company.sales.manager);
// company.enginerrring.employees=45;
// console.log(company.enginerrring.employees)

// let students = [
//     {name: "Emma", age: 20, grade: "A"},
//     { name: "Liam", age: 21, grade: "B"},
//     { name: "Olivia", age: 19, grade: "A+"}
// ];
// console.log(students[0].name);
// console.log(students[2].grade);
// console.log(students);

// let products = [
//     {id: 101, name: "Phone", price: 30000},
//     {id: 102, name: "Laptop", price: 55000},
//     {id: 103, name: "Tablet", price: 20000}
// ];
// console.log(products[0].name);
// console.log(products[1].price);
// products.push({id: 104, name: "Smartwatch", price: 15000});
// console.log(products);

// let posts = [
//     {username: "tech_guru", content: "Learning JavaScript!", likes: 150},
//     {username: "code_ninja", content: "Arrays are awesome", likes: 200}
// ];

// console.log(posts[0]);
// console.log(posts[1].likes);
// posts[0].likes = 175;
// console.log(posts[0].likes);

// let courses = [
//     {name: "JavaScript", duration: 40, instructor: "John"},
//     {name: "Python", duration: 35, instructor: "Sarah"},
//     {name: "React", duration: 30, instructor: "Mike"}
// ];

// console.log(courses[1].instructor);
// console.log(courses[0].duration);
// courses[2].duration = 32;
// console.log(courses);

// console.log(Math.PI);
// console.log(Math.ceil(7.2));
// console.log(Math.pow(3,4));
// console.log(Math.abs(-100));

// let x=Math.random();
// let n= x*5;
// let m= x*20;

// console.log(x);
// console.log(n);
// console.log(m);

// let x= Math.random();
// let m=x*10;
// let n= Math.floor(m);
// let p= x+n;

// console.log(x);
// console.log(m);
// console.log(n);
// console.log(p);

// let x= Math.random()*10;
// let m= Math.random()*10;
// let n= Math.random()*10;
// console.log(x);
// console.log(m);
// console.log(n);

// let x= Math.floor(Math.random()*100)+1;
// let y=Math.floor(Math.random()*6)+1;
// let z=Math.floor(Math.random()*5)+1;

// console.log(x);
// console.log(y);
// console.log(z);


// let x= Math.floor(Math.random()*51)-10;

// console.log(x);

// let foods = ["Pizza", "Burger", "Pasta", "Sushi"];
// let random = Math.floor(Math.random()*foods.length);
// console.log("Today's Special:",foods[random]);

// let players = [
// { name: "Alice", score: 0 },
// { name: "Bob", score: 0 },
// { name: "Charlie", score: 0 }
// ];

// let dice1 = Math.floor(Math.random()*6)+1;
// let dice2 = Math.floor(Math.random()*6)+1;
// let dice3 = Math.floor(Math.random()*6)+1;

// players[0].score = dice1;
// players[1].score = dice2;
// players[2].score = dice3;


// console.log(players[0].name,players[0].score);
// console.log(players[1].name,players[1].score);
// console.log(players[2].name,players[2].score);

// let game = {
// player1: { name: "Alice", health: 100, damage: 0 },
// player2: { name: "Bob", health: 100, damage: 0 }
// };

// game.player1.damage = Math.floor(Math.random()*30)+10;
// game.player2.damage = Math.floor(Math.random()*30)+10;

// console.log(game.player1);
// console.log(game.player2);

// let weather = {
// monday: { temp: 0, humidity: 0 },
// tuesday: { temp: 0, humidity: 0 }
// };

// weather.monday.temp =  Math.floor(Math.random()*16)+20;
// let HumidMonday= Math.floor(Math.random()*41)+40;
// weather.monday.humidity = HumidMonday;
// weather.tuesday.temp = Math.floor(Math.random()*16)+20;
// let HumidTuesday =  Math.floor(Math.random()*41)+40;
// weather.tuesday.humidity = HumidTuesday;

// console.log(weather.monday);
// console.log(weather.tuesday);

// let tickets = [];

// let ticket =tickets.push(Math.floor(Math.random()*10000)+1000);
// let ticket =tickets.push(Math.floor(Math.random()*10000)+1000);
// let ticket =tickets.push(Math.floor(Math.random()*10000)+1000);
// let ticket =tickets.push(Math.floor(Math.random()*10000)+1000);
// let ticket =tickets.push(Math.floor(Math.random()*10000)+1000);

// console.log(tickets);

// let WinningTicket = (Math.floor(Math.random()*10000)+1000);
// console.log(WinningTicket);
