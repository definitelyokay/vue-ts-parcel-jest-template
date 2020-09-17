import message from "src/message";
describe("message", () => {
	test("contents", () => {
		expect(message).toBe("Hello, world");
	});
});
