const buf = Buffer.from('Hey!')


console.log(buf[0]) //72
console.log(buf[1]) //101
console.log(buf[2]) //121
console.log(buf.toString())

/* buffer created with alloc will be initialized with zeroes 
   buffer created by allocunsafe will be ininitialized */
const bufs=Buffer.alloc(1024);
const ab=Buffer.allocUnsafe(1024);

//lenth of a buffer
console.log(buf.length);


//to iterate over content of a buffer
for(const item of buf){
    console.log(item);  //72 101 121 33
};


//changing content of a buffer
const buff=Buffer.alloc(4);
buff.write('helly');

//set content in th buffer
buf[1]=111  //0 in utf8
console.log(buf.toString());  //Hoy



//slice a buffer= to create a partial visulaization of a buffer we use slice 
//slice is not a copy

buf.subarray(0).toString();  //Hey
const slice=buf.subarray(0,2)
console.log(slice.toString());  //He
buf[1]=111
console.log(slice.toString())  //Ho



//to copy a buffer we use set()
const bufCopy=Buffer.alloc(4);
bufCopy.set(buf);


//or  
const Buff=Buffer.from('Hello?');
const bufcopy=Buffer.from('Mooo');
bufcopy.set(Buff.subarray(1,3),1);
bufcopy.toString();