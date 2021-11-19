#!/usr/bin/env node

// yaha hum file package require kir rhe hai 
const fs=require('fs');
// yaha hum path package reqire kr rhe hai ye help krega path ko find krne mai
const path=require("path");
// yah hum input lene ke liye process.argv ka use karenge
const input =process.argv.slice(2);
// slice isliye use kr rhe hai kyo ki file ko run krne ke liye node filename likhna padta hai 
// or ye array return krta hai

// parts import kr rhe hai

const Help=require("./controller/Help")
const organize=require("./controller/Organize")
const TRee =require('./controller/Tree')
const commit =input[0];
// yeh first index ki value dega 
const dir =input[1];
// ye 2nd time ki value dega jisme hum user se value lenge 

// console.log(input);
// yaha hum switch condition ka use karenge
switch(commit){
    case "tree":TRee(dir)
        break;
    case "organize":organize(dir)
        break;
    case "help":Help()
        break;
    default:console.log("please enter the correct key ");
    break;
}




