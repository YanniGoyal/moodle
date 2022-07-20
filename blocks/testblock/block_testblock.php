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
 *
 * @package   block_testblock
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

class block_testblock extends block_base {
    public function init() {
        $this->title = get_string('pluginname', 'block_testblock');
    }
     
    public function get_content() {
        global $DB, $OUTPUT, $USER;
        
        if ($this->content !== null) {
          return $this->content;
        }
        $avataroptions = [
            'size' => 30,
            'class' => 'userpicture align-middle',
            'visibletoscreenreaders' => true,
            'link' => true,
        ];
        
        $user= '<div style="padding:2px">' . $OUTPUT->user_picture($USER, $avataroptions)  . $USER->firstname . ' ' . $USER->lastname. '<br>'. $USER->email . '<br>' . '</div>'; 
        
        $this->content         =  new stdClass;
        $this->content->text   = $user;
        
     
        return $this->content;
    }
}
