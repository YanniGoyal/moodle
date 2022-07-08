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
 * @license    Commercial https://themeforest.net/licenses
 */
define(["jquery","local_mb2builder/selectors","local_mb2builder/layoutdata"],function(e,r,a){return{saveDemo:function(){var t=e(r.builder.demoform),i=t.attr("data-url"),l=JSON.stringify(a.setData(!1));e(r.builder.demofield).val(l),e.ajax({type:"POST",url:i,data:t.serialize(),beforeSend:function(){},error:function(e,r,a){},success:function(e){}})}}});
