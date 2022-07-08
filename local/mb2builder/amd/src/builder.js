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
define(["jquery","local_mb2builder/layout","local_mb2builder/helper","local_mb2builder/selectors","local_mb2builder/layoutdata"],function(e,t,n,i,a){var c=function(){e(".mb2-pb-import-select select").each(function(t){e(this).on("change",function(){var t=e(this).val();e(this).closest(".tab-pane").find(".block-item").each(function(){""===t||t===e(this).attr("data-category")?e(this).show():e(this).hide()})})})};return{init:function(){t.layoutInit(),n.overlay(!1),n.modalSettings(),c()},savePage:function(){e("#page-admin-local-mb2builder-edit-page .mform").on("submit",function(){var t=JSON.stringify(a.setData(!0));e('[name="content"]').val(t),e('[name="democontent"]').val(t)})},changeScreenSize:function(){e(document).on("click",i.builder.device,function(t){n.screenSize(e(this).attr("data-device"))})}}});
