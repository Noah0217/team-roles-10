const Employee = require("../lib/employee")
class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email)
        this.school = school
        this.email = email
    }
    getRole() {return "Intern"}
    getEmail() {return this.email}
    getSchool() {return this.school}
}
module.exports = Intern