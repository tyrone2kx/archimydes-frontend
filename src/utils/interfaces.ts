import { RolesEnum } from "./enums";


export interface User {
    id: string;
    email: string;
    name: string;
    role: RolesEnum;
}