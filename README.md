# BetaCraftAssignment
E2E Playwright Automation Framework
This project contains a comprehensive end-to-end (E2E) test suite for the SauceDemo web application, built with the Playwright test automation framework. The tests are designed to validate key user flows and ensure the application's stability.

🌟 Features
Page Object Model (POM): The framework uses a POM design pattern for better code organization, reusability, and maintainability. * End-to-End Test Scenarios: A full "happy path" test case that simulates a user's journey from login to order completion.

Edge Case Testing: An "invalid password" test to verify error handling and a negative test case.

Data-Driven Testing: Test data is separated into a userData.json file, making it easy to manage and update.

Built-in Assertions: Utilizes Playwright's robust expect library for reliable assertions.

Prerequisites
Node.js: Make sure you have Node.js and npm installed on your machine.
Git: Git is required to clone the repository.

Install project dependencies: npm install

Install browsers: npx playwright install

this test suite support cross browser testing and headless testing so below command will run suite on chromium only
command to run suite : npx playwright test tests/E2ETest.spec.js --headed --project=chromium 

command to run suite on all browsers: npx playwright test tests/E2ETest.spec.js --headed

After a test run, you can view a detailed HTML report: npx playwright show-report
