<h1 align="center"> R-bones </h1>

[![Project Status](http://www.repostatus.org/badges/latest/wip.svg)](http://www.repostatus.org/#wip)
[![travis](https://travis-ci.org/dirmeier/R-bones.svg?branch=master)](https://travis-ci.org/dirmeier/R-bones)
[![appveyor](https://ci.appveyor.com/api/projects/status/6kpnkmlva9hio2hc?svg=true)](https://ci.appveyor.com/project/dirmeier/R-bones)
[![codecov](https://codecov.io/gh/dirmeier/R-bones/branch/master/graph/badge.svg)](https://codecov.io/gh/dirmeier/R-bones)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/cc7de342ad8245129d5cd1e1df98fb62)](https://www.codacy.com/app/simon-dirmeier/R-bones?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=dirmeier/python-bones&amp;utm_campaign=Badge_Grade)
[![npm version](https://badge.fury.io/js/generator-R-bones.svg)](https://www.npmjs.com/package/generator-R-bones)
[![npm download](https://img.shields.io/npm/dt/generator-R-bones.svg)](https://www.npmjs.com/package/generator-R-bones)


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

```

## Installation

Yeoman comes with [```npm```](https://nodejs.org/en/download/current/), so install it first and then call:

```sh
  npm install -g yo
  npm install -g generator-R-bones
```

Once you have the package, you can create a scaffold using:

```sh
  yo R-bones
```

This builds the skeleton. Afterwards modify the sources and documentation and build both using:

```sh
  R CMD build package && R CMD install pacage.tar.gz
```

## Author

* Simon Dirmeier <a href="mailto:mail@simon-dirmeier.net">mail@simon-dirmeier.net</a>
