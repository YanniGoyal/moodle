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
 *
 * @package   theme_mb2nl
 * @copyright 2017 - 2022 Mariusz Boloz (https://mb2themes.com)
 * @license   Commercial https://themeforest.net/licenses
 *
 */

defined('MOODLE_INTERNAL') || die();


/*
 *
 * Method to define site access
 *
 */
function theme_mb2nl_site_access( $courseid = NULL )
{

	global $PAGE, $COURSE, $USER;
	$access = 'none';
	$courseid = $courseid ? $courseid : $COURSE->id;

	$context = context_course::instance( $courseid );
	$course_cancreate = has_capability('moodle/course:create',$context);
	$course_canedit = has_capability('moodle/course:update',$context);
	$hidden_activities = has_capability('moodle/course:viewhiddenactivities',$context);
	//$manage_activities = has_capability('moodle/course:manageactivities', $context );
	$coursecat_canmanage = has_capability('moodle/category:manage', $context);
	$enrolled = is_enrolled($context, $USER->id,'',true);
	$site_canconfig = has_capability('moodle/site:config',$context);

	$access_admin = ($site_canconfig && $coursecat_canmanage && $course_canedit && $course_cancreate && $hidden_activities);
	$access_manager = ($coursecat_canmanage && $course_canedit && $course_cancreate && $hidden_activities);
	$access_teacher = ($hidden_activities && $course_canedit);
	$access_noediting_teacher = ($hidden_activities && ! $course_canedit);
	$access_creator = (!$course_canedit && $course_cancreate);
	$access_student = ($enrolled && isloggedin() && !isguestuser() && ! $hidden_activities);
	$access_user = (isloggedin() && !isguestuser());

	if ($access_admin)
	{
		$access = 'admin';
	}
	elseif ($access_manager)
	{
		$access = 'manager';
	}
	elseif ($access_teacher)
	{
		$access = 'editingteacher';
	}
	elseif ($access_noediting_teacher)
	{
		$access = 'teacher';
	}
	elseif ($access_creator)
	{
		$access = 'coursecreator';
	}
	elseif ($access_student)
	{
		$access = 'student';
	}
	elseif ($access_user)
	{
		$access = 'user';
	}

	return $access;

}


/*
 *
 * Method to define skiplinks
 *
 */
function theme_mb2nl_skiplinks()
{
	global $PAGE, $COURSE;

    if ( preg_match('@admin-local-mb2builder@', $PAGE->pagetype ) )
	{
		return;
	}

	$fullscreenmod = theme_mb2nl_full_screen_module();
	$isCourse = ( isset( $COURSE->id ) && $COURSE->id > 1 );
	$cant_see = array( 'none', 'user' );
	$course_access = theme_mb2nl_site_access();
	$can_manage = array('admin','manager','editingteacher','teacher');
	$course_manage_string = in_array( $course_access, $can_manage ) ? get_string('coursemanagement','theme_mb2nl') : get_string('coursedashboard','theme_mb2nl');
	$logintext =  ( isloggedin() && ! isguestuser() ) ? get_string('skiptoprofile','theme_mb2nl') : get_string('skiptologin','theme_mb2nl');

	if ( ! $fullscreenmod )
	{
		$PAGE->requires->skip_link_to( 'main-navigation', get_string('skiptonavigation','theme_mb2nl') );
		$PAGE->requires->skip_link_to( 'themeskipto-mobilenav', get_string('skiptonavigation','theme_mb2nl') );
		$PAGE->requires->skip_link_to( 'themeskipto-search', get_string('skiptosearch','theme_mb2nl') );
		$PAGE->requires->skip_link_to( 'themeskipto-login', $logintext );
	}

	if ( theme_mb2nl_theme_setting( $PAGE,'coursepanel' ) && $isCourse && ! in_array( $course_access, $cant_see ) )
	{
		$PAGE->requires->skip_link_to( 'themeskipto-coursepanel', $course_manage_string );
	}

	if ( ! $fullscreenmod )
	{
		$PAGE->requires->skip_link_to( 'footer', get_string('skiptofooter','theme_mb2nl') );
	}

}
