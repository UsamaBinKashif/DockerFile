const moment = require('moment-timezone');
const inquirer = require('inquirer');
const chalk = require('chalk');

// Array of common country/city names for timezone lookup
const timezones = [
    "Pakistan/Karachi",
    "America/New_York",
    "America/Los_Angeles",
    "Europe/London",
    "Europe/Paris",
    "Asia/Tokyo",
    "Australia/Sydney",

    // Add more timezones as needed
];

// Prompt for country/city name
inquirer
    .prompt([
        {
            type: 'list',
            name: 'timezone',
            message: 'Select a country/city:',
            choices: timezones
        }
    ])
    .then(answers => {
        const { timezone } = answers;
        const currentTime = moment().tz(timezone).format('MMMM Do YYYY, h:mm:ss a');
        console.log(chalk.green(`Current time in ${chalk.bold(timezone)}: ${chalk.bold(currentTime)}`));
    })
    .catch(error => {
        console.error('Error occurred:', error);
    });
