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
 define(["jquery"],function(e){return{sidebarToggle:function(){var s=e("body");e(".theme-hide-sidebar").click(function(e){e.preventDefault(),s.hasClass("hide-sidebars")?(s.removeClass("hide-sidebars"),M.util.set_user_preference("theme-usersidebar","true")):(s.addClass("hide-sidebars"),M.util.set_user_preference("theme-usersidebar","false"))})}}});
