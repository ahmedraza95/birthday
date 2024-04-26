
let date1 = "d";


// inputForm.addEventListener("submit", (event) => {

//         let final = document.querySelector("#daycount")
        
//         const firstDate = document.getElementById('firstDate').value;
//         const secondDate = document.getElementById('secondDate').value;
        
        
//         const startTimestamp = new Date(firstDate).getTime();
//         const endTimestamp = new Date(secondDate).getTime();
        
        
//         const difference = endTimestamp - startTimestamp;
        
        
//         const differenceInDays = Math.round(difference / (1000 * 60 * 60 * 24));
        
        
//         const dayCountElement = document.getElementById('dayCount');
//         final.innerHTML = `The difference between the dates is ${differenceInDays} days.`;
//     } );


// // inputForm.addEventListener("submit", (event) => {
// //   event.preventDefault();
//         const firstDate = document.getElementById('firstDate').value;
//         const secondDate = document.getElementById('secondDate').value;
        
        
//         const startTimestamp = new Date(2/23/2024).getTime();
//         console.log(startTimestamp);

//         const endTimestamp = new Date(secondDate).getTime();
        
        
//         const difference = endTimestamp - startTimestamp;
        
        
//         const differenceInDays = Math.round(difference / (1000 * 60 * 60 * 24));

//         console.log(differenceInDays);
// // })














inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    setInterval(() => {
    const secondDate = document.getElementById('secondDate').value;
    const startTimestamp = new Date().getTime();
    const endTimestamp = new Date(secondDate).getTime();
    const difference = endTimestamp - startTimestamp; 
    let secondPrint = document.querySelector("#dayCount");
    secondPrint.innerHTML = "";



    const differenceInDays = Math.round(difference / (1000 * 60 * 60 * 24));
            

        let hors = Math.floor(difference / (1000 * 60 * 60));
        hors = hors - 5; 
        // // console.log(hors);
    
        let minutes = Math.floor((difference % (1000 *60 * 60)) / (1000 * 60));
        // // console.log(minutes);

        let seconds = Math.floor((difference % (1000 * 60)) / 1000);
        secondPrint.innerHTML = `${differenceInDays}  ${hors} : ${minutes} : ${seconds}`;
        
    },1000)
})

// let date = new Date().getMilliseconds();
// let date4 = new Date().getMilliseconds();

// date4 = Math.floor(date / (1000 * 60 * 60))
// function converTime(date) {
//     let hours = Math.floor(date / (1000 * 60 * 60))
//     // console.log(hours);
//     return hours;
// }
// // console.log(converTime());
// let converted = converTime(5000);
// console.log(converted);

// // console.log(hours);

 