import { LoginPage } from "../Pages/Login";
import { Changelog } from "../Pages/changelog";
import { test, expect } from "@playwright/test";

test.beforeEach(
  " Verify Admin able to click on newchange log ",
  async ({ page }) => {
    const login = new LoginPage(page); // 30 seconds
    await login.gotoLoginPage();
    await login.login("divanshu@crownstack.com", "pass1234");
  }
);
test("Verify user able to cancel change log", async ({ page }) => {
  const changelog = new Changelog(page);
  await changelog.cancelchangelog();
});

test(" Verify admin should able to Save log draft ", async ({
  page,
}, testInfo) => {
  testInfo.setTimeout(testInfo.timeout + 300000);
  const changelog = new Changelog(page);
  await changelog.savechangelog();
});

test(" Verify admin should able to publish change log ", async ({
  page,
}, testInfo) => {
  testInfo.setTimeout(testInfo.timeout + 300000);
  const changelog = new Changelog(page);
  await changelog.publishchangelog();
});
