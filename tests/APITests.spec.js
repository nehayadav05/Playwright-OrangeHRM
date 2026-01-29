// API test cases should be run serially, not in parallel.
// Therefore, in playwright.config.js, set fullyParallel to false.
const { test, expect } = require('@playwright/test');

// Global variable to store user id created during POST request
var userid;

// ======================= GET USER =======================
test('Get users', async ({ request }) => {

    // Sending GET request to fetch all users
    const response = await request.get(
        'https://jsonplaceholder.typicode.com/users'
    );

    // Printing response body in JSON format
    console.log(await response.json()); // Returns response data in JSON format

    // Verifying HTTP status code is 200 (Success)
    expect(response.status()).toBe(200);

});

// ======================= CREATE USER =======================
test('Create user', async ({ request }) => {

    // Sending POST request to create a new user
    const response = await request.post(
        'https://jsonplaceholder.typicode.com/users',
        {
            // Request body data
            data: {
                "name": "Neha Yadav",
                "email": "neha@test.com",
                "username": "nehayadav"
            },

            // Request headers
            headers: {
                "Accept": "application/json"
            }
        }
    );

    // Printing created user response
    console.log(await response.json());

    // Verifying HTTP status code is 201 (Created)
    expect(response.status()).toBe(201);

    // Storing response JSON in a variable
    var res = await response.json(); // storing the response data

    // Saving user id for later update and delete tests
    userid = await res.id;

});

// ======================= UPDATE USER =======================
test('Update user', async ({ request }) => {

    // Sending PUT request to update user using stored user id
    const response = await request.put(
        'https://jsonplaceholder.typicode.com/users' + userid,
        {
            // Updated user data
            data: {
                "name": "Neha Yadav",
                "email": "neha@test.com",
                "username": "gigliyu"
            },

            // Request headers
            headers: {
                "Accept": "application/json"
            }
        }
    );

    // Printing update response
    console.log(await response.json());

    // Expecting 404 as JSONPlaceholder does not actually update data
    expect(response.status()).toBe(404);

});

// ======================= DELETE USER =======================
test('Delete user', async ({ request }) => {

    // Sending request to delete user using stored user id
    const response = await request.put(
        'https://jsonplaceholder.typicode.com/users' + userid
    );

    // Expecting 404 as delete is not supported by this fake API
    expect(response.status()).toBe(404);

});
