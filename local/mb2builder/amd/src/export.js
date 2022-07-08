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
define(["jquery","local_mb2builder/selectors","local_mb2builder/helper","local_mb2builder/layoutdata"],function(a,e,t,l){var s=a(e.builder.langspan);return{savelayout:function(e){var t=e;if(!a("#savelayoutname").val()&&0==a("#editlayoutid").val())return a("#savelayoutname").css("border-color","red"),a("#savelayoutname").closest("div").find(".mb2-pb-error").show(),null;a("#savelayoutname").attr("style",""),a("#savelayoutname").closest("div").find(".mb2-pb-error").hide();var o=e.find(".btn");o.val(s.data("processing")),o.attr("disabled","disabled");var r=e.attr("data-url"),n=JSON.stringify(l.setData(!1));a("#savelayoutcontent").val(n),a.ajax({type:"POST",url:r,data:e.serialize(),beforeSend:function(){},error:function(a,e,t){a.status,a.statusText},success:function(e){setTimeout(function(){o.removeAttr("disabled"),o.val(s.data("selectlayout")),a("#savelayoutname").val(""),a("#editlayoutid").val(0),t.find(".mb2-pb-success").show(),setTimeout(function(){t.find(".mb2-pb-success").hide()},1e4)},600)}})}}});
