const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, 'Engineer');
        this.github = github;
        this.getGithub = function(){
            return this.github
        }
    }
}

module.exports = Engineer