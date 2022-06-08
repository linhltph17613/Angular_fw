export type IProduct = {
    id : number , //nếu dùng node js thì là string
    name : string ,
    status : number
}
export type ProductAdd = {
    name? : string ,
    status? : number

}
export type TypeProductCart = {
    id: number,
    name: string,
    value: number
}