import { Groups } from './groups.enum'

export default class Contact {
    name = ''
    group = Groups.Not_selected
    phone = ''
    email = ''
    connected = false

    constructor(name, group, phone, email, connected) {
        this.name = name
        this.group = group
        this.phone = phone
        this.email = email
        this.connected = connected
    }
}