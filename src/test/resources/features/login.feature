@login
Feature: User logs in saucedemo page

  Scenario Outline: User logins with valid credential
    Given User gets the url
    Then User verifies on login page
    When User enters username "<username>"
    And User enters password "<password>"
    And User clicks on login button
    Then User verifies logs successfully
    Examples:
      | username                | password     |
      | standard_user           | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |
      | locked_out_user         | secret_sauce |

  Scenario Outline: User logins with invalid credentials
    Given User gets the url
    Then User verifies on login page
    When User enters username "<username>"
    And User enters password "<password>"
    And User clicks on login button
    Then User verifies error message "<error message>"
    Examples:
      | username      | password     | error message                                                             |
      | standarduser  | secret_sauce | Epic sadface: Username and password do not match any user in this service |
      | standar_duser | secret_sauc  | Epic sadface: Username and password do not match any user in this service |
      | standarduser  | secretsauce  | Epic sadface: Username and password do not match any user in this service |
      |               | secret_sauce | Epic sadface: Username is required                                        |
      | standard_user |              | Epic sadface: Password is required                                        |
      |               |              | Epic sadface: Username is required                                        |