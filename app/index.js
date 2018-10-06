"use strict";

var Generator = require("yeoman-generator");
var chalk = require("chalk");
var yosay = require("yosay");
var superb = require("superb");
var mkdirp = require("mkdirp");
var validator = require("validator");

module.exports = class extends Generator {
    prompting() {

        this.log(yosay(
            "Welcome to " + superb() + " R-bones!\n" +
            "I'll walk you through the installation."
        ));

        return this.prompt([{
            type: "input",
            name: "user",
            message: "What\'s your name",
            default: "user"
        }, {
            type: "input",
            name: "email",
            message: "What\'s your email adress?",
            default: "user@noreply.com",
            validate: function (input) {
                return validator.isEmail(input);
            }
        }, {
            type: "input",
            name: "projectID",
            message: "What\'s the name of your package?",
            default: "emptypRoject"
        }, {
            type: "input",
            name: "desc",
            message: "How would you describe the project in a single sentence?",
            default: "description"
        }, {
            type: "input",
            name: "githubuser",
            message: "What\'s your github user name?",
            default: "githubuser"
        }]).then((answers) => {
            this.args = answers;
            this.config.set(this.args);
        });
    }

    writing() {
        var usrspl = this.args.user.split(" ");
        var conff = [
            "README.md", "VERSIONS.md", "TODO.md", "DESCRIPTION", "NAMESPACE",
            "src/", "R/class.R", "R/hello.R", "tests/", "inst"
        ];
        for (var i in conff) {
            this.fs.copyTpl(
                this.templatePath(conff[i]),
                this.destinationPath(conff[i]), {
                    projectID: this.args.projectID,
                    desc: this.args.desc,
                    email: this.args.email,
                    githubuser: this.args.githubuser,
                    user: this.args.user,
                    userpre: usrspl[0],
                    usersur: usrspl[1],
                    date: new Date().toJSON().slice(0, 10).replace(/-/g, '/')
                });
        }

        this.fs.copy(
            this.templatePath("proj.Rproj"),
            this.destinationPath(this.args.projectID + ".Rproj"));

        this.fs.copyTpl(
            this.templatePath("R/package.R"),
            this.destinationPath("R/" + this.args.projectID + "-package.R"), {
                projectID: this.args.projectID,
                desc: this.args.desc,
                email: this.args.email,
                user: this.args.user
            });

        this.fs.copyTpl(
            this.templatePath("vignettes/proj.Rmd"),
            this.destinationPath("vignettes/" + this.args.projectID + ".Rmd"), {
                projectID: this.args.projectID,
                desc: this.args.desc,
                email: this.args.email,
                user: this.args.user
            });

        var cops = [
            "LICENSE", "appveyor.yml", "NAMESPACE", "cleanup"
        ];
        for (var i in cops) {
            this.fs.copy(
                this.templatePath(cops[i]),
                this.destinationPath(cops[i]));
        }

        var hcops = [
            "codecov.yml", "gitignore", "lintr", "clang-format",
            "gitattributes", "Rbuildignore", "travis.yml"
        ];
        for (var i in hcops) {
            this.fs.copy(
                this.templatePath(hcops[i]),
                this.destinationPath("." + hcops[i]));
        }
    }

    end() {
        this.config.save();
    }
};
