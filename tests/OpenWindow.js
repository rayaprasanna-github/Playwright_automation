import { chromium,test } from "@playwright/test"

test("First Page Navigation",async () => {

    const browser = await chromium.launch({
        headless: false
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.letskodeit.com/practice");

    await page.locator('#bmwradio').check();
    await page.locator('#bmwcheck').check();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Open Window' }).click();
    const page1 = await page1Promise;
    await page1.getByRole('link', { name: 'course image author Let\'s Kode It $99 JavaScript for beginners A Complete Guide' }).click();
    await page1.getByRole('button', { name: 'Enroll in Course ' }).click();
});
    
