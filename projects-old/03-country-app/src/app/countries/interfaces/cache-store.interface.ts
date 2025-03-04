import { Country } from './country';
import { Region } from './region.type';

export interface CacheStore {
  byCapital: ByCountry;
  byCountries: ByCountry;
  byRegion: ByRegion;
}

interface ByCountry {
  term: string;
  countries: Country[];
}

interface ByRegion {
  region?: Region;
  countries: Country[];
}
