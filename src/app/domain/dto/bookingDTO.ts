export class BookingDTO {
  constructor(
    public flightId: number,
    public customerId: number,
    public seatClass: string
  ) {
  }
}
