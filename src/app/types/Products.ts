export type IProduct = {
    _id : string , //nếu dùng node js thì là string
    name : string ,
    price: number,
    salePrice: number,
    image: string,
    status : number,
    desc: string
}
export type ProductAdd = {
    name? : string ,
    status? : number,
    price?: number,
    salePrice?: number,
    image?: string,
    desc? : string

}
export type TypeProductCart = {
    _id: string,
    name: string,
    value: number,
    price: number,
    salePrice: number,
    image: string,
    desc : string
}
export type ProductCartType = {
    _id?: string ,
    name: string,
    price: number,
    salePrice: number,
    desc: string,
    image: string,
    value: number
}