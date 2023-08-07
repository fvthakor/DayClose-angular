

export interface County {
    _id?: string,
    name: string,
}

export interface CountyPagination {
    data: County[],
    message: string,
    total: number,
}