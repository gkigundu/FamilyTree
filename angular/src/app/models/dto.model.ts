import { UserLogin } from "./userlogin.model";
import { Family } from "./family.model";
import { User } from "./user.model";

export class DTO {
    private status:boolean;
    private error:string;
    private user:User;
    private login:UserLogin;
    private family:Family;
    constructor(){}

    public set $user(user:User){
        this.user=user;
    }
    public get $user():User{
        return this.user;
    }
    public set $family(family:Family){
        this.family=family;
    }
    public get $family():Family{
        return this.family;
    }
    public set $login(userLogin:UserLogin){
        this.login=userLogin;
    }
    public get $lgin():UserLogin{
        return this.login;
    }
    public set $status(status:boolean){
        this.status=status;
    }
    public get $status():boolean{
        return this.status;
    }
    public set $error(error:string){
        this.error=error;
    }
    public get $error():string{
        return this.error;
    }
    public $setAll(response:DTO):void{
        this.$error=response['error'];
        this.$status=response['status'];
        this.$family=response['family'];
        this.$user=response['user'];
        this.$login=response['login'];
    }
}
