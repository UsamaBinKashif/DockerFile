const moment = require('moment-timezone');
const inquirer = require('inquirer');
const chalk = require('chalk');
const figlet = require('figlet');

// Array of common country/city names for timezone lookup
const timezones = [
    "Pakistan/Karachi",
    "America/New_York",
    "America/Los_Angeles",
    "Europe/London",
    "Europe/Paris",
    "Asia/Tokyo",
    "Australia/Sydney",
    "Exit"
    // Add more timezones as needed
];

function promptUser() {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'timezone',
                message: 'Select a country/city:',
                choices: timezones
            }
        ]);
}

function displayTime() {
    promptUser()
        .then(answers => {
            const { timezone } = answers;
            if (timezone === "Exit") {
                console.log(chalk.red("Exiting..."));
                return; // Exit the function and end the program
            }
            const currentTime = moment().tz(timezone).format('MMMM Do YYYY, h:mm:ss a');
            console.log(chalk.green(`Current time in ${chalk.bold(timezone)}: ${chalk.bold(currentTime)}`));
            // Recursively call displayTime to keep the app running until user exits
            displayTime();
        })
        .catch(error => {
            console.error('Error occurred:', error);
        });
}

function displayHeadline() {
    figlet.text('TIMEZONE', {
        font: 'Big',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }, function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(chalk.green(data)); // Display the ASCII art in green color
        displayTime(); // Start displaying time after showing the headline
    });
}

// Start the application by displaying the headline
displayHeadline();
