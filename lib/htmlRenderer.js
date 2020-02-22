const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const handlebars = require("handlebars");
const managerTemplate = handlebars.compile(fs.readFileSync("templates/manager.html", {encoding: 'utf8'}));
// console.log(managerTemplate)
const engineerTemplate = handlebars.compile(fs.readFileSync("templates/engineer.html", {encoding: 'utf8'}));
const internTemplate = handlebars.compile(fs.readFileSync("templates/intern.html", {encoding: 'utf8'}));
const mainTemplate = handlebars.compile(fs.readFileSync("templates/main.html", {encoding: 'utf8'}));

render = (arr) => {
    console.log(arr)
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        let role = arr[i].role;
        console.log('role',role);
        switch(role) {
            case "Manager": result += managerTemplate(arr[i]);
            break;
            case "Engineer": result += engineerTemplate(arr[i]);
            break;
            case "Intern": result += internTemplate(arr[i]);
            break;
        }
    }

    console.log('result', result);
    return mainTemplate({team: result});
}

module.exports = render;