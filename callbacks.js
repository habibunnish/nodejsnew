//callbacks
document.getElementById('button').addEventListener('click',()=>{

});

window.addEventListener('load',()=>{
    //window loaded

})
//callbacks are used everywhere not just in doms events
setTimeout(()=>{
console.log('hello');
},2000);

// XHR also accepts a callback 
const xhr=new XMLHttpRequest()
xhr.onreadystatechange=()=>{
   if(xhr.readyState===4){
    xhr.status===200?console.log(xhr.responseText):console.error('error')
   }
}
xhr.open('GET','http://');
xhr.send()