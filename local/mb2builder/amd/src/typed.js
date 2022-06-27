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
define(["jquery","theme_mb2nl/typed","local_mb2builder/selectors","local_mb2builder/helper"],function(t,e,a,n){var r=function(t){var e=t.closest(a.layout.element);return{strings:e.attr("data-typedtext").split("|"),typeSpeed:Number(e.attr("data-typespeed")),backSpeed:Number(e.attr("data-backspeed")),backDelay:Number(e.attr("data-backdelay")),loop:!0}};return{typedInit:function(a){new e("#"+a+" .typed",r(t("#"+a)))},typedDestroy:function(e){var n=t("#"+e),r=n.closest(a.layout.element);n.html(r.attr("data-content"))},beforeTypedInit:function(e){var n=t("#"+e),r=n.closest(a.layout.element);if(r.attr("data-content").includes("type")){for(var d=r.attr("data-content").split(" "),l=0;l<d.length;l++)"type"===d[l]&&(d[l]='<span class="typed"></span>');n.html(d.join(" "))}else t("#"+e).html(r.attr("data-content")+' <span class="typed"></span>')},typedPrepare:function(t){var e=n.uniqId();t.find(".heading").attr("id","typedid_"+e)}}});
