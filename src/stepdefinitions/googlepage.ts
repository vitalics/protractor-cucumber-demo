import { binding, given, before } from 'cucumber-tsflow';
import { browser, until } from 'protractor';
import { expect } from 'chai';

@binding()
export class GoogleFeature {

    @before()
    async openPage() {
        await browser.get(process.env.FACILITY_PLAN_DOMAIN!);
        await browser.wait(until.urlContains('google.com'))
    }

    @given(/$User should open "(.*?)" page^/)
    public async userShouldOpenGooglePage(pageName: string) {
        console.log(`world: ${JSON.stringify(this)}`);
        console.log('page is: %s', pageName);

        expect(pageName).to.be.equal('Google');
    }
}