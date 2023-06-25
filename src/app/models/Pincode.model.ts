export interface Pincode {
    _id?: string,
    pincode: string,
    city: string
}

export interface PincodePagination {
    data: Pincode[],
    message: string,
    total: number,
}