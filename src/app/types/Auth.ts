
export type TypeLoginRequest = {
    _id:string,
    name:string,
    email: string,
    password: string,
    image:string,
    status : number,
    role: number


}

export type TypeLoginResponse = {
    accessToken : string,
    user: {
        _id: string,
        name: string,
        email: string,
        image: string,
        // password: string,
        status : number,
        role: number

    }
    
}


export type TypeRegisterRequest = {
    email: string,
    password: string,
    image: string,
    name: string

}
export type TypeRegisterResponse = {
    _id:string
    email: string,
    password: string,
    image: string,
    name: string,
    status: number,
    role: number

}
export type TypeUser = {
    _id? : string,
    email?: string,
    password?: string,
    image?: string,
    name?: string,
    role?: number,
    status?: number,


}
