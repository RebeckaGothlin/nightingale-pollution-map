import { ILocations } from "../models/ILocations";
import { germanData } from "./germanData";
import { swedenData } from "./swedenData";

const latestGermanyData = germanData[germanData.length - 1];
const latestSwedenData = swedenData[swedenData.length - 1];

export const locations: ILocations[] = [
    {
        country: "Germany",
        center: [52.52, 13.405],
        data: latestGermanyData,
    },
    {
        country: "Sweden",
        center: [59.334591, 18.06324],
        data: latestSwedenData,
    },
];