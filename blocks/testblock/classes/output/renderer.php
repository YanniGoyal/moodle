<?php
// Standard GPL and phpdocs
namespace block_testblock\output;                                                                                                         
                                                                                                                                    
defined('MOODLE_INTERNAL') || die;                                                                                                  
                                                                                                                                    
use plugin_renderer_base;  

class renderer extends plugin_renderer_base {
    /**                                                                                                                             
     * Defer to template.                                                                                                           
     *                                                                                                                              
     * @param index_page $page                                                                                                      
     *                                                                                                                              
     * @return string html for the page                                                                                             
     */                                                                                                                             
    public function render_index_page(main $main) {                                                                                      
        $data = $main->export_for_template($this);                                                                                  
        return $this->render_from_template('block_testblock/main', $data);                                                         
    }           
}