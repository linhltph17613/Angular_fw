
export type TypeLoginRequest = {
    email: string,
    password: string,
    status : number,
    role: number


}

export type TypeLoginResponse = {
    accessToken : string,
    user: {
        email: string,
        password: string,
        status : number,
        role: number

    }
    
}


export type TypeRegister = {
    _id? : string,
    email: string,
    password: string,
    image: string,
    name: string,
    status : number,
    role: number

}
export type TypeUser = {
    _id? : string,
    email: string,
    password: string,
    image: string,
    name: string

}