let userName = prompt("Enter Your Full Name!");
let nameTop = document.querySelector(".name");
nameTop.innerHTML = "";
nameTop.innerHTML = `Hello, ${userName.toUpperCase()} 👋👋🎉`;
inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    setInterval(() => {
    let secondDate = document.getElementById('secondDate').value;
    const startTimestamp = new Date().getTime();
    let getFullYear = new Date(secondDate).getFullYear();
    let getFullMonth = new Date(secondDate).getMonth() + 1;
    let getFullDate = new Date(secondDate).getDate();
    let getMonth = new Date(secondDate).getTime();
    let yearsToday = new Date().getFullYear();

    let userYear = new Date().getFullYear() - getFullYear;
    let yearnow = userYear + getFullYear;
    let userMonth = getFullMonth ;
    let userDate = getFullDate ;
    
    let finals = "";
    let monthToday = new Date().getMonth() + 1;
    let monthDate = new Date().getDate();

    let Age = document.querySelector("#Age");


    if (userMonth < monthToday){
        Age.innerHTML =  `You Are ${userYear} Years old `;

    }   else if (userMonth === monthToday && getFullDate < monthDate ){
        Age.innerHTML = `You Are ${userYear} Years old `;

    }
    else {
        Age.innerHTML = `You Are ${userYear - 1} Years old `;
    }



    if (getFullMonth < monthToday) {
         finals = `${userMonth}/${userDate}/${yearsToday + 1  }`;
         let converter = new Date(finals).getTime();
        let sum =converter -startTimestamp  ;

        let secondPrint = document.querySelector("#dayCount");
        secondPrint.innerHTML = "";

        sum = Math.abs(sum);
        let differenceInDays = Math.round(sum / (1000 * 60 * 60 * 24));
        differenceInDays = differenceInDays;

        let hors = Math.floor(sum / (1000 * 60 * 60));
        let minutes = Math.floor((sum % (1000 *60 * 60)) / (1000 * 60));
        let seconds = Math.floor((sum % (1000 * 60)) / 1000);
        secondPrint.innerHTML = `Days = ${differenceInDays}</br> Hours = ${hors} </br> Minutes = ${minutes} </br> Seconds = ${seconds}s  Left`;
    
        }   else if (getFullMonth === monthToday && monthDate > getFullDate) {
        finals = `${userMonth}/${userDate}/${yearsToday + 1}`;
        let converter = new Date(finals).getTime();
        let sum =converter -startTimestamp  ;

        let secondPrint = document.querySelector("#dayCount");
        secondPrint.innerHTML = "";

        sum = Math.abs(sum);
        let differenceInDays = Math.round(sum / (1000 * 60 * 60 * 24));
        differenceInDays = differenceInDays;

        let hors = Math.floor(sum / (1000 * 60 * 60));
        let minutes = Math.floor((sum % (1000 *60 * 60)) / (1000 * 60));
        let seconds = Math.floor((sum % (1000 * 60)) / 1000);
        secondPrint.innerHTML = `Days = ${differenceInDays}</br> Hours = ${hors} </br> Minutes = ${minutes} </br> Seconds = ${seconds}s  Left`;
    
    }  else if (getFullDate === monthDate) {
        let secondPrint = document.querySelector("#dayCount");
        secondPrint.innerHTML = `hello`;

    
    }

     else {
        finals = `${userMonth}/${userDate}/${yearsToday}`;
        let converter = new Date(finals).getTime();
        let sum =converter -startTimestamp  ;

        let secondPrint = document.querySelector("#dayCount");
        secondPrint.innerHTML = "";

        sum = Math.abs(sum);
        let differenceInDays = Math.round(sum / (1000 * 60 * 60 * 24));
        differenceInDays = differenceInDays;

        let hors = Math.floor(sum / (1000 * 60 * 60));
        let minutes = Math.floor((sum % (1000 *60 * 60)) / (1000 * 60));
        let seconds = Math.floor((sum % (1000 * 60)) / 1000);
        secondPrint.innerHTML = `Days = ${differenceInDays}</br> Hours = ${hors} </br> Minutes = ${minutes} </br> Seconds = ${seconds}s  Left`;
    }

    // let converter = new Date(finals).getTime();
    // let sum =converter -startTimestamp  ;
    // console.log(sum);

    // let secondPrint = document.querySelector("#dayCount");
    // secondPrint.innerHTML = "";

    // sum = Math.abs(sum);
    // console.log(sum);
    // let differenceInDays = Math.round(sum / (1000 * 60 * 60 * 24));
    // differenceInDays = differenceInDays -1;



    










        // let hors = Math.floor(sum / (1000 * 60 * 60));
    
        // let minutes = Math.floor((sum % (1000 *60 * 60)) / (1000 * 60));

        // let seconds = Math.floor((sum % (1000 * 60)) / 1000);
        // console.log(seconds);
        // secondPrint.innerHTML = `${differenceInDays}  ${hors} : ${minutes} : ${seconds}`;

        














    },1000)
})

