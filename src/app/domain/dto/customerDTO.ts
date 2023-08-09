export class CustomerDTO {
  constructor(
    public id:number,
    public username:string,
    public email:string,
    public password:string,
    public phone:string,
    public firstName:string,
    public lastName:string,
    public birthDate:Date,
    public city:string,
    public country:string,
    public accountStatus:string,
    public registrationTime:Date,
    public lastEditTime:Date
  ) {
  }

  getFirstName():string {
    return this.firstName;
  }

  getLastName():string {
    return this.lastName;
  }
}
