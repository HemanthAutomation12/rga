package common;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class WebDriverInstance {
	public static int WAIT_TIME = 60;

	public WebDriver browserSetup(WebDriver driver, String url) {
		System.setProperty("webdriver.chrome.driver", "src/test/resources/driver/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(WAIT_TIME, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.get(url);		
		return driver;
	}

}
