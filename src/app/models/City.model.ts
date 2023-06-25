export interface City {
    _id?: string,
    name: string,
}

export interface CityPagination {
    data: City[],
    message: string,
    total: number,
}