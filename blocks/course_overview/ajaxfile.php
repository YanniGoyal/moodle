<?php
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
require_once('../../config.php');
global $DB, $OUTPUT, $USER, $COURSE, $CFG, $PAGE;
$context = context_system::instance();
$PAGE->set_context($context);
$key = $_REQUEST['key'];
$perpagecourse = $_REQUEST['numofcoursesshow'];
$start = $_REQUEST['start'];
$courses = enrol_get_all_users_courses($USER->id, true);
$courselist = [];
$data = [];
foreach($courses as $course) {
    $courseCategory = $DB->get_record('course_categories', ['id' => $course->category]);
    $courseImageUrl = \core_course\external\course_summary_exporter::get_course_image($course);
    $course->id  = $course->id;
    $course->fullname = $course->fullname;
    $course->courseCategory = $courseCategory->name;
    if($courseImageUrl != null) {
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
$courseCount = count($data[$key.'courses']);
if($courseCount > $perpagecourse)  {
    $data[$key.'courses'] = pagination($start,$perpagecourse,$data[$key.'courses']);
    $pages = ceil($courseCount / $perpagecourse);
    $perpage = $courseCount % $perpagecourse;
    $page_no = [];
    for($i = 1 ; $i <= $pages ; $i++) {
        $value = new stdClass;
        $value->index = $i;
        $page_no[] = $value; 
    }
    $data['pagination'] = 1;
    $data['pages'] = $page_no;
} else {
    $data['pagination'] = 0;
}
$data['course'] = [];
foreach($data[$key.'courses'] as $course) {
    $data['course'][] = $course;
}
$data[$key.'courses'] = $data['course'];

$data[$key.'html'] = 1;
$data['value'] = $key;
echo  $OUTPUT->render_from_template('block_course_overview/main', $data);

