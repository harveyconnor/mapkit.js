declare namespace mapkit {
  class Coordinate {
    /**
     * Creates a coordinate object with the specified latitude and longitude.
     * @param latitude The latitude in degrees.
     * @param longitude The longitude in degrees.
     */
    constructor(latitude: number, longitude: number)
    /** The latitude in degrees. */
    latitude: number
    /** The longitude in degrees. */
    longitude: number;
  }

  class CoordinateRegion {
    constructor()
  }
}