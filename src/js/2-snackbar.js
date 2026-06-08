
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



const delay = document.querySelector('[type="number"]');

const form = document.querySelector('form');

const fieldset = document.querySelector('fieldset');

form.addEventListener('submit', (event) => {
    event.preventDefault();

   const delayInput = form.elements.delay;
   const stateInput = form.elements.state;

   const delay = Number(delayInput.value);
   const state = stateInput.value;

const promise = new Promise((resolve , reject) => {
 setTimeout(() =>{
   console.log(state);
   if(state == 'fulfilled'){
    resolve(delay);
   }else{
    reject(delay);
   }
} , delay);
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