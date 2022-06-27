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
 * @copyright 2017 - 2022 Mariusz Boloz (https://mb2themes.com)
 * @license   Commercial https://themeforest.net/licenses
 */
 define(["jquery"],function(t){return{focusClass:function(){t(window).keydown(function(o){t("body").attr("data-keydown","true"),function(o){var e=o.keyCode?o.keyCode:o.which,n=["a","button",'[type="submit"]',"input",".nav-link"].join(",");t(""+n).focus(function(){"true"!==t("body").attr("data-keydown")||t("body").hasClass("pagelayout-mb2builder")||9!=e||t(this).addClass("themefocused"),t("body").attr("data-keydown","false")}),t(""+n).focusout(function(){t(this).removeClass("themefocused")})}(o)})}}});
