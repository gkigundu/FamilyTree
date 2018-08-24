export class User{
    //user fields
    private userID:number;
    private email:string;
    private phoneNumber:number;
    private firstName:string;
    private lastName:string;
    private location:string;
    private age:number;
    //soon to come
    //private profilePic:Blob;
    public $setAll(newUser:User){
        this.userID=newUser.$userID;
        this.email=newUser.$email;
    }
    public set $userID(value:number){
        this.userID=value;
    }
    public get $userID():number{
        return this.userID;
    }
    public set $email(value:string){
        this.email=value;
    }
    public get $email():string{
        return this.email;
    }
    public set $phoneNumber(value:number){
        this.phoneNumber=value;
    }
    public get $phoneNumber():number{
        return this.phoneNumber;
    }
    public set $firstName(value:string){
        this.firstName=value;
    }
    public get $firstName():string{
        return this.firstName;
    }
    public set $lastName(value:string){
        this.lastName=value;
    }
    public get $lastName():string{
        return this.lastName;
    }
    /*
    public set $location(value:string){
        this.location=value;
    }
    public get $location(){
        return this.location;
    }
    public set $age(value:number){
        this.age=value;
    }
    public get $age(){
        return this.age;
    }
    public set $profilePic(value:Blob){

    }
    public get $profilePic(){
        return this.profilePic;
    }
    */
}