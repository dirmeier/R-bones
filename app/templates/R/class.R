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


#' @title Abstract clazz
#'
#' @name aclazz-class
#' @rdname aclazz-class
#'
#' @description i am an abstract clazz class
#'
#' @slot .data  data
setClass(
  "aclazz",
  contains = "VIRTUAL",
  slots    = list(.data="data.frame"),
  validity = function(object)
  {
    return (TRUE)
  }
)

#' @title Clazz
#'
#' @name clazz-class
#' @rdname clazz-class
#'
#' @description i am a clazz class
setClass(
  "clazz",
  contains = "aclazz",  
  prototype = prototype(.data=data.frame(NA))
)
