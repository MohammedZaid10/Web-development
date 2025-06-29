use("CrudDB")

// console.log(db);

// CREATE

// db.createCollection("Courses")

// db.Courses.insertOne({
//     name: "Zaid is web dev",
//     price : 0,
//     assignments : 12,
//     projects : 17
// })

// db.Courses.insertOne({
//     name: "Harrys web dev free course",
//     price: 0,
//     assignments: 12,
//     projects: 45
// })

// db.Courses.insertMany([
//     {
//       "name": "Python Masterclass",
//       "price": 0,
//       "assignments": 10,
//       "projects": 30
//     },
//     {
//       "name": "JavaScript Basics",
//       "price": 0,
//       "assignments": 8,
//       "projects": 20
//     },
//     {
//       "name": "C# for Beginners",
//       "price": 0,
//       "assignments": 15,
//       "projects": 40
//     },
//     {
//       "name": "Web Development Fundamentals",
//       "price": 0,
//       "assignments": 12,
//       "projects": 35
//     },
//     {
//       "name": "Java Programming Essentials",
//       "price": 0,
//       "assignments": 14,
//       "projects": 38
//     },
//     {
//       "name": "ReactJS Crash Course",
//       "price": 0,
//       "assignments": 10,
//       "projects": 25
//     },
//     {
//       "name": "SQL Simplified",
//       "price": 0,
//       "assignments": 12,
//       "projects": 30
//     },
//     {
//       "name": "Responsive Web Design",
//       "price": 0,
//       "assignments": 10,
//       "projects": 28
//     },
//     {
//       "name": "Node.js for Beginners",
//       "price": 0,
//       "assignments": 13,
//       "projects": 36
//     },
//     {
//       "name": "Frontend Development with Vue.js",
//       "price": 0,
//       "assignments": 11,
//       "projects": 32
//     }
//   ]
//   )

// READ

// let a = db.Courses.find({price: 0})
// console.log(a)

// console.log(a.count());

// console.log(a.toArray());

// let a = db.Courses.findOne({price: 0})
// console.log(a) 
// no need to give a.toArray as we are trying to read only the first element using findOne

// UPDATE

// Dont use update, use updateone or update many as update is being depreciated

// https://www.mongodb.com/docs/manual/reference/method/db.collection.updateone/

// db.Courses.updateOne({price : 0}, {$set:{price : 100}})

// db.Courses.updateMany({price : 0}, {$set:{price : 1000}})

// DELETE

db.Courses.deleteOne({price: 100})
db.Courses.deleteMany({price: 100})

// https://www.mongodb.com/docs/manual/reference/operator/query/