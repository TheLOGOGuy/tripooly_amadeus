import AirTraffics  from './analytics/air_traffics';
import FareSearches from './analytics/fare_searches';

/**
 * A namespaced client for the
 * `/v2/travel/analytics` endpoints
 *
 * Access via the {Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.analytics;
 * ```
 *
 * @param {Client} client
 * @property {Urls} urls
 * @protected
 */
class Analytics {
  constructor(client) {
    this.client        = client;
    this.air_traffics  = new AirTraffics(client);
    this.fare_searches = new FareSearches(client);
  }
}

export default Analytics;