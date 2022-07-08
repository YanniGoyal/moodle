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
define(["jquery","local_mb2builder/selectors","local_mb2builder/helper"],function(e,a,t){e(a.builder.langspan);return{imageAction:function(e,r,i){var o=t.getSection(i),d=o;r.attr("data-parent")&&(d=o.closest(a.layout.element).find('.mb2-pb-carousel-item[data-pbid="'+o.attr("data-pbid")+'"]'));var n=d;if(r.attr("data-selector")&&(n=d.find(r.attr("data-selector"))),"background-image"===r.attr("data-style_properity"))n.css("background-image","url('"+e+"')");else{if("videofile"===r.attr("data-attrname")){var l='<video controls="true"><source src="'+e+'"></video>';n.parent().find(".videolocal-placeholder").hide(),n.html(l)}else"bgvideo"===r.attr("data-attrname")?(l='<video autoplay muted loop><source src="'+e+'"></video>',n.html(l)):"heroimgurl"===r.attr("data-attrname")&&2==t.checkImage(e)?(n.hide(),n.parent().find("video").remove(),l='<video class="hero-video" autoplay muted loop><source src="'+e+'"></video>',n.parent().prepend(l)):(n.parent().find("video").remove(),n.show(),n.attr("src",e));r.attr("data-selectorbg")&&d.find(r.attr("data-selectorbg")).css("background-image","url('"+e+"')"),r.attr("data-parent")&&(o.find(r.attr("data-selector")).attr("src",e),o.css("background-image","url('"+e+"')"))}},imageRemoveAction:function(e,a){var r=t.getSection(a),i=r;e.attr("data-selector")&&(i=r.find(e.attr("data-selector"))),"background-image"===e.attr("data-style_properity")?i.css(e.attr("data-style_properity"),"none"):"videofile"===e.attr("data-attrname")?(i.html(""),i.parent().find(".videolocal-placeholder").show()):"bgvideo"===e.attr("data-attrname")?i.html(""):"heroimgurl"===e.attr("data-attrname")?(i.attr("src",""),i.parent().find("video").remove()):(i.attr("src",""),e.attr("data-selectorbg")&&r.find(e.attr("data-selectorbg")).css("background-image","none"))},applyFileManager:function(a){window.onbeforeunload=null;var t=a.closest("#mb2-pb-modal-file-manager").find('[data-fieldtype="filepicker"]'),r=(e("#mb2-pb-modal-images").find(".mb2-pb-images"),e("#mb2-pb-modal-images").find(".mb2-pb-overlay")),i=a.closest("#mb2-pb-modal-file-manager").find("form"),o=a.closest("#mb2-pb-modal-file-manager").find(".mb2-pb-uploadmedia-wrap").attr("data-url");if(!t.find(".filepicker-filename>a").length)return null;r.fadeIn(180),a.closest(".modal-footer").find('[data-dismiss="modal"]').trigger("click"),t.find(".filepicker-filename").empty(),e.ajax({type:"POST",url:o,dataType:"html",data:i.serialize(),beforeSend:function(){},error:function(e,a,t){},success:function(a){e("#mb2-pb-modal-images").find(".mb2-pb-images").html(a),e(".mb2-pb-search-image").val(""),e(".mb2-pb-search-image").trigger("keyup"),setTimeout(function(){r.fadeOut(250)},450)}})},removeFileManager:function(a){var t=e("#mb2-pb-modal-images").find(".mb2-pb-overlay"),r=a.closest(".mb2-pb-images"),i=r.attr("data-url")+"?imgname="+a.attr("data-imgname")+"&sesskey="+e(".mb2-pb-settings").attr("data-sesskey");t.fadeIn(180),e.ajax({url:i,type:"get",dataType:"html",beforeSend:function(){},error:function(e,a,t){},success:function(a){r.html(a),e(".mb2-pb-search-image").val(""),e(".mb2-pb-search-image").trigger("keyup"),setTimeout(function(){t.fadeOut(250)},450)}})}}});
