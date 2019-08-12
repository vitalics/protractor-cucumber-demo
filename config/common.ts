import { Config, browser } from 'protractor';
require('dotenv').config();

export const config: Config = {
    baseUrl: process.env.FACILITY_PLAN_DOMAIN,
    capabilities: {
        browserName: process.env.FACILITY_PLAN_BROWSER_NAME,
        maxInstances: 1,
        // shardTestFiles: true,
    },
    directConnect: true,
    cucumberOpts: {
        compiler: 'ts:ts-node/register',
        format: ['json:reports/report.json', `${process.cwd()}/build/utils/reporter.js`],
        require: [`${process.cwd()}/build/src/stepdefinitions/*.js`],
        tags: ''
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    onPrepare: () => {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
    },
    onComplete: () => {
        // new Reporter({});
    },
    // plugins: [
    //     {
    //         options: {
    //             automaticallyGenerateReport: true,
    //             removeExistingJsonReportFile: true,
    //             customData: {
    //                 title: 'Facility plan',
    //                 data: [
    //                     { label: 'Project', value: 'Facility plan' },
    //                     { label: 'Release', value: '1.2.3' },
    //                     { label: 'Commit', value: '12345' }
    //                 ]
    //             },
    //             metadata: [
    //                 { name: 'Environment version', value: '12.3' },
    //                 {
    //                     name: 'Variable set', value: {
    //                         FACILITY_PLAN_DOMAIN: process.env.FACILITY_PLAN_DOMAIN,
    //                         FACILITY_PLAN_SOME_KEY: process.env.FACILITY_PLAN_SOME_KEY
    //                     }
    //                 }
    //             ],
    //         },
    //         package: 'protractor-multiple-cucumber-html-reporter-plugin',
    //     },
    // ],

    specs: [
        `${process.cwd()}/features/*.feature`
    ],
}