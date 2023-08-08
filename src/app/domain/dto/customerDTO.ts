export class CustomerDTO {
  constructor(
    private id:number,
    private username:string,
    private email:string,
    private password:string,
    private phone:string,
    private firstName:string,
    private lastName:string,
    private birthDate:Date,
    private city:string,
    private country:string,
    private accountStatus:string,
    private registrationTime:Date,
    private lastEditTime:Date
  ) {
  }

  getFirstName():string {
    return this.firstName;
  }

  getLastName():string {
    return this.lastName;
  }
}
