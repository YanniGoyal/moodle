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
function pagination($page, $perpage, $courses) {

    $results = $courses;
    $start = $page * $perpage;
    if ($start > count($results)) {
        $page = 0;
        $start = 0;
    }
    $courses = array_slice($results, $start, $perpage, true);
    return $courses;
}
class block_course_overview extends block_base {
    private $displaygroupingall;
    private $displaygroupinginprogress;
    private $displaygroupingpast;
    private $displaygroupingfuture;
    private $config_numofcourses;
    public function init() {
        $this->title = get_string('pluginname', 'block_course_overview');
    }
    public function has_config() {
        return true;
    }
    public function get_content() {
        global $DB, $OUTPUT, $USER, $COURSE, $CFG, $PAGE;
        
        $config = get_config('block_course_overview');
        require_once($CFG->libdir . '/completionlib.php');
        $data['numofcoursesshow'] = $config->config_numofcourses;
        $data['displaygroupingall'] = $config->displaygroupingall;
        $data['displaygroupinginprogress'] = $config->displaygroupinginprogress;
        $data['displaygroupingpast'] = $config->displaygroupingpast;
        $data['displaygroupingfuture'] = $config->displaygroupingfuture;
        $data['pasthtml'] = 1;
        $data['inProgresshtml'] = 1;
        $data['futurehtml'] = 1;
        $data['allhtml'] = 1;

        $this->content =  new stdClass;
        if (! empty($this->config->text)) {
            $this->content->text = $this->config->text;
        }
        $perpagecourse = $config->config_numofcourses;
        $courses = enrol_get_all_users_courses($USER->id, true);
        $courselist = [];
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
            if($coursedates->enddate > time() && $coursedates->startdate < time()) {
                $data['inProgresscourses'][] = $course;
            } else if($coursedates->enddate < time()) {
                $data['pastcourses'][] = $course;
            } else if($coursedates->startdate > time()) {
                $data['futurecourses'][] = $course;
            } 
            $courselist[] = $course;
        }
        $data['allcourses'] = $courselist;
        $all_key = array('all','future', 'past','inProgress');
        if($data['displaygroupingall']) {
            $key = $all_key[0];
        } else if($data['displaygroupingfuture']) {
            $key = $all_key[1];
        } else if($data['displaygroupingpast']) {
            $key = $all_key[2];
        } else if($data['displaygroupinginprogress']) {
            $key = $all_key[3];
        } else {
            $key = $all_key[0];
        }
        $courseCount = count($data[$key.'courses']);
        if($courseCount > $perpagecourse)  {
            $data['pagination'] = 1;
            $pages = ceil($courseCount / $perpagecourse);
            $data[$key.'courses'] = pagination(0, $perpagecourse, $courselist);
            $page_no = [];
            for($i = 1 ; $i <= $pages;$i++) {
                $key = new stdClass;
                $key->index = $i;
                $page_no[] = $key; 
            }
            $data['pages'] = $page_no;
        } else {
            $data['pagination'] = 0;
        } 
        $PAGE->requires->jquery();
        $PAGE->requires->js_call_amd('block_course_overview/course_overview','Init',array($pages, $perpagecourse));
        if($data['displaygroupingall']) {
            $data['value'] = 'all';
            $data['pasthtml'] = 0;
            $data['inProgresshtml'] = 0;
            $data['futurehtml'] = 0;
        } else if($data['displaygroupingfuture']) {
            $data['value'] = 'future';
            $data['pasthtml'] = 0;
            $data['inProgresshtml'] = 0;
            $data['allhtml'] = 0;
        } else if($data['displaygroupingpast']) {
            $data['value'] = 'past';
            $data['inProgresshtml'] = 0;
            $data['allhtml'] = 0;
            $data['futurehtml'] = 0;
        } else if($data['displaygroupinginprogress']) {
            $data['value'] = 'inProgress';
            $data['allhtml'] = 0;
            $data['pasthtml'] = 0;
            $data['futurehtml'] = 0;
        } else {
            $data['value'] = 'all';
            $data['pasthtml'] = 0;
            $data['inProgresshtml'] = 0;
            $data['futurehtml'] = 0;
        }
       
        $this->content->text = $OUTPUT->render_from_template('block_course_overview/main', $data);
    }
}
