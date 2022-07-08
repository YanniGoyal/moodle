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
 * @package   theme_mb2nl
 * @license   Commercial https://themeforest.net/licenses
 */
 define(["jquery","theme_mb2nl/typed"],function(t,e){var a=function(t){return{strings:t.attr("data-typedtext").split("|"),typeSpeed:Number(t.attr("data-typespeed")),backSpeed:Number(t.attr("data-backspeed")),backDelay:Number(t.attr("data-backdelay")),loop:!0}};return{typedInit:function(d){new e("#"+d+" .typed",a(t("#"+d)))}}});
