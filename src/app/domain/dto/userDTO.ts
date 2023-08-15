export class UserDTO {
  constructor(
    public firstName: string,
    public lastName: string,
    public username: string,
    public password: string,
    public email: string,
    public phone: string,
    public birthday: Date,
    public country: string,
    public city: string
  ) {
  }
}
