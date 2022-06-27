// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 *
 * @package    local_mb2builder
 * @copyright  2018 - 2022 Mariusz Boloz (mb2themes.com)
 * @license    Commercial https://themeforest.net/licenses
 */
define(["jquery","local_mb2builder/selectors","local_mb2builder/helper"],function(t,a,r){t(a.builder.langspan);return{iconAction:function(e,d,n){var l=r.getSection(n),s=l;d.attr("data-selector")&&(s=l.find(d.attr("data-selector"))),l.hasClass("mb2pb-button")&&s.closest(".btn-incon").removeClass("hidden"),l.attr("data-"+d.attr("data-attrname"),e),d.attr("data-globalparent")?l.find(a.layout.subelement).each(function(){t(this).attr("data-"+d.attr("data-attrname"))||t(this).find(s).attr("class",e)}):s.attr("class",e)},iconRemoveAction:function(e,d){var n=r.getSection(d),l=n;e.attr("data-selector")&&(l=n.find(e.attr("data-selector"))),n.hasClass("mb2pb-button")&&l.closest(".btn-incon").addClass("hidden"),e.attr("data-default")&&!e.attr("data-globalparent")&&n.attr("data-"+e.attr("data-attrname"),e.attr("data-default")),e.attr("data-default")&&e.attr("data-globalparent")?(n.find(a.layout.subelement).each(function(){t(this).attr("data-"+e.attr("data-attrname"))||t(this).find(l).attr("class",e.attr("data-default"))}),n.attr("data-"+e.attr("data-attrname"),e.attr("data-default"))):e.attr("data-globalchild")?(n.attr("data-"+e.attr("data-attrname"),""),l.attr("class",n.closest(a.layout.element).attr("data-"+e.attr("data-attrname")))):e.attr("data-default")?l.attr("class",e.attr("data-default")):(n.attr("data-"+e.attr("data-attrname"),""),l.attr("class","hidden"))}}});
