
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



const delay = document.querySelector('[type="number"]');

const form = document.querySelector('form');

const fieldset = document.querySelector('fieldset');

form.addEventListener('submit', () => {
    event.preventDefault();
const promise = new Promise((resolve , reject) => {
 setTimeout(() =>{
   const checkedRadio = document.querySelector('[type="radio"]:checked');
   console.log(checkedRadio.value);
   if(checkedRadio.value == 'fulfilled'){
    resolve(`Fullfield promise in ${delay.value} ms`);
   }else{
    reject(`Rejected promise in ${delay.value} ms`);
   }
} , delay.value);
});

promise.then(value => {
         iziToast.show({
      message: `${value}`,
      color: 'green'
});
     })
       .catch(error =>{
        iziToast.show({
      message: `${error}`,
      color: 'red'
});
       })


});