$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "User logs in saucedemo page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User logins with valid credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User gets the url",
  "keyword": "Given "
});
formatter.step({
  "name": "User verifies on login page",
  "keyword": "Then "
});
formatter.step({
  "name": "User enters username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "User verifies logs successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User logins with valid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User gets the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_gets_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_verifies_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies logs successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.userVerifiesLogsSuccessfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User logins with valid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User gets the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_gets_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_verifies_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"problem_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies logs successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.userVerifiesLogsSuccessfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User logins with valid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User gets the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_gets_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_verifies_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"performance_glitch_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies logs successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.userVerifiesLogsSuccessfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User logins with valid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User gets the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_gets_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_verifies_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"locked_out_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies logs successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.userVerifiesLogsSuccessfully()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027title\u0027]\"}\n  (Session info: chrome\u003d89.0.4389.128)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LT-PC\u0027, ip: \u0027192.168.0.230\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.8\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.128, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\LT\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:49851}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0028cae9103ec42d72cfbe07dbf2d70a\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027title\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.isDisplayed(Unknown Source)\r\n\tat stepdefinitions.LoginStepDefinition.userVerifiesLogsSuccessfully(LoginStepDefinition.java:47)\r\n\tat ✽.User verifies logs successfully(file:///C:/Users/LT/IdeaProjects/saucedemo/./src/test/resources/features/login.feature:10)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User logins with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User gets the url",
  "keyword": "Given "
});
formatter.step({
  "name": "User verifies on login page",
  "keyword": "Then "
});
formatter.step({
  "name": "User enters username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "User verifies error message \"\u003cerror message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "error message"
      ]
    },
    {
      "cells": [
        "standarduser",
        "secret_sauce",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    },
    {
      "cells": [
        "standar_duser",
        "secret_sauc",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    },
    {
      "cells": [
        "standarduser",
        "secretsauce",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    },
    {
      "cells": [
        "",
        "secret_sauce",
        "Epic sadface: Username is required"
      ]
    },
    {
      "cells": [
        "standard_user",
        "",
        "Epic sadface: Password is required"
      ]
    },
    {
      "cells": [
        "",
        "",
        "Epic sadface: Username is required"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User logins with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User gets the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_gets_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_verifies_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"standarduser\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies error message \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_verifies_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User logins with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User gets the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_gets_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_verifies_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"standar_duser\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password \"secret_sauc\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies error message \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_verifies_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User logins with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User gets the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_gets_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_verifies_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"standarduser\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password \"secretsauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies error message \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_verifies_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User logins with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User gets the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_gets_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_verifies_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies error message \"Epic sadface: Username is required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_verifies_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User logins with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User gets the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_gets_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_verifies_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies error message \"Epic sadface: Password is required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_verifies_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User logins with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User gets the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_gets_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_verifies_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_enters_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies error message \"Epic sadface: Username is required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.LoginStepDefinition.user_verifies_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});