describe("A suit of basic function",function(){
	it("reverse word",function(){
		expect("DCBA").toEqual(reverse("ABCD"));
		expect("Conan").toEqual(reverse("nanoC"));

	});
});