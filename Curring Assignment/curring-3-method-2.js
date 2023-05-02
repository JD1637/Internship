let obj = [ {"id" : 1 , "class": "one"},
            {"id": 2 , "class": "two"},
            {"id" : 3 , "class": "three"},];

//Filtering with id
function first(arr){
    return (obj.filter((a)=>{
        if(a.id < 3)
            {console.log(a.id);}
        else
            {console.log("No id available")};
    }))
}

//Filtering with class
function second(arr){
    return (obj.filter((b)=>{
        if(b.class == "one")
            {console.log(b.class);}
        else
            console.log("No class available");
    }))
}

//curry function generated
function curry(fun){
    return function(arr){
        return fun(arr);
    }
}

// console.log(obj.length);
curry(first)(obj);
curry(second)(obj);


