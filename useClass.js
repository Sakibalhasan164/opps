//this is a user Class
class User{
    constructor(name,password){
        this.name=name,
        this.password=password
    }
   //methods
   login(){
       console.log(`${this.name}has logged in!!..Welcome ${this.name}`);
   }
   logOut(){
       console.log(`${this.name} has logged out`);
   }
}


const userOne=new User("sakib","thisIsPassowrd")
const user2=new User("jkdjkj","jkdjkj's passowrd")
//inheritance
class ActiveUsers extends User{
    constructor(name,password,active){
     super(name,password)
     this.active=active
    }
    isActive(){
        console.log(`${this.name} is active NOW!`);
    }
   //giving the ability to delete a user
   deletUser(user){
   users=users.filter(u=>{
       return u.name !=user.name
   })
   }

}

const activeUser1=new ActiveUsers("active name","this is the password",true)
let users=[userOne,user2]