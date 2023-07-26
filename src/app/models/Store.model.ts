import { City } from "./City.model";
import { Pincode } from "./Pincode.model";

export interface Store {
    _id?: string,
    name: string,
    number: string,
    address: string,
    city: string | City,
    pincode: string | Pincode
}