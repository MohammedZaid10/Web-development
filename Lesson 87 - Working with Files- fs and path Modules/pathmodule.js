import path from 'path'

console.log(path);

let myPath = "C:\\Users\\zaidd\\OneDrive\\Desktop\\Learning\\Web development\\Web-development\\Lesson 87 - Working with Files- fs and path Modules\\harry2.txt"

console.log(path.dirname(myPath));
console.log(path.basename(myPath));

console.log(path.join("C://", "programs\\harry3.txt"));
