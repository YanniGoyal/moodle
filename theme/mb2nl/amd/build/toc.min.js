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
 define(["jquery"],function(t){return{tocInit:function(){t(".theme-toc").closest(".generalbox").find("h3,h4,h5,h6").each(function(){var c=t(this).html().replace(/[^a-z0-9]/gi,"_");t(this).attr("id",c.trim())})},courseToc:function(){t(".coursetoc-section-toggle").click(function(c){var e=t(this).closest(".coursetoc-section");e.hasClass("active")?e.removeClass("active"):e.addClass("active")})}}});
