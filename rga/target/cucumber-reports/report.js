$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("navigationToRgaHomePage.feature");
formatter.feature({
  "line": 2,
  "name": "Basic testcase to validate rga home page title",
  "description": "",
  "id": "basic-testcase-to-validate-rga-home-page-title",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Navigate to rga home page and validate page title",
  "description": "",
  "id": "basic-testcase-to-validate-rga-home-page-title;navigate-to-rga-home-page-and-validate-page-title",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sample"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open chrome and navigate to url \"https://www.rgare.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "validate page for title \"Reinsurance Group of America Home\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I close browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.rgare.com",
      "offset": 33
    }
  ],
  "location": "StepDefinition.open_chrome_and_navigate_to_url(String)"
});
formatter.result({
  "duration": 22579639552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Reinsurance Group of America Home",
      "offset": 25
    }
  ],
  "location": "StepDefinition.validate_page_for_title(String)"
});
formatter.result({
  "duration": 35951285,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_close_browser()"
});
formatter.result({
  "duration": 717887756,
  "status": "passed"
});
});