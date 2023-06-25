export interface Skill {
    _id?: string,
    name: string,
}

export interface SkillPagination {
    data: Skill[],
    message: string,
    total: number,
}