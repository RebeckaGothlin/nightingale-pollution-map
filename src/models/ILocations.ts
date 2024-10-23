import { LatLngTuple } from "leaflet";

export interface ILocations {
  country: string;
  center: LatLngTuple;
  data: { value: number; date: string };
}
