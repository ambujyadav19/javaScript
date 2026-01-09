class User{
    constructor(username){

        this.username=username
    }

    logMe(){
        console.log(`USERNAME is: ${this.username}`)
    }

    static createId(){
        return `1223`
    }
}

const ambuj = new User("ambuj")
// console.log(ambuj.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone= new Teacher("apple","ksjdgh@ambuj.com")
console.log(iphone.logMe());
// console.log(iphone.createId());