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
define(["jquery","core/ajax","core/notification","core/str"],function(e,t,n,a){var i=function(t){var n="",a=e(".mb2-pb-events-items.active");n+='<div class="event-item-'+t.eventid+'">',n+="<h4>eventContent response:"+t.eventid+"</h4>",n+="</div>",a.append(n),s(t.eventid)},o=function(){var e="";return e+='<div id="mb2-pb-events-modal" class="modal theme-modal fade" role="dialog" tabindex="0" aria-labelledby="mb2-pb-events-modal" aria-describedby="mb2-pb-events-modal" aria-modal="true">',e+='<div class="modal-dialog" role="document">',e+='<div class="modal-content">',e+='<div class="theme-modal-container">',e+='<button class="close-container themereset" data-dismiss="modal" aria-label="'+M.util.get_string("closebuttontitle")+'">&times;</button>',e+='<div class="event-modal-content"></div>',e+="</div>",e+='<button class="themereset themekeynavonly" data-dismiss="modal">'+M.util.get_string("closebuttontitle")+"</button>",e+="</div>",e+="</div>",e+="</div>",e+="</div>"},s=function(t){var n=e(".mb2-pb-events-items.active").find(".event-item-"+t).clone();e("#mb2-pb-events-modal").find(".event-modal-content").append(n),e(".mb2-pb-events-items").removeClass("active")};return{eventDetails:function(){e(".event-show").each(function(){e(this).click(function(a){var d=e(this),l=d.closest(".theme-event-item").attr("data-id"),m=d.closest(".mb2-pb-events").find(".mb2-pb-events-items"),v=m.find(".event-item-"+l);a.preventDefault(),m.addClass("active"),e("#mb2-pb-events-modal").length?e("#mb2-pb-events-modal").find(".event-modal-content").html(""):e("body").append(o()),e("#mb2-pb-events-modal").modal("show"),v.length?s(l):t.call([{methodname:"theme_mb2nl_event_details",args:{eventid:l},done:function(e){i(e)},fail:n.exception}]),console.log("eventDetails:click - event-show")})})}}});
