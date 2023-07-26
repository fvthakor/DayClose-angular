export interface User {
    _id?: string,
    emplyeeId: string,
    firstName: string,
    middleName: string,
    lastName: string,
    userName: string,
    address: string,
    role: string,
    email: string
}

export interface UserPagination {
    data: User[],
    message: string,
    total: number,
}