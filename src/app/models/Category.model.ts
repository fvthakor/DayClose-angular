import { Pincode } from "./Pincode.model";
interface MainCategory {
    _id?: string,
    category: string,
}
export interface Category {
    _id?: string,
    category: string,
    mainCategory?: string | MainCategory
}

export interface CategoryPagination {
    data: Category[],
    message: string,
    total: number,
}