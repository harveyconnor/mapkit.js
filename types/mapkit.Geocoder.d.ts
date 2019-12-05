declare namespace mapkit {
  class Geocoder {
    /**
     * A geocoder that converts human-readable addresses to geographic coordinates and vice versa.
     * @param options 
     */
    constructor(options?: GeocoderConstructorOptions);
    /** Converts an address to geographic coordinates. */
    lookup(place: string, callback: (error: Error | null, data: GeocoderResponse) => void, options?: GeocoderLookupOptions): number
    /** Converts a geographic coordinate to an address. */
    reverseLookup(coordinate: Coordinate, callback: (error: Error | null, data: GeocoderResponse) => void, options?: GeocoderReverseLookupOptions): number;
    /** Cancels the pending lookup or reverse lookup specified by its request ID. */
    cancel(): void;
  }

  interface GeocoderConstructorOptions {
    language: string;
    getsUserLocation: boolean;
  }

  interface GeocoderLookupOptions {
    /** The language in which to display the lookup results. */
    language?: string;
    /** Coordinates used to constrain the lookup results. */
    coordinate?: Coordinate;
    /** A region in which to constrain lookup results. */
    region?: CoordinateRegion;
    /** A list of countries in which to constrain the lookup results. */
    limitToCountries?: string;
  }

  interface GeocoderReverseLookupOptions {
    /** The language in which to display the reverse lookup results. */
    language: string;
  }

  interface GeocoderResponse {
    results: Place[];
  }

  interface Place {
    /** The name of the place. */
    name: string;
    /** The latitude and longitude for the place. */
    coordinate: Coordinate;
    /** The address of the place, formatted using its country's conventions. */
    formattedAddress: string;
    /** The geographic region associated with the place. */
    region: CoordinateRegion;
    /** The country code associated with the place. */
    countryCode: string;
  }
}