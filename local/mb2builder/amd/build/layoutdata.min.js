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
define(["jquery","local_mb2builder/selectors","local_mb2builder/helper"],function(t,e,a){return{setData:function(r){var i=[];return(r?t(e.builder.demoiframe).contents().find(e.builder.buildercontainer):t(e.builder.buildercontainer)).each(function(r){var n=t(this),s=r,b=a.dataAttribs(n);delete b.sortableItem,i[s]={type:"mb2pb_page",settings:b,attr:[]},n.find(e.layout.section).each(function(r){var n=t(this),b=r,l=a.dataAttribs(n);delete l.sortableItem,i[s].attr[b]={type:"mb2pb_section",settings:l,attr:[]},n.find(e.layout.row).each(function(r){var n=t(this),l=r,o=a.dataAttribs(n);delete o.sortableItem,i[s].attr[b].attr[l]={type:"mb2pb_row",settings:o,attr:[]},n.find(e.layout.pbcolumn).each(function(r){var n=t(this),o=r,d=a.dataAttribs(n);delete d.sortableItem,i[s].attr[b].attr[l].attr[o]={type:"mb2pb_col",settings:d,attr:[]},n.find(e.layout.element).each(function(r){var n=t(this),d=r,u=a.dataAttribs(n);delete u.sortableItem,i[s].attr[b].attr[l].attr[o].attr[d]={type:"mb2pb_el",settings:u,attr:[]},n.find(e.layout.subelement).each(function(e){var r=t(this),n=e,u=a.dataAttribs(r);delete u.sortableItem,i[s].attr[b].attr[l].attr[o].attr[d].attr[n]={type:"mb2pb_subel",settings:u,attr:[]}})})})})})}),i}}});
