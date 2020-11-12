# Employee Template Engine        ![License](https://img.shields.io/static/v1?label=license&message=MIT&color=brightgreen)

## Description  
The Employee Template Engine is a Node CLI application that allows a user to input information about his/her engineering team and then generate a HTML page containing the team's information. The app was created to help management quickly view information about their team. The app prompts the user to enter information about the manager and then allows the user to enter an infinite amount of team members which may be in an engineering role or an intern role. Specific questions are asked based on the role of the employee. Once the user has entered all the team members, the app generates a styled  HTML page which the user can open in their browser and view what's been entered. Employee Template Engine was written in Javascript using Node.js.  

[Demo Video](https://drive.google.com/file/d/1TmMvMt8XwjM5BewQZ9ijbZ8N0ywfydc-/view)

## Table of Contents  
[Installation](#Installation)  
[Usage](#Usage)  
[Tests](#Tests)  
[Contributing](#Contributing)  
[Questions](#Questions)  
[License](#License)  

## Installation
To run Employee Template Engine, you must install Node.js on your computer.

## Usage  
Once Node.js is installed on your computer, open up your terminal and go to the directory that Employee Template Engine is located. Run the command "node index.js". Once the app is started you will be prompted to enter information about the manager. It will ask for the manager's name, id, email, and office number and then it will ask if you would like to enter another team member. If you select yes, it will ask what role the team member has, Engineer or Intern. The app will then ask for the team member's name, id, email and will ask for the team member's GitHub username if they are an Engineer or for the team member's school if they are an intern. Once the information is completed, it will ask again if you would like to add another team member. If your answer is no, the app will return a message that the employee template was succesfully created. Navigate to the directory that the app is in and go to the output folder to find the team.html file. Open the file in your browser  to see your generated team page.

## Tests  
To test the app, install jest from node package manager. The test files will be located in test directory. To run the tests, run the command "node run test". Tests that pass will be highlighted in green. Tests that fail will be highlighted in red.

## Contributing  
To contribute, fork the repository and clone the repo to your computer. Make changes locally and push to your branch and then submit a pull request.

## Questions 
Visit my [GitHub Profile](https://www.github.com/raiford2530)  
For additional questions, contact me by email at raiford87@gmail.com.  

## License  
This project is licensed under MIT License

