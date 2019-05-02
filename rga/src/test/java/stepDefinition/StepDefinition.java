package stepDefinition;

import org.openqa.selenium.WebDriver;
import common.WebDriverInstance;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.junit.Assert;

public class StepDefinition {
	
	protected WebDriver driver;
	WebDriverInstance driverInstance = new WebDriverInstance();

	@Given("^Open chrome and navigate to url \"(.*?)\"$")
	public void open_chrome_and_navigate_to_url(String url) throws Throwable {
		driver = driverInstance.browserSetup(driver, url);
	}

	@When("^validate page for title \"(.*?)\"$")
	public void validate_page_for_title(String arg1) throws Throwable {
		Assert.assertEquals("Validation of Reinsurance Group of America Home Page", "Reinsurance Group of America Home", driver.getTitle());
	}

	@Then("^I close browser$")
	public void i_close_browser() throws Throwable {
		driver.quit();
	}

}
