export class FormData {
    firstName: string = '';
    lastName : string = '';
    email: string = '';
    username: string = '';
    password:string='';
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';

    clear() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.username = '';
        this.password='';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
}

export class Register{
    username: string='';
    password:string='';

}
export class Personal {
    firstName: string = '';
    lastName : string = '';
    email: string = '';
}

export class Address {
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
}