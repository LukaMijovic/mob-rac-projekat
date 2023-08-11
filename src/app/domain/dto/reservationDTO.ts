export class ReservationDTO {
  constructor(
    public id: number,
    public flightDate: Date,
    public departuresScheduled: any,
    public arrivalScheduled: any,
    public airlineName: string,
    public iataCodeDep: string,
    public iataCodeArr: string,
    public seatCode: string,
    public seatClass: string,
    public amount: number
  ) {
  }
}
