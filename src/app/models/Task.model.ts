export interface Task {
    _id?: string,
    user?: string,
    category: string,
    subCategory?: string,
    detail: string,
    employee: string,
    taskDate: string,
    image1?: string,
    image2?: string,
}

export interface TaskPagination {
    data: Task[],
    message: string,
    total: number,
}