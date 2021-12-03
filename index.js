

const doubler = (items) =>{

    let newArray = [];

    for (let index =0; index < items.length; index++) {
        newArray.push(items[index]);
        newArray.push(items[index]);
    }
    return newArray;
}

console.log(doubler([1,2,3]));







const identifier = (elements) =>{

    let newSet = [];

    for (count =0; count < elements.length; count++){
        
        
        let alreadyExist = newSet.includes(elements[count]);
        console.log(alreadyExist);
        if (alreadyExist == 0){
            newSet.push(elements[count]);;
        }
        
    }
    return newSet;
}

console.log(identifier([2,5,6,7,2,5,6,4,1]));
