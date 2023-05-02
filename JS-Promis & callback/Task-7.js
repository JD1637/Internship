//object passing in promise callback function method is used
// var location1 = {venue: "Rajkot" , Time: "8:00 a.m."};
// var location2 = {venue: "Ahemadabad" , Time: "10:00 a.m."};
// var location3 = {venue: "Baroda" , Time: "12:00 p.m."};

// function getvalue(){
//     sname = document.querySelector('#community').value;
//     function community(){ 
//         return new Promise(function community(resolve,reject){
//             if(sname=="HTML"){
//                 l1();
//                 resolve("successfully assigned");
//             }
//             else if(sname=="CSS"){
//                 l2();
//                 resolve("successfully assigned");
//             }
//             else if(sname=="JS"){
//                 l3();
//                 resolve("successfully assigned");
//             }
//             else{
//                 reject("No community selected");
//             }
//         });
//     }
//     community().then(function(message){
//         console.log(message);
//     }).catch(function(error){
//         console.log(error);
//     })
// }
// function l1(){
//     console.log(location1.venue);
//     console.log(location1.Time);
// }
// function l2(){
//     console.log(location2.venue);
//     console.log(location2.Time);
// }
// function l3(){
//     console.log(location3.venue);
//     console.log(location3.Time);
// }

//Promise all method use
let Promise1 = new Promise(function (resolve,reject){
    setTimeout(()=>{
        resolve("HTML community is assigned");
    },1000)
})
let Promise2 = new Promise(function (resolve,reject){
    setTimeout(()=>{
        resolve("CSS community is assigned");
    },2000)
})
let Promise3 = new Promise(function (resolve,reject){
    setTimeout(()=>{
        resolve("JS community is assigned");
    },3000)
})
Promise.all([Promise1,Promise2,Promise3]).then(console.log);  //Prints array in console
//Array destructuring
// .then((result)=>{
    // let [a1,a2,a3] = result;
    // console.log(a1);
    // console.log(a2);
    // console.log(a3);
// });