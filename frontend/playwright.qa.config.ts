import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  use: {
    headless: true,
    baseURL: 'https://rpn-qa.superfun.link',
  },
};
export default config;

