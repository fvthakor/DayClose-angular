import { City } from "./City.model";

export interface Pincode {
    _id?: string,
    pincode: string,
    city: string | City
}

export interface PincodePagination {
    data: Pincode[],
    message: string,
    total: number,
}