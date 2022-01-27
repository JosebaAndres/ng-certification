export interface Main {
  /**
   * Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
   */
  temp?: number;
  /**
   * Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
   */
  pressure?: number;
  /**
   * Humidity, %
   */
  humidity?: number;
  /**
   * Minimum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
   */
  temp_min?: number;
  /**
   * Maximum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
   */
  temp_max?: number;
  /**
   * Atmospheric pressure on the sea level, hPa
   */
  seaLevel?: number;
  /**
   * Atmospheric pressure on the ground level, hPa
   */
  grndLevel?: number;
}
