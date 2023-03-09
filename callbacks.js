// //callbacks
// document.getElementById('button').addEventListener('click',()=>{

// });

// window.addEventListener('load',()=>{
//     //window loaded

// })
// //callbacks are used everywhere not just in doms events
// setTimeout(()=>{
// console.log('hello');
// },2000);

// // XHR also accepts a callback 
// const xhr=new XMLHttpRequest()
// xhr.onreadystatechange=()=>{
//    if(xhr.readyState===4){
//     xhr.status===200?console.log(xhr.responseText):console.error('error')
//    }
// }
// xhr.open('GET','http://youtube.com');
// xhr.send();

// //handling error 
// fs.readFile('/file.json',(err, data)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     //no error process data
//     console.log(data);
// });

// //callbacks 
// window.addEventListener('load',()=>{
//     document.getElementById('button').addEventListener('click',()=>{
//         setTimeout(()=>{
//             items.forEach(item=>{
//                 console.log("abc");
//                 console.log(item)
//             })
//         },2000)
//     })
// });

  
  setImmediate(() => {
    console.log('immediate');
  });
  setTimeout(() => {
    console.log('timeout');
  }, 0);


