@Regression
Feature: Google Search Functionality

  Background:
    Given user navigates to "https://www.google.com/"

  Scenario: Validate Google search
    When user searches for "Tesla" on Google
    Then user should see "Tesla" in the url
    And user should see "tesla" in the title

  Scenario: Validate Google search results
      When user searches for "Apple" on Google
      Then user should see results are more than 5000000