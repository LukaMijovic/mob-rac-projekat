export class Flight {
  constructor(
    public id: number,
    public flightDate: Date,
    public departureScheduled: any,
    public arrivalScheduled: any,
    public airlineName: string,
    public airlineImage: string,
    public airportCityDep: string,
    public airportCityArr: string,
    public iataCodeDep: string,
    public iataCodeArr: string
  ) {
  }
}
