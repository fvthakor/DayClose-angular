
export interface Banner {
    _id?: string,
    title: string,
    text: string,
    banner: string,
    type: 'link' | 'text' | 'banner',
    link?: string
}

export interface BannerPagination {
    data: Banner[],
    message: string,
    total: number,
}