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
$courses = enrol_get_all_users_courses($USER->id, true);
$courseCount = count($courses) + 1;
if(count($courses) > 9 ) {
    $courses = pagination($_POST['page'],$_POST['perpage'],$courses);
    $pages = ceil($courseCount / 9);
    $perpage = $courseCount % 9;
    print_r($pages . " " .$perpage);
}   
$courselist = [];
$courseType = [];

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
    // if($progress != null) { 
        // $course->progress = $progress;
    // } 
    $coursedates = $DB->get_record('course', ['id' => $course->id]);
    if($coursedates->enddate > time() && $coursedates->startdate < time()) {
        $courseType['inProgress'][] = $course;
    } else if($coursedates->enddate < time()) {
        $courseType['pastcourses'][] = $course;
    } else if($coursedates->startdate > time()) {
        $courseType['futurecourses'][] = $course;
    } 
    $courselist[] = $course;
}
$courseType['allcourses'] = $courselist;
if($key == 'all'){
   echo $OUTPUT->render_from_template('block_course_overview/AllCourses', $courseType);
} else if($key == 'future') {
    echo $OUTPUT->render_from_template('block_course_overview/futureCourse', $courseType);
} else if($key == 'past') {
    echo $OUTPUT->render_from_template('block_course_overview/pastCourse', $courseType);
} else if($key == 'inProgress'){
    echo $OUTPUT->render_from_template('block_course_overview/inProgress', $courseType);
}


