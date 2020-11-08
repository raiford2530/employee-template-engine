const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//Array for containing all employees
const employees = [];

function addTeamMember() {
    inquirer.prompt([
        {
          type: "list",
          message: "What is the role of this team member?",
          name: "role",
          choices: ["Engineer", "Intern"],
        },
      ])
      .then((response) => {
        let employeeQuestion = { type: "input" };
  
        if (response.role === "Engineer") {
          employeeQuestion.message = "Enter the team member's GitHub username: ";
          employeeQuestion.name = "github";
        } else {
          employeeQuestion.message = "Enter the team member's school: ";
          employeeQuestion.name = "school";
        }

        inquirer.prompt([
          {
            type: "input",
            message: "Enter the team member's name: ",
            name: "name",
          },
          {
            type: "input",
            message: "Enter the team member's id: ",
            name: "id",
          },
          {
            type: "input",
            message: "Enter the team member's email address: ",
            name: "email",
          },
          employeeQuestion,
          {
            type: "list",
            message: "Would you like to add another team member?",
            name: "addMembers",
            choices: ["Yes", "No"],
            default: "Yes",
          },
        ]).then((data) => {
            console.log(data);         
          });
      });  
  }

console.log();
console.log("==============================");
console.log("Employee Template Enigine");
console.log("==============================");
console.log();

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter the manager's name: ",
      name: "name",
    },
    {
      type: "input",
      message: "Enter the manager's id: ",
      name: "id",
    },
    {
      type: "input",
      message: "Enter the manager's email address: ",
      name: "email",
    },
    {
      type: "input",
      message: "Enter the manager's office number: ",
      name: "officeNumber",
    },
    {
      type: "list",
      message: "Would you like to add another team member?",
      name: "addMembers",
      choices: ["Yes", "No"],
      default: "Yes",
    },
  ])
  .then((questions) => {
    const manager = new Manager(questions.name, questions.id, questions.email, questions.officeNumber);
    employees.push(manager);

    if (questions.addMembers === "Yes") {
        addTeamMember();
      }
  });

