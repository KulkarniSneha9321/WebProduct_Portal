export class User {
    name:string;
    mob:string;
    email:string;
    password:string;

    constructor(name: string,mob:string,email:string,password:string ){
        this.name=name;
        this.mob=mob;
        this.email=email;
        this.password=password;
    }
}
