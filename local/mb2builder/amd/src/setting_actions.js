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
 * @copyright  2018 - 2022 Mariusz Boloz (mb2themes.com)
 * @license    Commercial https://themeforest.net/licenses
 */
define(["jquery","local_mb2builder/selectors","local_mb2builder/helper","local_mb2builder/editor","theme_mb2nl/spectrum","local_mb2builder/carousel","local_mb2builder/layout","local_mb2builder/parallax","local_mb2builder/elements","local_mb2builder/typed"],function(t,a,r,e,s,l,i,d,o,n){t(a.builder.langspan);var c=function(a,r,e){var s="",l="";a&&(s=a.toRgbString());var i=e;r.attr("data-parent")&&(i=e.closest(".mb2-pb-element").find('.mb2-pb-carousel-item[data-pbid="'+e.attr("data-pbid")+'"]'));var d=i;if(r.attr("data-selector")&&(d=i.find(r.attr("data-selector"))),r.attr("data-selector2")&&(l=i.find(r.attr("data-selector2"))),r.attr("data-colorclass")&&s?d.addClass("color1"):d.removeClass("color1"),r.attr("data-globalparent"))e.find(".mb2-pb-subelement").each(function(){t(this).attr("data-"+r.attr("data-attrname"))||t(this).find(r.attr("data-selector")).css(r.attr("data-style_properity"),s)});else if(r.attr("data-globalchild")&&!s){var o=e.closest(".mb2-pb-element");d.css(r.attr("data-style_properity"),o.attr("data-"+r.attr("data-attrname")))}else{if(e.attr("data-"+r.attr("data-attrname"),s),d.css(r.attr("data-style_properity"),s),e.hasClass("mb2-pb-row")&&"bgcolor"===r.attr("data-attrname")&&(e.find(".hero-img-grad.grad-left").attr("style","background-image:linear-gradient(to right,"+s+",rgba(255,255,255,0));"),e.find(".hero-img-grad.grad-right").attr("style","background-image:linear-gradient(to right,rgba(255,255,255,0),"+s+");")),i.hasClass("mb2-pb-carousel-item")&&"ocolor"===r.attr("data-attrname")&&(i.find(".slidehero-img-grad.grad-left").attr("style","background-image:linear-gradient(to right,"+s+",rgba(255,255,255,0));"),i.find(".slidehero-img-grad.grad-right").attr("style","background-image:linear-gradient(to right,rgba(255,255,255,0),"+s+");")),e.hasClass("mb2-pb-boxesimg_item")&&"color"===r.attr("data-attrname")&&(e.find(".theme-boximg-imgel .gradient-left").attr("style","background-image:linear-gradient(to right,"+s+",rgba(255,255,255,0));"),e.find(".theme-boximg-imgel .gradient-right").attr("style","background-image:linear-gradient(to right,rgba(255,255,255,0),"+s+");")),e.hasClass("mb2-pb-row")&&"gradcolor1"===r.attr("data-attrname")){var n=e.attr("data-graddeg"),c=e.attr("data-gradcolor2");e.find(".rowgrad").attr("style","background-image:linear-gradient("+n+"deg,"+s+","+c)}if(e.hasClass("mb2-pb-row")&&"gradcolor2"===r.attr("data-attrname")){n=e.attr("data-graddeg");var m=e.attr("data-gradcolor1");e.find(".rowgrad").attr("style","background-image:linear-gradient("+n+"deg,"+m+","+s)}r.attr("data-style_properity2")&&d.css(r.attr("data-style_properity2"),s),r.attr("data-selector2")&&l.css(r.attr("data-style_properity"),s)}},m=function(r,e){var s=e.find(a.layout.carousel),i=e;r.attr("data-selector")&&(i=e.find(r.attr("data-selector"))),s.length?(s.each(function(){l.carouselDestroy(t(this).attr("id"))}),e.attr("data-"+r.attr("data-attrname"),r.val()),r.attr("data-ignorecarousel")&&(r.attr("data-class_remove")&&i.removeClass(r.attr("data-class_remove")),i.addClass(r.attr("data-class_prefix")+r.val())),s.each(function(){l.carouselInit(t(this).attr("id"))})):(r.attr("data-class_remove")&&i.removeClass(r.attr("data-class_remove")),i.addClass(r.attr("data-class_prefix")+r.val())),e.attr("data-"+r.attr("data-attrname"),r.val())},h=function(t,a,r){if(t.attr("data-class_remove")&&(r.removeClass(t.attr("data-class_remove")),t.attr("data-selector2")&&a.find(t.attr("data-selector2")).removeClass(t.attr("data-class_remove"))),a.attr("data-"+t.attr("data-attrname"),t.val()),r.addClass(t.attr("data-class_prefix")+t.val()),t.attr("data-selector2")&&a.find(t.attr("data-selector2")).addClass(t.attr("data-class_prefix")+t.val()),a.hasClass("mb2-pb-list")&&"style"===t.attr("data-attrname")){var e=a.find("ol");"number"===t.val()&&(r.replaceWith('<ol class="'+r.attr("class")+'">'+r.html()+"</ol>"),i.layoutInit()),"number"!==t.val()&&e.length&&(e.replaceWith('<ul class="'+e.attr("class")+'">'+e.html()+"</ul>"),i.layoutInit())}},u=function(t,a){var r=a.find(".heading");a.attr("data-"+t.attr("data-attrname"),t.val()),1==t.val()?(n.beforeTypedInit(r.attr("id")),n.typedInit(r.attr("id"))):n.typedDestroy(r.attr("id"))};return{actionStyle:function(a,e){var s="change",l="px",i=!1,d=e;a.attr("data-parent")&&(d=e.closest(".mb2-pb-element").find('.mb2-pb-carousel-item[data-pbid="'+e.attr("data-pbid")+'"]'));var o=d;a.attr("data-changemode")&&(s=a.attr("data-changemode")),a.attr("data-style_suffix")&&"rem"===(l=a.attr("data-style_suffix"))&&(i=!0),"none"===l&&(l=""),a.attr("data-selector")&&(o=d.find(a.attr("data-selector"))),"range"===a.attr("type")&&a.closest(".form-group").find(".numval").html(a.val()),a.on(s,function(){var a=t(this).attr("data-style_properity");"heroml"===t(this).attr("data-attrname")&&(a=e.attr("data-herohpos")),o.css(a,t(this).val()+l),t(this).attr("data-style_properity2")&&o.css(t(this).attr("data-style_properity2"),t(this).val()+l),t(this).attr("data-numclass")&&r.classFromnum(t(this),o,i),e.attr("data-"+t(this).attr("data-attrname"),t(this).val()),"range"===t(this).attr("type")&&t(this).closest(".form-group").find(".numval").html(t(this).val())})},actionColor:function(t,a){t.focus(),t.spectrum({showInput:!0,showButtons:!1,preferredFormat:"rgb",allowEmpty:!0,color:"",showAlpha:!0,change:function(r){c(r,t,a)},move:function(r){c(r,t,a)}})},actionClass:function(a,r){var e="change";a.attr("data-changemode")&&(e=a.attr("data-changemode")),"range"===a.attr("type")&&a.closest(".form-group").find(".numval").html(a.val()),a.on(e,function(){var e=r;t(this).attr("data-parent")&&(e=r.closest(".mb2-pb-element").find('.mb2-pb-carousel-item[data-pbid="'+r.attr("data-pbid")+'"]'));var s=e;t(this).attr("data-selector")&&(s=e.find(t(this).attr("data-selector"))),r.attr("data-"+a.attr("data-attrname"),t(this).val()),r.attr("data-carousel")&&!r.hasClass("mb2-pb-coursetabs")||r.hasClass("mb2-pb-blog")&&3==r.attr("data-layout")||r.hasClass("mb2-pb-events")&&3==r.attr("data-layout")?m(t(this),r):h(t(this),r,s),"range"===t(this).attr("type")&&t(this).closest(".form-group").find(".numval").html(t(this).val()),"radio"===t(this).attr("type")&&(t(this).closest(".mb2-pb-radioform-group").find(".mb2-pb-radio-el").removeClass("checked"),t(this).closest(".mb2-pb-radio-el").addClass("checked")),"parallax"===t(this).attr("data-attrname")&&1==t(this).val()?d.parallaxInit(r):"parallax"===t(this).attr("data-attrname")&&0==t(this).val()&&d.parallaxDestroy(r),"graddeg"===t(this).attr("data-attrname")&&r.find(".rowgrad").attr("style","background-image:linear-gradient("+t(this).val()+"deg,"+r.attr("data-gradcolor1")+","+r.attr("data-gradcolor2"))})},actionText:function(a,e){a.on("input",function(){var a=e;t(this).attr("data-parent")&&(a=e.closest(".mb2-pb-element").find('.mb2-pb-carousel-item[data-pbid="'+e.attr("data-pbid")+'"]'));var s=a;t(this).attr("data-selector")&&(s=a.find(t(this).attr("data-selector")));var l=r.stripHtml(t(this).val(),e.attr("data-id"));l=r.replaceText(l),""===t(this).val()&&t(this).attr("data-default")&&(l=t(this).attr("data-default")),e.attr("data-"+t(this).attr("data-attrname"),l),s.html(l)})},actionAttribute:function(a,e){"range"===a.attr("type")&&a.closest(".form-group").find(".numval").html(a.val()),a.on("input",function(){var a=e;t(this).attr("data-parent")&&(a=e.closest(".mb2-pb-element").find('.mb2-pb-carousel-item[data-pbid="'+e.attr("data-pbid")+'"]'));var s=a;t(this).attr("data-selector")&&(s=a.find(t(this).attr("data-selector")));var l=r.stripHtml(t(this).val(),e.attr("data-id"));l=r.replaceText(l),""===t(this).val()&&t(this).attr("data-default")&&(l=t(this).attr("data-default")),e.attr("data-"+t(this).attr("data-attrname"),l),s.attr(t(this).attr("data-attribute"),l),"range"===t(this).attr("type")&&t(this).closest(".form-group").find(".numval").html(t(this).val())})},actionCallback:function(a,r){var e="change";a.attr("data-changemode")&&(e=a.attr("data-changemode")),"range"===a.attr("type")&&a.closest(".form-group").find(".numval").html(a.val()),a.on(e,function(){"carousel"===t(this).attr("data-callback")?m(t(this),r):"layout-carousel"===t(this).attr("data-callback")?function(t,a){var r=a.find(".mb2-pb-content-inner");a.attr("data-"+t.attr("data-attrname"),t.val()),1==t.val()?(l.columnsToCarousel(a),l.carouselInit(r.attr("id"))):(l.carouselDestroy(r.attr("id")),l.carouselToColumns(a))}(t(this),r):"accordion-parent"===t(this).attr("data-callback")?o.accordionParent(t(this),r):"typed"===t(this).attr("data-callback")&&u(t(this),r),"range"===t(this).attr("type")&&t(this).closest(".form-group").find(".numval").html(t(this).val()),"radio"===t(this).attr("type")&&(t(this).closest(".mb2-pb-radioform-group").find(".mb2-pb-radio-el").removeClass("checked"),t(this).closest(".mb2-pb-radio-el").addClass("checked"))})},actionAjax:function(e,s){var d="change";e.attr("data-changemode")&&(d=e.attr("data-changemode")),"range"===e.attr("type")&&e.closest(".form-group").find(".numval").html(e.val()),e.on(d,function(){var e=s.find(".mb2-pb-content-list"),d=s.find(".videowebiframe"),o=s.find(a.layout.carousel);t(this).attr("data-advlayout")?(3==t(this).val()?(l.columnsToCarousel(s),l.carouselInit(o.attr("id"))):2==t(this).val()?(o.length&&l.carouselDestroy(o.attr("id")),l.carouselToColumns(s)):1==t(this).val()&&(o.length&&l.carouselDestroy(o.attr("id")),l.carouselToColumns(s),i.columnsToList(s)),e.removeClass("layout1"),e.removeClass("layout2"),e.removeClass("layout3"),e.addClass("layout"+t(this).val())):"carousel"===t(this).attr("data-attrname")&&1==t(this).val()&&l.carouselPrepare(s),s.attr("data-"+t(this).attr("data-attrname"),t(this).val());var n=r.dataAttribs(s);n=jQuery.param(n);var c=t(".mb2-pb-settings").data("baseurl")+"/local/mb2builder/ajax/"+s.attr("data-id")+".php?"+n+"&sesskey="+t(".mb2-pb-settings").attr("data-sesskey");t.ajax({url:c,type:"get",dataType:"html",beforeSend:function(){s.find(".mb2-pb-actions-loading").fadeIn(150)},error:function(t,a,r){},success:function(t){"coursetabs"===s.attr("data-id")?s.find(".mb2-pb-element-inner").html(t):e.length&&e.html(t),d.length&&d.attr("src",t);var r=s.find(a.layout.carousel);r.length&&l.carouselInit(r.attr("id")),setTimeout(function(){s.find(".mb2-pb-actions-loading").fadeOut(150)},350)}}),"range"===t(this).attr("type")&&t(this).closest(".form-group").find(".numval").html(t(this).val()),"radio"===t(this).attr("type")&&(t(this).closest(".mb2-pb-radioform-group").find(".mb2-pb-radio-el").removeClass("checked"),t(this).closest(".mb2-pb-radio-el").addClass("checked"))})},actionNone:function(a,r){var e="change";a.attr("data-changemode")&&(e=a.attr("data-changemode")),a.on(e,function(){"range"===t(this).attr("type")&&t(this).closest(".form-group").find(".numval").html(t(this).val()),"radio"===t(this).attr("type")&&(t(this).closest(".mb2-pb-radioform-group").find(".mb2-pb-radio-el").removeClass("checked"),t(this).closest(".mb2-pb-radio-el").addClass("checked"))})},actionData:function(a,r){a.on("input",function(){r.attr("data-"+t(this).attr("data-attrname"),t(this).val()),"radio"===t(this).attr("type")&&(t(this).closest(".mb2-pb-radioform-group").find(".mb2-pb-radio-el").removeClass("checked"),t(this).closest(".mb2-pb-radio-el").addClass("checked"))})},actionSetting:function(r,e){r.on("input",function(){e.attr("data-"+t(this).attr("data-attrname"),t(this).val());var r=t(this).closest(a.builder.modal).find('[data-attrname="'+t(this).attr("data-setting")+'"]');e.find(r.attr("data-selector")).css("left","auto"),e.find(r.attr("data-selector")).css("right","auto"),e.find(r.attr("data-selector")).css(t(this).val(),e.attr("data-"+t(this).attr("data-setting"))+r.attr("data-style_suffix")),"radio"===t(this).attr("type")&&(t(this).closest(".mb2-pb-radioform-group").find(".mb2-pb-radio-el").removeClass("checked"),t(this).closest(".mb2-pb-radio-el").addClass("checked"))})}}});
