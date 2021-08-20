//Roles/Classes
const Employee = require("./Develop/lib/employee");
const Engineer = require("./Develop/lib/engineer");
const Intern = require("./Develop/lib/intern");
const Manager = require("./Develop/lib/manager");

//Dependencies
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const jest = require("jest");
const Team = [];

//File Path 
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


const teamQuestions = {
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