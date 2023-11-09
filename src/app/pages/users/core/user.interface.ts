export interface user_list_interface {
    id:  number,
    firstName : string,
    lastName : string
    email : string,
    password : string,
    creationDate : string,
    deleteStatus? : number
}

interface table_action {
    edit : string,
    delete : string
}

interface sorting_interfae {
    column: string,
    direction: string,
    sortingDirection: number
}

interface paginator {
    page : number,
    pageSize : number
}

export interface user_body_request_interface{
    filter?:{},
    sorting? : sorting_interfae,
    paginator : paginator
}

