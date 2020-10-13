const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
async function promptUser() {
    const questions = [
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Enter a description of your project"
        },
        {
            type: "input",
            name: "installation",
            message: "Installation instructions"
        },
        {
            type: "input",
            name: "usage",
            message: "Usage instructions"
        },
        {
            type: "list",
            name: "license",
            message: "License",
            choices: ["MIT License", "Apache License 2.0", "GNU GPLv3"]
        },
        {
            type: "input",
            name: "contributing",
            message: "Enter contributers to this project"
        },
        {
            type: "input",
            name: "tests",
            message: "Project tests"
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address so users know where to direct any questions they may have about the project."
        },
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub username so users know where to direct any questions they may have about the project."
        }
    ];
    const answers = inquirer.prompt(questions);
    return answers;
}

// function to initialize program
async function init() {
    try {
        const data = await promptUser();
        const markdown = generateMarkdown(data);

        await writeFileAsync("readme.md", markdown, "utf-8");

        console.log("Successfully wrote to generateMarkdown.js");
    } catch (err) {
        console.log(err);
    }

}

// function call to initialize program
init();


//DONE
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

//DONE
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README