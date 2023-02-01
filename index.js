const inquiry = require('inquirer');
const fs = require('fs/promises')

const profile = () => {
    return inquiry.prompt([
        {
            // manager name
            type: 'input',
            name: 'name ',
            message: 'Manager Name: '
        },
        {
            // Manager
        },
        {
            //Engineer
        },
        {
            // Intern
        }
    ])
}