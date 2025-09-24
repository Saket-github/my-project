// employeeManagement.js

const readline = require('readline');

// Create readline interface for CLI input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Array to store employee records
let employees = [];

// Function to display the menu
function showMenu() {
    console.log('\n===== Employee Management System =====');
    console.log('1. Add Employee');
    console.log('2. List All Employees');
    console.log('3. Remove Employee by ID');
    console.log('4. Exit');
    rl.question('Select an option: ', handleMenu);
}

// Handle menu choices
function handleMenu(choice) {
    switch (choice.trim()) {
        case '1':
            addEmployee();
            break;
        case '2':
            listEmployees();
            break;
        case '3':
            removeEmployee();
            break;
        case '4':
            console.log('Exiting...');
            rl.close();
            break;
        default:
            console.log('Invalid option. Try again.');
            showMenu();
            break;
    }
}

// Add a new employee
function addEmployee() {
    rl.question('Enter employee ID: ', (id) => {
        rl.question('Enter employee name: ', (name) => {
            const exists = employees.some(emp => emp.id === id.trim());
            if (exists) {
                console.log('Employee ID already exists. Try again.');
            } else {
                employees.push({ id: id.trim(), name: name.trim() });
                console.log(`Employee ${name.trim()} added successfully!`);
            }
            showMenu();
        });
    });
}

// List all employees
function listEmployees() {
    if (employees.length === 0) {
        console.log('No employees found.');
    } else {
        console.log('\n--- Employee List ---');
        employees.forEach(emp => {
            console.log(`ID: ${emp.id}, Name: ${emp.name}`);
        });
    }
    showMenu();
}

// Remove employee by ID
function removeEmployee() {
    rl.question('Enter employee ID to remove: ', (id) => {
        const index = employees.findIndex(emp => emp.id === id.trim());
        if (index !== -1) {
            const removed = employees.splice(index, 1);
            console.log(`Employee ${removed[0].name} removed successfully!`);
        } else {
            console.log('Employee not found.');
        }
        showMenu();
    });
}

// Start the CLI app
showMenu();
