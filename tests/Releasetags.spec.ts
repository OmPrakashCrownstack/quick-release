import { LoginPage } from "../e2e/Login";
import { releaseTags } from "../e2e/Releasetag";
import { test, expect } from "@playwright/test";

test.beforeEach(
  "verify user able to add release tags",
  async ({ page }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 300000);
    const login = new LoginPage(page);
    await page.goto("/");
    await login.login("divanshu@crownstack.com", "pass1234");
  }
);

test("verify user able to Add Tags ", async ({ page }) => {
  const releasetag = new releaseTags(page);
  await releasetag.releaseTag();
});

test("verify user able to Edit Tags", async ({ page }) => {
  const editreleasetag = new releaseTags(page);
  await editreleasetag.editReleaseTag();
});
test("verify user able to Delete Tags", async ({ page }) => {
  const deletereleasetag = new releaseTags(page);
  await deletereleasetag.deleteReleaseTag();
});
