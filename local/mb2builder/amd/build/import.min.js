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
define(["jquery","local_mb2builder/selectors","local_mb2builder/helper","local_mb2builder/senddemo","local_mb2builder/carousel","local_mb2builder/layout","local_mb2builder/parallax","local_mb2builder/elements"],function(e,t,a,i,r,n,l,o){var u=e(t.builder.langspan);return{customLayout:function(d){var s=d,c=e('[name="importlayoutkeep"]');if(0==e("#importlayoutid").val())return e("#importlayoutid").css("border-color","red"),e("#importlayoutid").closest("div").find(".mb2-pb-error").show(),null;e("#importlayoutid").attr("style",""),e("#importlayoutid").closest("div").find(".mb2-pb-error").hide(),a.overlay(!0);var b=d.find(".btn");b.val(u.data("processing")),b.attr("disabled","disabled");var m=d.attr("data-url");e.ajax({type:"POST",url:m,data:d.serialize(),dataType:"html",beforeSend:function(){},error:function(e,t,a){},success:function(d){e("#importlayoutid").val(0),c.prop("checked")?e(t.builder.buildercontainer).first().find(t.layout.container_sections).append(d):e(t.builder.buildercontainer).first().find(t.layout.container_sections).html(d),i.saveDemo(),a.overlay(!1),n.layoutInit(),e(t.builder.buildercontainer).find(t.layout.carousel).each(function(){r.carouselInit(e(this).attr("id"))}),e(t.builder.buildercontainer).find(".parallax1").each(function(){l.parallaxInit(e(this))}),e(t.builder.buildercontainer).find(t.elements.animnum).each(function(){o.animnumInit(e(this),!1)}),setTimeout(function(){b.removeAttr("disabled"),b.val(u.data("importlayoutbtn")),s.find(".mb2-pb-success").show(),setTimeout(function(){s.find(".mb2-pb-success").hide()},1e4)},600)}})},predefinedPart:function(u){var d=u.attr("data-part"),s=a.dataAttribs(u);s=jQuery.param(s);var c=e(t.settings.settings).data("baseurl")+"/local/mb2builder/ajax/import-blocks.php?"+s+"&sesskey="+e(t.settings.settings).attr("data-sesskey");a.overlay(!0),e.ajax({url:c,type:"get",dataType:"html",beforeSend:function(){},error:function(e,t,a){},success:function(u){"layouts"===d?e(t.builder.buildercontainer).find(t.layout.container_sections).html(u):e(t.layout.section).first().find(t.layout.container_rows).append(u),i.saveDemo(),a.overlay(!1),n.layoutInit(),e(t.builder.buildercontainer).find(t.layout.carousel).each(function(){r.carouselInit(e(this).attr("id"))}),e(t.builder.buildercontainer).find(".parallax1").each(function(){l.parallaxInit(e(this))}),e(t.builder.buildercontainer).find(t.elements.animnum).each(function(){o.animnumInit(e(this),!1)})}})}}});
