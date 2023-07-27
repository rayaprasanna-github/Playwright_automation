// import type { PlaywrightTestConfig } from '@playwright/test';

// const config: PlaywrightTestConfig = {
//   testMatch: ["tests/firstPage.test.ts"]
// };
// export default config;

import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: /.*.js/,
};
export default config;

