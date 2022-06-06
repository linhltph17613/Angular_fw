
export type TypeLoginRequest = {
    email: string,
    password: string,
}

export type TypeLoginResponse = {
    accessToken : string,
    user: {
        email: string,
        password: string,
    }
    
}