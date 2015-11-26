var FetchError = require("..")

describe("FetchError", function() {
  describe("new", function() {
    it("must be an instance of FetchError", function() {
      new FetchError(404).must.be.an.instanceof(FetchError)
    })

    it("must set message from code", function() {
      new FetchError(404).message.must.equal("Not Found")
    })

    it("must set message if given", function() {
      var err = new FetchError(404, "Missing in Action")
      err.message.must.equal("Missing in Action")
    })

    it("must set request non-enumerable", function() {
      var req = {}
      var err = new FetchError(404, {request: req})
      err.must.have.nonenumerable("request", req)
    })

    it("must set response non-enumerable", function() {
      var res = {}
      var err = new FetchError(404, {response: res})
      err.must.have.nonenumerable("response", res)
    })

    it("must set other properties", function() {
      var err = new FetchError(404, {a: 1, b: 2})
      err.must.have.enumerable("a", 1)
      err.must.have.enumerable("b", 2)
    })
  })

  describe(".prototype.toString", function() {
    it("must return a string of name, code and message", function() {
      var err = new FetchError(404, "Missing in Action")
      err.toString().must.equal("FetchError: 404 Missing in Action")
    })

    it("must not include code if zero", function() {
      var err = new FetchError(0, "Timed out")
      err.toString().must.equal("FetchError: Timed out")
    })
  })
})
