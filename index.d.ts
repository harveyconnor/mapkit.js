export as namespace Mapkit;

export interface mapkit {
  init(options: MapKitInitOptions): void;
  Map: Map;
  MapRect: MapRect;
  Geocoder: Geocoder;
}

export interface MapKitInitOptions {
  language: string;
  authorizationCallback(done: (token: string) => void): void;
}

/**
 * Creates a map that you embed on a webpage, and initializes its display properties and other options.
 */
export class Map {
  constructor(parent?: string, options?: MapContructorOptions);
}

/**
 * An object that contains options for initializing a map's features.
 */
export interface MapConstructorOptions {
  /** The visible area of the map defined in map units. */
  visibleMapRect: MapRect;
  /** The area currently displayed by the map. */
  region: CoordinateRegion;
  /** The map coordinate at the center of the map view. */
  center: Coordinate;
  /** The map's rotation, in degrees. */
  rotation: number;
  /** The CSS color that is used to paint the user interface controls on the map. */
  tintColor: string;
  /** The map’s color scheme when displaying standard or muted standard map types. */
  colorScheme: string;
  /** The type of data displayed by the map view. */
  mapType: string;
  /** The map's inset margins. */
  padding: Padding;
  /** A Boolean value that determines whether to display a control that lets users choose the map type. */
  showsMapTypeControl: boolean;
  /** A Boolean value that determines whether the user may rotate the map using the compass control or a rotate gesture. */
  isRotationEnabled: boolean;
  /** A feature visibility setting that determines when the compass is visible. */
  showsCompass: string;
  /** A Boolean value that determines whether the user may zoom in and out on the map using pinch gestures or the zoom control. */
  isZoomEnabled: any;
  /** A Boolean value that determines whether to display a control for zooming in and zooming out on a map. */
  showsZoomControl: any;
  /** A Boolean value that determines whether the user may scroll the map with a pointing device or gestures on a touchscreen. */
  isScrollEnabled: boolean;
  /** A feature visibility setting that determines when the map's scale is displayed. */
  showsScale: string;
  /** A delegate method for modifying cluster annotations. */
  annotationForCluster: Annotation;
  /** An array of all the annotations on the map. */
  annotations: Annotation[];
  /** The annotation on the map that is selected. */
  selectedAnnotation: Annotation;
  /** An array of all of the map's overlays. */
  overlays: Overlay[];
  /** The overlay on the map that is selected. */
  selectedOverlay: Overlay;
  /** A Boolean value that determines whether the map displays points of interest. */
  showsPointsOfInterest: boolean;
  /** A Boolean value that determines whether to show the user's location on the map. */
  showsUserLocation: boolean;
  /** A Boolean value that determines whether to center the map on the user's location. */
  tracksUserLocation: boolean;
  /** A Boolean value that determines whether the user location control is visible. */
  showsUserLocationControl: boolean;
}

export class MapRect {
  constructor()
}

export class CoordinateRegion {
  constructor()
}

export class Coordinate {
  constructor()
}

export class Padding {
  constructor()
}

export class Annotation {
  constructor()
}

export class Overlay {
  constructor()
}

/** A geocoder that converts human-readable addresses to geographic coordinates and vice versa. */
export class Geocoder {
  constructor(options?: GeocoderConstructorOptions);
  /** Converts an address to geographic coordinates. */
  lookup(place: string, callback: (error: Error | null, data: GeocoderResponse) => void, options?: GeocoderLookupOptions): number
  /** Converts a geographic coordinate to an address. */
  reverseLookup(coordinate: Coordinate, callback: (error: Error | null, data: GeocoderResponse) => void, options?: GeocoderReverseLookupOptions): number;
  /** Cancels the pending lookup or reverse lookup specified by its request ID. */
  cancel(): void;
}

export interface GeocoderConstructorOptions {
  language: string;
  getsUserLocation: boolean;
}

export interface GeocoderLookupOptions {
  /** The language in which to display the lookup results. */
  language: string;
  /** Coordinates used to constrain the lookup results. */
  coordinate: Coordinate;
  /** A region in which to constrain lookup results. */
  region: CoordinateRegion;
  /** A list of countries in which to constrain the lookup results. */
  limitToCountries: string;
}

export interface GeocoderReverseLookupOptions {
  /** The language in which to display the reverse lookup results. */
  language: string;
}

export interface GeocoderResponse {
  results: Place[];
}

export interface Place {
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