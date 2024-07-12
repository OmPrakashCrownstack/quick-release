const { test, expect } = require("@playwright/test");
exports.createProject = class Project {
  constructor(page) {
    this.page = page;
    this.Project = "New5";
  }

  async createProject() {
    await this.page.locator("#open-user-menu").click();
    await this.page.getByText("Add new project").click();
    const projectInput = this.page.locator("#company-website");
    await projectInput.click();
    await projectInput.fill(this.Project);

    await expect(projectInput).toHaveValue("New5");
    await this.page.getByText("Save").click();
    await expect(this.page.locator("//div[@class='Toastify']")).toHaveText(
      "Created Successfully"
    );
  }

  async existProject() {
    await this.page.locator("#open-user-menu").click();
    await this.page.getByText("Add new project").click();
    const projectInput = this.page.locator("#company-website");
    await projectInput.click();
    await projectInput.fill(this.Project);

    await expect(projectInput).toHaveValue("New5");
    await this.page.getByText("Save").click();
    await expect(this.page.locator("//div[@class='Toastify']")).toHaveText(
      "Project name is already taken"
    );
  }

  async projectValidations() {
    await this.page.locator("#open-user-menu").click();
    await this.page.getByText("Add new project").click();
    const projectInput = this.page.locator("#company-website");

    await projectInput.click();
    await projectInput.fill("   ");

    await this.page.getByText("Save").click();
    await expect(this.page.locator("#email-error")).toHaveText("Required");
  }
};
