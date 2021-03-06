# <%= projectID %>: <%= desc %>
#
# Copyright (C) <%= user %>
#
# This file is part of <%= projectID %>.
#
# <%= projectID %> is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# <%= projectID %> is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with <%= projectID %>. If not, see <http://www.gnu.org/licenses/>.


#' Do something
#'
#' @export
#'
#' @param X some object
#'
#' @examples
#'  f(matrix(rnorm(100), 10))
f <- function(X)
{
    UseMethod("edgenet")
}

#' @export
#' @method edgenet matrix
f.matrix <- function(X)
{
    return("welcome to R-bones\n")  
}

#' Do another thing
#'
#' @description TODO
#'
#' @export
#' @docType methods
#' @rdname g-methods
#'
#' @param X  some object
#' @param Y some other object
setGeneric(
  "g",
  function(X, Y)
  {
    standardGeneric("g")
  },
  package="<%= projectID %>"
)

#' @rdname diffuse-methods
#' @aliases diffuse,knockout.lmm.analysed-method
#' @import data.table
#' @importFrom dplyr select filter
setMethod(
  "g",
  signature=signature(X="matrix"),
  function(X, Y)
  {
    return("this yeoman-generator is awesome\n")
  }
)
