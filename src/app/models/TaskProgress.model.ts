import { Task } from "./Task.model";
import { User } from "./User.model";
import { TaskStatus } from "./TaskStatus.model";
import { Store } from "./Store.model";

export interface TaskProgress {
    _id?: string,
    user?: string | User,
    store?: string | Store,
    task?: string | Task,
    taskStatus?: string | TaskStatus,
    remark: string,
    image1?: string,
    image2?: string,

}
export interface TaskProgressPagination {
    data: TaskProgress[],
    message: string,
    total: number,
}