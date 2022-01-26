export interface Sys {
  /**
   * Internal parameter
   */
  type?: number;
  /**
   * Internal parameter
   */
  id?: number;
  /**
   * Internal parameter
   */
  message?: number;
  /**
   * Country code (GB, JP etc.)
   */
  country?: string;
  /**
   * Sunrise time, unix, UTC
   */
  sunrise?: number;
  /**
   * Sunset time, unix, UTC
   */
  sunset?: number;
}
