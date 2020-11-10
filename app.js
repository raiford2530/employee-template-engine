const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");

//Check to see if output directory exists and if not then create it
fs.access(OUTPUT_DIR, (err) => {
  if (err && err.code === "ENOENT") {
    fs.mkdir(OUTPUT_DIR, (err) => {
      if (err) throw err;
    });
  }
});

const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

//Array for containing all employees
const employees = [];

//Initialize and start program
function init() {
  console.log();
  console.log("==============================");
  console.log("Employee Template Enigine");
  console.log("==============================");
  console.log();

  //Prompt for manager questions
  //Create manager object and add to employees
  inquirer.prompt(getQuestions("Manager")).then((questions) => {
    const manager = new Manager(
      questions.name,
      questions.id,
      questions.email,
      questions.officeNumber
    );

    employees.push(manager);

    //Add another team member if yes or create team file if no
    if (questions.addMembers === "Yes") {
      addTeamMember();
    }else{
      writeTeamFile(employees);
    }
  });
}

function addTeamMember() {
  //Prompt for role of team member
  inquirer
    .prompt([
      {
        type: "list",
        message: "What is the role of this team member?",
        name: "role",
        choices: ["Engineer", "Intern"],
      },
    ])
    .then((roleData) => {
      //Prompt for team member questions
      //Create engineer or intern object depending on role type
      inquirer.prompt(getQuestions(roleData.role)).then((teamMemberData) => {
        if (roleData.role === "Engineer") {
          const engineer = new Engineer(
            teamMemberData.name,
            teamMemberData.id,
            teamMemberData.email,
            teamMemberData.github
          );

          employees.push(engineer);
        } else {
          const intern = new Intern(
            teamMemberData.name,
            teamMemberData.id,
            teamMemberData.email,
            teamMemberData.school
          );
          employees.push(intern);
        }

        if (teamMemberData.addMembers === "Yes") {
          addTeamMember();
        } else {
            writeTeamFile(employees);
        }
      });
    });
}

//Get questions based on role type
function getQuestions(type) {
  let nameQuestion = `Enter the ${type === "Manager" ? "manager's" : "team member's"} name: `;
  let idQuestion = `Enter the ${type === "Manager" ? "manager's" : "team member's"} id: `;
  let emailQuestion = `Enter the ${type === "Manager" ? "manager's" : "team member's"} email address: `;
  let officeNumberQuestion = "Enter the manager's office number: ";
  let schoolQuestion = `Enter the team member's school: `;
  let gitHubQuestion = `Enter the team member's GitHub username: `;

  const questions = [
    {
      type: "input",
      message: nameQuestion,
      name: "name",
    },
    {
      type: "input",
      message: idQuestion,
      name: "id",
    },
    {
      type: "input",
      message: emailQuestion,
      name: "email",
    },
  ];

  if (type === "Engineer") {
    questions.push({ type: "input", message: gitHubQuestion, name: "github" });
  } else if (type === "Intern") {
    questions.push({ type: "input", message: schoolQuestion, name: "school" });
  }else{
    questions.push({ type: "input", message: officeNumberQuestion, name: "officeNumber" });
  }

  questions.push({
    type: "list",
    message: "Would you like to add another team member?",
    name: "addMembers",
    choices: ["Yes", "No"],
    default: "Yes",
  });

  return questions;
}

//Write employees to team file
function writeTeamFile(employeesToWrite){
  fs.writeFile(outputPath, render(employeesToWrite), "utf8", (err) => {
    if (err) throw err;

    console.log("Team template successfully created");
  });
}

init();
