
export type Address={
    street:string,
    suite:string,
    city:string,
    zipcode:string
}

export type Contact ={
    id:string
    name:string,
    email:string
    address: Address
}

export type Socials = {
    id: number
    icon: string
    path: string
}


export type Post = {
    id:string
    title: string,
    body:string
}

