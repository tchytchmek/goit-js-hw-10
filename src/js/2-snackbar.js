
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



const delay = document.querySelector('[type="number"]');

const form = document.querySelector('form');

const fieldset = document.querySelector('fieldset');

form.addEventListener('submit', (event) => {
    event.preventDefault();
const promise = new Promise((resolve , reject) => {
 setTimeout(() =>{
   const checkedRadio = document.querySelector('[type="radio"]:checked');
   console.log(checkedRadio.value);
   if(checkedRadio.value == 'fulfilled'){
    resolve(delay.value);
   }else{
    reject(delay.value);
   }
} , delay.value);
});

promise.then(value => {
         iziToast.show({
      message: `Fulfilled promise in ${value}ms`,
      color: 'green'
});
     })
       .catch(error =>{
        iziToast.show({
      message: `Rejected promise in ${error}ms`,
      color: 'red'
});
       })


});