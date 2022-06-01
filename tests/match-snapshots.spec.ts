import { test, TestInfo, expect } from "@playwright/test";

test.describe("test toMatchSnapshot", () => {
  test("Should fail and it does", async ({ page }) => {
    await page.goto("/");

    expect(
      await page.screenshot({
        fullPage: true,
      })
    ).toMatchSnapshot({});
  });

  test("Should fail and it does not", async ({ page }, info: TestInfo) => {
    await page.goto("/");

    const customPath = [info.project.name, info.title, "does-not-fail.png"];

    // Temperary set snapshotSuffix and info.project.name to empty
    // strings to obtain complete control over filename.
    const oldSnapshotSuffix = info.snapshotSuffix;
    const oldProjectName = info.project.name;
    info.snapshotSuffix = "";
    info.project.name = "";

    expect(
      await page.screenshot({
        fullPage: true,
        // path: `${info.snapshotDir}/${customPath.join("/")}`, <-- not needed! otherwise, you save the image here already as an expectation.
      })
    ).toMatchSnapshot({
      name: customPath,
    });

    info.snapshotSuffix = oldSnapshotSuffix;
    info.project.name = oldProjectName;
  });
});
