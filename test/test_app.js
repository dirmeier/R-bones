'use strict';

var path = require("path");
var assert = require("yeoman-assert");
var helpers = require("yeoman-test");

beforeEach(function () {
    return helpers.run(path.join(__dirname, "../app"))
});

describe("python-bones:app", function () {
    it("builds files", function () {
        assert.file([
            "DESCRIPTION",
            "LICENSE",
            "TODO.md",
            "VERSIONS.md,",
            "appveyor.yml",
            ".gitignore", ".gitattributes",
            ".travis.yml", ".codecov.yml",
            "emptypRoject.Rproj",
            "inst/NEWS",
            "R/class.R", "R/hello.R", "emptypRoject-package.R",
            "src/hello.cpp",
            "tests/testthat.R", "tests/testthat/test.R",
            "vignettes/emptypRoject.Rmd"
        ]);
    });
});
