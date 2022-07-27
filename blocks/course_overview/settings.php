<?php
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
// along wewith Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Settings for the myoverview block
 *
 * @package    block_course_overview
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
defined('MOODLE_INTERNAL') || die; 

if ($ADMIN->fulltree) {
    require_once($CFG->dirroot . '/blocks/myoverview/lib.php');

    // Presentation options heading.
    $settings->add(new admin_setting_heading('block_course_overview/appearance',
            "Course Block Setting",
            ''));
    $settings->add(new admin_setting_configcheckbox(
            'block_course_overview/displaygroupingall',
            get_string('all', 'block_course_overview'),
            '',
            1));
    $settings->add(new admin_setting_configcheckbox(
            'block_course_overview/displaygroupingfuture',
            get_string('future', 'block_course_overview'),
            '',
            1));
            
    $settings->add(new admin_setting_configcheckbox(
            'block_course_overview/displaygroupingpast',
            get_string('past', 'block_course_overview'),
            '',
            1));
    $settings->add(new admin_setting_configcheckbox(
    'block_course_overview/displaygroupinginprogress',
    get_string('inprogress', 'block_course_overview'),
    '',
    1));


    $setting = new admin_setting_configtext('block_course_overview/config_numofcourses',
            new lang_string('defaultnumofcourses', 'block_course_overview'),
            new lang_string('defaultnumofcourses_desc', 'block_course_overview'), 9, PARAM_INT);
    $settings->add($setting);
    
}