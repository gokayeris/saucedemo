package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class ProductsPage {
    public ProductsPage(){PageFactory.initElements(Driver.getDriver(), this);}
    @FindBy(xpath = "//span[@class='title']")
    public WebElement products_page;
}