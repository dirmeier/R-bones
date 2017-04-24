<h1 align="center"> R-bones </h1>

[![Project Status](http://www.repostatus.org/badges/latest/wip.svg)](http://www.repostatus.org/#wip)
[![travis](https://travis-ci.org/dirmeier/R-bones.svg?branch=master)](https://travis-ci.org/dirmeier/R-bones)
[![Build status](https://ci.appveyor.com/api/projects/status/qx8noa1g0dfneco9?svg=true)](https://ci.appveyor.com/project/dirmeier/r-bones)
[![codecov](https://codecov.io/gh/dirmeier/R-bones/branch/master/graph/badge.svg)](https://codecov.io/gh/dirmeier/R-bones)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/cc7de342ad8245129d5cd1e1df98fb62)](https://www.codacy.com/app/simon-dirmeier/R-bones?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=dirmeier/python-bones&amp;utm_campaign=Badge_Grade)
[![npm version](https://badge.fury.io/js/generator-r-bones.svg)](https://www.npmjs.com/package/generator-r-bones)
[![npm download](https://img.shields.io/npm/dt/generator-r-bones.svg)](https://www.npmjs.com/package/generator-r-bones)


A yeoman generator for R projects.

## Introduction

`R-bones` is a yeoman-generator for `R`-projects using `Rcpp` and 'RcppEigen'.
 Projects created with `R-bones` are ready for publication to *CRAN* or *Bioconductor*. The generator creates

* a GPL3 license,
* an `Rcpp/RcppEigen` integration, 
* static code analysis and reports using `lintr`,
* a unit-test suite using `testthat`,
* badges for the *project status*, *build status* using Travis CI/Appveyor and *code coverage* using Codecov,
* documentation with `roxygen` and a custom `vignette`,
* example `S3`, `S4` methods and classes,
* custom NEWS, README.md, TODO.md and VERSIONS.md files,
* a prototype `hello.R`, `hello.cpp` and `testthat.R`.

The resulting folder-structure looks like this:

```sh
	|____.codecov.yml
	|____.gitattributes
	|____.gitignore
	|____.lintr
	|____.Rbuildignore
	|____.travis.yml
	|____.yo-rc.json
	|____appveyor.yml
	|____DESCRIPTION
	|____emptypRoject.Rproj
	|____inst
	| |____NEWS
	|____LICENSE
	|____R
	| |____class.R
	| |____emptypRoject-package.R
	| |____hello.R
	|____README.md
	|____src
	| |____hello.cpp
	|____tests
	| |____testthat
	| | |____test.R
	| |____testthat.R
	|____TODO.md
	|____VERSIONS.md
	|____vignettes
	| |____emptypRoject.Rmd
```

## Installation

Yeoman comes with [```npm```](https://nodejs.org/en/download/current/), so install it first and then call:

```sh
  npm install -g yo
  npm install -g generator-R-bones
```

Once you have the package, you can create a scaffold using:

```sh
  yo r-bones
```

This builds the skeleton. Afterwards modify the sources and documentation and build both using:

```sh
  R CMD build package && R CMD install package.tar.gz
```

## Author

* Simon Dirmeier <a href="mailto:mail@simon-dirmeier.net">mail@simon-dirmeier.net</a>
