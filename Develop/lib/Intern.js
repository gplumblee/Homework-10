const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, 'Intern');
        this.school = school;
        this.getSchool = function(){
            return this.school;
        }
    }
}

module.exports = Intern;