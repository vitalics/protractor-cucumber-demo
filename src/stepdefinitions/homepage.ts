import { Severity } from 'allure2-js-commons';
import { expect } from 'chai';
import { Given, BeforeAll } from 'cucumber';
import { browser, until } from 'protractor';


BeforeAll(async () => {
    await browser.get(process.env.FACILITY_PLAN_DOMAIN!);
    await browser.wait(until.urlContains('google.com'))
});

Given(/^User open "(.*?)" page$/, async function (pageName: string) {
    this.allure.addIssue('some-issue');
    this.allure.severity(Severity.CRITICAL);
    const title = await browser.getTitle();

    console.log(`title: ${title}`);
    console.log(`pageName: ${pageName}`);

    expect(title).to.eq('Google');
    expect(pageName).to.eq('home');
});
