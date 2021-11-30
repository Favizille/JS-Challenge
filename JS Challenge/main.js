//Question 3
//OUTPUTTING EVEN NUMBERS FROM 2 TO 20
 for ( num = 0; num <= 30 ; num+=2){
    alert(num);
 }

 //Question 4
 for (let i=0; i< 10; i++){
     alert (`number js ${i}`);
 }

//REWITTIEN IN WHILE LOOP
 let i = 0;
 while (i < 10){
     i++
     alert(`number js ${i}`);
 }


//Question 5
//PROMPTING NUMBERS GREATER THAN 500 USING A WHILE LOOP
num = prompt("Enter a number greater than 500?")
while (num >= 0 ){
    if (num > 500){
        alert(num + ' is greater than 500')
    }else{
        for(num= 0; num < 500;){
            alert('Number is not greater than 500')
            num =prompt("Enter a number greater than 500?"); 
        } 
    }
    if (num > 500){
        alert(num + ' is greater than 500')
    }
    break;
}



// Question 6
//OUTPUT PRIME NUMBERS
let num = 10;
primeNum:
for (i=2 ; i <= num; i++){
    for( den=2; den < i; den++){
        if(i % den == 0) continue primeNum;
    }
    alert(i + ' is a prime number')
}