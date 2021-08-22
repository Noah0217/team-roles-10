//Roles/Classes
const Employee = require("./Develop/lib/employee");
const Engineer = require("./Develop/lib/engineer");
const Intern = require("./Develop/lib/intern");
const Manager = require("./Develop/lib/manager");

//Dependencies
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Team = [];

//File Path 
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./Develop/lib/htmlRenderer");
var managerCounter = 0;

const teamMembers = {
    Manager: [{
        type: "input",
        message: "What is the manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is the manager's ID?",
        name: "managerId"
    },
    {
        type: "input",
        message: "What is the manager's email?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber"
    }

    ],


    Engineer: [{
        type: "input",
        message: "What is the engineer's name?",
        name: "engineerName"
    },
    {
        type: "input",
        message: "What is the engineer's ID?",
        name: "engineerId"
    },
    {
        type: "input",
        message: "What is the engineer's email?",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "What is the engineer's GitHub username?",
        name: "engineerGithub" 
    }

    ],


    Intern: [{
        type: "input",
        message: "What is the intern's name?",
        name: "internName"
    },
    {
        type: "input",
        message: "What is the intern's ID?",
        name: "internId"
    },
    {
        type: "input",
        message: "What is the intern's email?",
        name: "internEmail"
    },
    {
        type: "input",
        message: "What is the intern's school?",
        name: "internSchool"
    }

    ],
}

//Function to initialize app
function start() {

    inquirer.prompt(addNew).then((answer) => {
        if (answer.addMember == "Yes") {
            addRole();
        } else {

            fs.writeFileSync(outputPath, render(Team), "utf-8");
            process.exit(0);
    }

})

}


//To add a new member or not
const addNew = {
    type: "List",
    message: "Would you like to add another employee?",
    name: "addMember",
    choices: ["Yes", "No"],
}

//add new members role
function addRole() {
    inquirer.prompt([{
        type: "list",
        message: "Employees role?",
        name: "employeeChoice",
        choices: ["Manager", "Engineer", "Intern",]
    }]).then((answer) => {
        if (answer.employeeChoice === "Manager" && managerCounter < 1) {
            managerCounter++
            inquirer.prompt(teamMembers.Manager).then((results) => {
                const manager= new Manager(results.managerName, results.managerId, results.managerEmail, results.officeNumber);
                Team.push(manager);
                start();
            })
        } else if (answer.employeeChoice === "Engineer") {
            inquirer.prompt(teamMembers.Engineer).then((results) => {
                const engineer = new Engineer(results.engineerName, results.engineerId, results.engineerEmail, results.engineerGithub);
                Team.push(engineer);
                start();
            })
        } else if (answer.employeeChoice === "Intern") {
            inquirer.prompt(teamMembers.Intern).then((results) => {
                const intern = new Intern(results.internName, results.internId, results.internEmail, results.internSchool);
                Team.push(intern);
                start();
            })
        } else {
            start();
        }
    })


}
start()
