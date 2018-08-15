export class UserLogin{
    private username:string;
    private password:string;
    private email:string;
    private phoneNumber:number;

    constructor(){}

    public setAll(newUser:UserLogin){
        this.username=newUser.$username;
        this.password=newUser.$password;
        this.email=newUser.$email;
        this.phoneNumber=newUser.$phoneNumber;
    }
    public set $username(value:string){
        this.username=value;
    }
    public get $username(){
        return this.username;
    }
    public set $password(value:string){
        this.password=value;
    }
    public get $password(){
        return this.password;
    }
    public set $email(value:string){
        this.email=value;
    }
    public get $email(){
        return this.email;
    }
    public set $phoneNumber(value:number){
        this.phoneNumber=value;
    }
    public get $phoneNumber(){
        return this.phoneNumber;
    }
}