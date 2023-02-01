const inquiry = require('inquirer');
const fs = require('fs/promises');
const { resolve } = require('path');

const profile = () => {
    return inquiry.prompt([
        {
            //  name
            type: 'input',
            name: 'name ',
            message: 'Name: '
        },
        {
            // Role
            type: 'list',
            name: `role`,
            message: `Select team members role`,
            choices:[
                `Engineer`,
                `Intern`,
                `Manager`
            ]

        },
        {
            //Id
            name: `id`,
            message: `Enter Id number`
        },
        {
            // Email
            name: `email`,
            message: `Enter Email`
        }
    ])
    .then(({name, role, id, email}) => {
        let roleType = ``;
        if (role === `Engineer`){
            roleType = `Github User`
        } else if (role === `Intern`) {
            roleType = `School/University`
        } else {
            roleType = `Office Number`
        }
        
    })
}