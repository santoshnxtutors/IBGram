import type { CitySeoPageBase } from "../../city-page-types";
import { ahmedabadCityPage } from "./ahmedabad";
import { bhopalCityPage } from "./bhopal";
import { bhubaneswarCityPage } from "./bhubaneswar";
import { chandigarhCityPage } from "./chandigarh";
import { chennaiCityPage } from "./chennai";
import { coimbatoreCityPage } from "./coimbatore";
import { dehradunCityPage } from "./dehradun";
import { faridabadCityPage } from "./faridabad";
import { ghaziabadCityPage } from "./ghaziabad";
import { greaterNoidaCityPage } from "./greater-noida";
import { hyderabadCityPage } from "./hyderabad";
import { indoreCityPage } from "./indore";
import { jaipurCityPage } from "./jaipur";
import { kochiCityPage } from "./kochi";
import { kolkataCityPage } from "./kolkata";
import { lucknowCityPage } from "./lucknow";
import { ludhianaCityPage } from "./ludhiana";
import { mysuruCityPage } from "./mysuru";
import { nagpurCityPage } from "./nagpur";
import { naviMumbaiCityPage } from "./navi-mumbai";
import { puneCityPage } from "./pune";
import { suratCityPage } from "./surat";
import { thaneCityPage } from "./thane";
import { vadodaraCityPage } from "./vadodara";
import { visakhapatnamCityPage } from "./visakhapatnam";

export const additionalIndianIbCityPages = [
  puneCityPage,
  hyderabadCityPage,
  chennaiCityPage,
  kolkataCityPage,
  ahmedabadCityPage,
  jaipurCityPage,
  chandigarhCityPage,
  lucknowCityPage,
  indoreCityPage,
  kochiCityPage,
  coimbatoreCityPage,
  suratCityPage,
  vadodaraCityPage,
  faridabadCityPage,
  ghaziabadCityPage,
  greaterNoidaCityPage,
  dehradunCityPage,
  bhopalCityPage,
  nagpurCityPage,
  ludhianaCityPage,
  thaneCityPage,
  naviMumbaiCityPage,
  mysuruCityPage,
  visakhapatnamCityPage,
  bhubaneswarCityPage,
] satisfies CitySeoPageBase[];

export const additionalIndianIbCitySlugs = additionalIndianIbCityPages.map((page) => page.citySlug);
