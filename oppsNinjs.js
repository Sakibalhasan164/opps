//object litarals
const userOne={
    name:"sakib hasan",
    password:"djfkdjjiediuauj",

    login(){
        console.log(`${this.name} has logged in`);
    },
    logOut(){
        console.log(`${this.name} has loged out`);
    }
}
 

userOne["password"]="updated"
console.log(userOne);


//DOM
const inputFelid=document.getElementById("input")
const btn=document.getElementById("btn")

btn.addEventListener("click",()=>{

const SocketId="this is a socket id"
let theValue=inputFelid.value
userOne[theValue]=SocketId
console.log(userOne);

})