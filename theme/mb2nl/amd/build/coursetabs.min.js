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
 define(["jquery","core/ajax","core/notification","theme_mb2nl/carousel"],function(t,e,a,s){var r=function(t){this.registerEventListeners()};return r.prototype._getCourses=function(s){s.preventDefault(),t(".mb2-pb-coursetabs").removeClass("coursetabs-active");var r=t(s.currentTarget),c=t(s.currentTarget).closest(".mb2-pb-coursetabs");c.addClass("coursetabs-active");var o=t(".coursetabs-active #"+r.attr("data-uniqid")+"_category-content-"+r.attr("data-category"));if(t(".coursetabs-active .coursetabs-catitem").removeClass("active"),r.addClass("active"),t(".coursetabs-active .coursetabs-content").removeClass("active"),o.addClass("active"),o.hasClass("fillin"))return null;o.addClass("loading"),e.call([{methodname:"theme_mb2nl_coursetabs",args:{category:r.attr("data-category"),filtertype:c.attr("data-filtertype"),limit:c.attr("data-limit"),carousel:c.attr("data-carousel"),columns:c.attr("data-columns"),gutter:c.attr("data-gutter"),catdesc:c.attr("data-catdesc")},done:this._handleResponse.bind(this),fail:a.exception}])},r.prototype._handleResponse=function(e){var a=t(".coursetabs-active .coursetabs-content.active");a.html(e.courses),a.addClass("fillin");var r=a.find(".swiper");r.length&&(s.carouselInit(r.attr("id")),console.log("coursetabs: carouselInit"+r.attr("id")+"in section: "+a.attr("id"))),a.removeClass("loading")},r.prototype.registerEventListeners=function(){t(document).on("click",".coursetabs-catitem",this._getCourses.bind(this))},r});
