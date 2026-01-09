class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
       this._email=value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}ambuj`
    }
    set password(value){
        this._password=value
    }
}

const ambuj= new User("ambuj@nsut","kjkjvn")
console.log(ambuj.password);
console.log(ambuj.email);