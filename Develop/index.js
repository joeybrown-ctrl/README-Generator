// global variables and links to packages and other files
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

        console.log("Successfully wrote to readme.md file!");
    } catch (err) {
        console.log(err);
    }

}

// function call to initialize program
init();
