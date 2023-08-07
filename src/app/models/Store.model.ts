import { City } from "./City.model";
import { County } from "./County.model";
import { Pincode } from "./Pincode.model";

export interface Store {
    _id?: string,
    name: string,
    number: string,
    address: string,
    county: string | County,
    city: string | City,
    pincode: string | Pincode
}