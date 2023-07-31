import { Category } from "./Category.model";
import { Store } from "./Store.model";
import { User } from "./User.model";

export interface Task {
    _id?: string,
    store?: string | Store,
    user?: string | User,
    category?: string | Category,
    subCategory?: string | Category,
    detail: string,
    employee: string | User,
    taskDate: string,
    priority: string,
    taskTime: string,
    image1?: string,
    image2?: string,
    status?: string,
    
}

export interface TaskPagination {
    data: Task[],
    message: string,
    total: number,
}