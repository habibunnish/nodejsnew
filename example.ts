type user={
    name:string,
    age:number
};
function isadult(user:user):boolean{
    return user.age >=18
}
const justine:user={
    name:'justine',
    age:21
};
// const isJustineAdult: string = isadult(justine,'i shouldnt be here');