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
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Tags block.
 * @param \renderer_base
 * @package   block_course_overview
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

use core_completion\progress;
// require_once('settings.php');
class block_course_overview extends block_base {
    private $displaygroupingall;
    private $displaygroupinginprogress;
    private $displaygroupingpast;
    private $displaygroupingfuture;
    private $config_numofcourses;
    public function init() {
        $this->title = get_string('pluginname', 'block_course_overview');
    }
    public static function get_course_image($course) {
        $image = \cache::make('core', 'course_image')->get($course->id);

        if (is_null($image)) {
            $image = false;
        }

        return $image;
    }
    public function has_config() {
        return true;
    }
    public function get_content() {

        global $DB, $OUTPUT, $USER, $COURSE,$CFG,$PAGE;
        $config = get_config('block_course_overview');
        require_once($CFG->libdir . '/completionlib.php');
        // require_once($CFG->dirroot . '\completion\classes\progress.php');
        // print_r($CFG);die;
        $PAGE->requires->jquery();
        $PAGE->requires->js_call_amd('block_course_overview/course_overview','Init');

        $this->content =  new stdClass;
        $checkbox = get_config(plugin: "block_course_overview", name: "checkbox");
        if($checkbox) {
            print_r('dd');die;
        }
        if (! empty($this->config->text)) {
            $this->content->text = $this->config->text;
        }
        $page = $config->config_numofcourses;
        $courses = enrol_get_all_users_courses($USER->id, true);
        $courselist = [];
        $courseType = [];
        foreach($courses as $course) {
            $courseCategory = $DB->get_record('course_categories', ['id' => $course->category]);
            $courseImageUrl = \core_course\external\course_summary_exporter::get_course_image($course);
            $course->id  = $course->id;
            $course->fullname = $course->fullname;
            $course->courseCategory = $courseCategory->name;
            if($courseImageUrl != NULL) {
                $course->courseimageurl = $courseImageUrl;
            } else { 
                $course->courseimageurl = $OUTPUT->get_generated_image_for_id($course->id);
            }
            $course->progress = (int)(\core_completion\progress::get_course_progress_percentage($course, $USER->id));
            $coursedates = $DB->get_record('course', ['id' => $course->id]);
            $courselist[] = $course;
        }
        $courseType['allcourses'] = $courselist;
        $courseType['displaygroupingall'] = $config->displaygroupingall;
        $courseType['displaygroupinginprogress'] = $config->displaygroupinginprogress;
        $courseType['displaygroupingpast'] = $config->displaygroupingpast;
        $courseType['displaygroupingfuture'] = $config->displaygroupingfuture;
        $this->content->text = $OUTPUT->render_from_template('block_course_overview/main', $courseType);
    }
   
   
}
