export interface DocumentType {
    _id?: string,
    name: string,
}

export interface DocumentTypePagination {
    data: DocumentType[],
    message: string,
    total: number,
}