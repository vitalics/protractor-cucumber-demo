import { browser, until } from 'protractor';
import { BeforeAll, After, Status } from "cucumber";

After(function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        const attach = this.attach; // cucumber's world object has attach function which should be used
        return browser.takeScreenshot().then(function (png) {
            const decodedImage = new Buffer(png, "base64");
            return attach(decodedImage, "image/png");
        });
    }
});
