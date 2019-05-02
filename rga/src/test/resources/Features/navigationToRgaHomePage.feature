
Feature: Basic testcase to validate rga home page title

@Sample
  Scenario: Navigate to rga home page and validate page title
    Given Open chrome and navigate to url "https://www.rgare.com"
    When validate page for title "Reinsurance Group of America Home"
    Then I close browser
