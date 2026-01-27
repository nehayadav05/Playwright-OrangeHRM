// Exporting the LoginPage class so it can be used in other files
exports.LoginPage =
class LoginPage {

    // Constructor runs automatically when an object of this class is created
    // It receives the Playwright 'page' object
    constructor(page) {
        // Storing the page object for reuse in this class
        this.page = page;

        // Locator for the Login link on the homepage
        this.loginLink = '#login2';

        // Locator for the username input field in the login modal
        this.usernameInput = '#loginusername';

        // Locator for the password input field in the login modal
        this.passwordInput = '#loginpassword';

        // Locator for the Login button using XPath
        this.loginButton = "//button[normalize-space()='Log in']";
    }

    // Method to open the application homepage
    async gotoLoginPage() {
        // Navigates to the Demoblaze website
        await this.page.goto("https://www.demoblaze.com/index.html");
    }

    // Method to perform login action
    // Accepts username and password as parameters
    async login(username, password) {

        // Clicks on the Login link to open the login popup
        await this.page.locator(this.loginLink).click();

        // Enters the provided username into the username field
        await this.page.locator(this.usernameInput).fill(username);

        // Enters the provided password into the password field
        await this.page.locator(this.passwordInput).fill(password);

        // Clicks on the Login button to submit the form
        await this.page.locator(this.loginButton).click();
    }
}
