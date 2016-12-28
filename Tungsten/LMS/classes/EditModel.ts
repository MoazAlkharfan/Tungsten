export class EditModel {
    //UserId: string;
    OldPassword: string;
    NewPassword: string;
    NewPasswordConfirm: string;
    Username: string;
    Email: string;

    constructor(/*userid: string, */oldpassword: string, username: string, email: string, newpassword: string, newpasswordconfirm: string) {
        //this.UserId = userid;
        this.OldPassword = oldpassword;
        this.Username = username;
        this.Email = email;
        this.NewPassword = newpassword;
        this.NewPasswordConfirm = newpasswordconfirm;
    }
}