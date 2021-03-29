interface Token {}

async function scan(css: string) {
  return {};
}

describe("scan", () => {
  test("empty css", async () => {
    await expect(scan("")).resolves.toEqual({});
  });
});
