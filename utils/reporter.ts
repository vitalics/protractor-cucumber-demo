import { CucumberJSAllureFormatter, AllureRuntime } from 'cucumberjs-allure2-reporter';
export default class Reporter extends CucumberJSAllureFormatter {
    constructor(options: any) {
        super(
            options,
            new AllureRuntime({ resultsDir: `${process.cwd()}/reports/allure-results` }),
            {
                labels: {
                    issue: [/@bug_(.*)/],
                    epic: [/@feature:(.*)/]
                }
            }
        );
    }
}