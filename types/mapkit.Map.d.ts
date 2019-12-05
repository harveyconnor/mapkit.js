declare namespace mapkit {
  class Map {
    /**
     * Creates a map that you embed on a webpage, and initializes its display properties and other options.
     * @param parent 
     * @param options 
     */
    constructor(parent?: string, options?: MapConstructorOptions);
  }
  
  /**
   * An object that contains options for initializing a map's features.
   */
  interface MapConstructorOptions {
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
}