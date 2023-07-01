import { Pincode } from "./Pincode.model";

export interface City {
    _id?: string,
    name: string,
    pincodes?: Pincode[]
}

export interface CityPagination {
    data: City[],
    message: string,
    total: number,
}