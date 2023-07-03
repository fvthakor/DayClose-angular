export interface TaskStatus {
    _id?: string
    status: string
}

export interface TaskStatusPagination {
    data: TaskStatus[],
    message: string,
    total: number,
}