import { Store } from "./Store.model";

export interface StorePagination {
    data: Store[],
    message: string,
    total: number,
}