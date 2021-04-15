package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import pages.LoginPage;
import pages.ProductsPage;
import utilities.ConfigReader;
import utilities.Driver;

public class LoginStepDefinition {
    LoginPage loginPage= new LoginPage();
    ProductsPage productsPage=new ProductsPage();
    @Given("User gets the url")
    public void user_gets_the_url() {
        Driver.getDriver().get(ConfigReader.getProperty("url"));
    }




    @Then("User verifies on login page")
    public void user_verifies_on_login_page() {
        Assert.assertTrue(loginPage.login_page.isDisplayed());
    }
    @When("User enters username {string}")
    public void user_enters_username(String username) {
        loginPage.username.sendKeys(username);
    }
    @When("User enters password {string}")
    public void user_enters_password(String password) {
        loginPage.password.sendKeys(password);
    }
    @When("User clicks on login button")
    public void user_clicks_on_login_button() {
        loginPage.loginButton.click();
    }
    @Then("User verifies error message {string}")
    public void user_verifies_error_message(String errorMessage) {
        Assert.assertEquals("The error message is not expected", errorMessage, loginPage.errorMessage.getText());

    }

    @Then("User verifies logs successfully")
    public void userVerifiesLogsSuccessfully() {
        Assert.assertTrue(productsPage.products_page.isDisplayed());
    }
}