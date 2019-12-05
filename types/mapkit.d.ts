/** The JavaScript API for embedding Apple maps on your website. */
declare module mapkit {
  /** Initialize MapKit JS by providing an authorization callback function and optional language. */
  function init(options: MapKitInitOptions): void;

  /** Subscribes a listener function to an event type. */
  function addEventListener<T>(type: InitializationEventType, listener: (this: T, event: InitializationEvent) => void, thisObject?: T): void;

  /** Unsubscribes a listener function from an event type. */
  function removeEventListener<T>(type: InitializationEventType, listener: (this: T, event: InitializationEvent) => void, thisObject?: T): void;

  /** A language ID indicating the selected language. */
  let language: string;

  /** The build string. */
  const build: string;

  /** The version of MapKit JS. */
  const version: string;

  /** Initialization options for MapKit JS. */
  interface MapKitInitOptions {
    /** An ID that indicates the preferred language in which to display map labels, controls, directions, and other text. */
    language?: string;
    /** A callback function that obtains a token. */
    authorizationCallback(done: (token: string) => void): void;
  }

  type InitializationEventType = 'configuration-change' | 'error';

  interface InitializationEvent {
    status: 'Initialized' | 'Refreshed' | 'Unauthorized' | 'Too Many Requests';
  }
}