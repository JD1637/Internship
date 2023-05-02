function getvalue(){
    sname = document.querySelector('#society').value;
    function medicalCamp(){ 
        return new Promise(function soceity(resolve,reject){
            if(sname=="X"){
                resolve("Blood Donation Camp Allocated");
            }
            else if(sname=="Y"){
                resolve("Health Checkup Camp Allocated");
            }
            else if(sname=="Z"){
                resolve("Polio Vaccination Camp Allocated");
            }
            else{
                reject("No Medical Camp Allocated");
            }
        });
    }
    medicalCamp().then(function(message){
        alert(message);
    }).catch(function(error){
        alert(error);
    })
}

let Promise1 = new Promise(function (resolve,reject){
    setTimeout(()=>{
        console.log("Inform society XXX about Blood Donation Camp");
    },1000)
})
let Promise2 = new Promise(function (resolve,reject){
    setTimeout(()=>{
        console.log("Inform society YYY about Health checkup camp");
    },2000)
})
let Promise3 = new Promise(function (resolve,reject){
    setTimeout(()=>{
        console.log("Inform society zzz about polio vaccination camp");
    },3000)
})
Promise.all([Promise1,Promise2,Promise3]).then(console.log).catch(console.log);


