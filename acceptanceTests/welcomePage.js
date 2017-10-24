/// <reference path="./steps.d.ts" />
Feature('Welcome Page');

Scenario("load the inital page", (I) => {
    I.amOnPage("/");
        I.waitForElement('.App');
        I.see('Welcome to React');
    }
);
