
var path = require("path");
var assert = require("yeoman-assert");
var helpers = require("yeoman-test");

beforeEach(function () {
    return helpers.run(path.join(__dirname, "../app"))
});

describe("r-bones:app", function () {
    it("builds files", function () {
        assert.file([
            "DESCRIPTION",
            "NAMESPACE",
            "LICENSE",
            "TODO.md",
            "VERSIONS.md",
            "appveyor.yml",
            ".gitignore", ".gitattributes",
            ".travis.yml", ".codecov.yml",
            "emptypRoject.Rproj",
            "inst/NEWS",
            "R/class.R", "R/hello.R", "R/emptypRoject-package.R",
            "src/hello.cpp",
            "src/Makevars.in", "src/Makevars.win",
            "tests/testthat.R", "tests/testthat/test.R",
            "vignettes/emptypRoject.Rmd"
        ]);
    });
});
