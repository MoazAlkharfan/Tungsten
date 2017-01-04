export class User {
    Id: string;
    Name: string;
    Username: string;
    Email: string;
    Roles: string[];
    Password: string;
    RememberMe: boolean;
    Courses: any[];
    constructor(
        username: string,
        password: string,
        name: string,
        email: string,
        roles: string[]
    ) {

        this.Username = username;
        this.Password = password;
        this.RememberMe = false;
        this.Name = name;
        this.Email = email;
        this.Roles = roles;
    }
}