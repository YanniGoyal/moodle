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
define(["jquery","local_mb2builder/selectors"],function(e,t){var a=e(t.builder.langspan),r=function(e){if(""!==e){return e=(e=e.replace(/\[.+\]/g,a.data("shortcodereplaced"))).replace("GENERICO","GENERIC0")}},n=function(a){a?e(t.builder.overlay).fadeIn(180):e(t.builder.overlay).fadeOut(180)};return{replaceText:r,dataAttribs:function(t){var a={};return e.each(t[0].attributes,function(){this.name.includes("data-")&&!this.name.includes("data-jarallax-")&&this.specified&&(a[this.name.replace("data-","")]=r(this.value))}),a},overlay:n,reload:function(){var e=window.parent.$(t.builder.demoiframe);n(!0),e.attr("src",e.attr("src"))},modalSettings:function(){e(t.builder.modal).draggable({cursor:"move",handle:t.builder.modalheader,scroll:!1})},checkModal:function(t){return!e(".modal.show").length||(alert(a.data("cantopenmodal")),!1)},decodeSpecialHtml:function(e){if(void 0!==e)return"number"==typeof e?e:e.replace(/&#34;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")},classFromnum:function(t,a,r){var n=[0,50,100,150,200,250],l=0,i=t.attr("data-sizepref")+"-";for(r&&(n=[1,2,3,4,5]),"column"===t.attr("data-numclasselector")&&(a=e(".mb2-pb-column-active")),l=0;l<n.length;l++)(r?t.val()>n[l]:t.val()>=n[l])&&(a.removeClass(i+n.join(" "+i)),a.addClass(i+n[l]),t.attr("data-numclassattr")&&a.attr("data-"+t.attr("data-numclassattr"),n[l]),t.attr("data-setval")&&e(".modal.show").find('[data-attrname="'+t.attr("data-setval")+'"]').val(n[l]))},stripHtml:function(e,t){return"html"===t?e:e.replace(/<\/?[^>]+(>|$)/g,"")},checkImage:function(e){return e?e.toLowerCase().match(/\.(jpg|jpeg|png|gif)/g)||e.includes("sample-data")?1:2:0},getSection:function(t){return"settings-section"===t?section=e(".mb2-pb-section-active"):"settings-row"===t?section=e(".mb2-pb-row-active"):"settings-column"===t?section=e(".mb2-pb-column-active"):"settings-element"===t?section=e(".mb2-pb-element-active"):"settings-subelement"===t&&(section=e(".mb2-pb-subelement-active")),section},validHtml:function(e){e="<div>"+e+"</div>";var t=(new DOMParser).parseFromString(e,"application/xml").querySelector("parsererror");return""===e?1:t?(alert(a.data("htmlerror")),0):1},screenSize:function(a){var r=e(t.builder.demoiframe);r.removeClass("device-desktop device-tablet device-smartphone"),r.addClass("device-"+a)},uniqId:function(){return Math.floor(1e4*Math.random())}}});
