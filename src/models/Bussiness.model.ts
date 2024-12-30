import User from "./User.model";

export default interface Bussiness{
    _id?: string, name: string, address: string, admin:User
}