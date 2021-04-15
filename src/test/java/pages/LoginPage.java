package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class LoginPage {
    public LoginPage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//div[@class='login_logo']")
    public WebElement login_page;
    @FindBy(id = "user-name")
    public WebElement username;
    @FindBy(id = "password")
    public WebElement password;
    @FindBy(xpath = "//input[@id='login-button']")
    public WebElement loginButton;
    @FindBy(xpath = "//div[@class = 'error-message-container error']")
    public WebElement errorMessage;
    @FindBy(xpath = "//span[@class='title']")
    public WebElement afterLoginMessage;


}
