/// <reference types="node" />

import { AllureInterface } from 'cucumberjs-allure2-reporter';

declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: 'development' | 'production' | 'test';
        readonly FACILITY_PLAN_DOMAIN: string;
        readonly FACILITY_PLAN_SOME_KEY: 'value';
        readonly FACILITY_PLAN_CUCUMBER_TAGS: string;
        readonly FACILITY_PLAN_BROWSER_NAME: 'chrome' | 'firefox' | 'ie' | 'edge';
    }
}

declare module 'cucumber' {
    export interface World {
        allure: AllureInterface;
    }
}
