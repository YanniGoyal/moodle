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
 * @package    local_mb2builder
 * @copyright  2018 - 2020 Mariusz Boloz (https://mb2themes.com/)
 * @license   Commercial https://themeforest.net/licenses
 */

defined( 'MOODLE_INTERNAL' ) || die();

$mb2_settings = array(
	'id' => 'imageboxes',
	'title' => get_string( 'imageboxes', 'local_mb2builder' ),
	'items' => array(
		array(
			'name' => 'imageboxes-1',
			'thumb' => 'imageboxes-1',
			'tags' => 'imageboxes',
			'data' => '{"type":"mb2pb_row","settings":{"id":"row","bgfixed":"0","colgutter":"s","prbg":"0","scheme":"light","rowhidden":"0","pt":"70","pb":"10","fw":"0","rowaccess":"0","elname":"Row"},"attr":[{"type":"mb2pb_col","settings":{"id":"column","col":"6","pt":"0","pb":"30","mobcenter":"0","moborder":"0","align":"none","height":"0","scheme":"light","elname":"Column"},"attr":[{"type":"mb2pb_el","settings":{"id":"title","tag":"h4","align":"left","issubtext":"0","subtext":"Subtext here","size":"n","sizerem":"2.4","fweight":"400","lspacing":"0","wspacing":"0","upper":"0","style":"1","mt":"0","mb":"30","content":"Praesent ut ligula non","elname":"Title"},"attr":[]},{"type":"mb2pb_el","settings":{"id":"text","size":"n","sizerem":"1","showtitle":"0","fweight":"400","lspacing":"0","wspacing":"0","upper":"0","title":"Title text","mt":"0","mb":"30","content":"<p>Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt. Donec velit neque, auctor.</p>","elname":"Text"},"attr":[]},{"type":"mb2pb_el","settings":{"id":"button","type":"primary","size":"lg","link":"#","target":"0","fw":"0","fweight":"400","lspacing":"0","wspacing":"0","rounded":"0","upper":"0","ml":"0","mr":"0","mt":"0","mb":"0","border":"0","center":"0","text":"Read more","elname":"Button"},"attr":[]}]},{"type":"mb2pb_col","settings":{"id":"column","col":"6","pt":"0","pb":"30","mobcenter":"0","moborder":"0","align":"none","height":"0","scheme":"light","elname":"Column"},"attr":[{"type":"mb2pb_el","settings":{"id":"boxesimg","columns":"2","type":"1","mt":"0","mb":"0","gutter":"normal","elname":"Boxes - image"},"attr":[{"type":"mb2pb_subel","settings":{"id":"boxesimg_item","image":"mb2sampledata:2020/08/office-2070806","link_target":"0","color":"rgba(230, 57, 70, 0.6)","text":"Sed augue ipsum","elname":"Box image"},"attr":[]},{"type":"mb2pb_subel","settings":{"id":"boxesimg_item","image":"mb2sampledata:2020/08/code-1839406","link_target":"0","color":"rgba(17, 157, 101, 0.6)","text":"Vestibulum eu odio","elname":"Box image"},"attr":[]},{"type":"mb2pb_subel","settings":{"id":"boxesimg_item","image":"mb2sampledata:2020/08/books-1943625","link_target":"0","color":"rgba(251, 139, 36, 0.6)","text":"Donec vitae sapien","elname":"Box image"},"attr":[]},{"type":"mb2pb_subel","settings":{"id":"boxesimg_item","image":"mb2sampledata:2020/08/apple-1850613","link_target":"0","color":"rgba(3, 56, 96, 0.6)","text":"Curabitur a felis","elname":"Box image"},"attr":[]}]}]}]}'
		),
		array(
			'name' => 'imageboxes-2',
			'thumb' => 'imageboxes-2',
			'tags' => 'imageboxes fullwidth',
			'data' => '{"type":"mb2pb_row","settings":{"id":"row","bgfixed":"0","colgutter":"l","prbg":"0","scheme":"light","rowhidden":"0","pt":"0","pb":"0","fw":"1","rowaccess":"0","elname":"Row"},"attr":[{"type":"mb2pb_col","settings":{"id":"column","col":"6","pt":"70","pb":"40","mobcenter":"1","moborder":"0","align":"none","height":"0","scheme":"dark","bgcolor":"rgb(28, 37, 65)","elname":"Column"},"attr":[{"type":"mb2pb_el","settings":{"id":"title","tag":"h4","align":"left","issubtext":"0","subtext":"Subtext here","size":"n","sizerem":"2.4","fweight":"400","lspacing":"0","wspacing":"0","upper":"0","style":"1","mt":"0","mb":"30","content":"Praesent ut ligula non","elname":"Title"},"attr":[]},{"type":"mb2pb_el","settings":{"id":"text","align":"none","size":"n","sizerem":"1","showtitle":"0","fweight":"400","lspacing":"0","wspacing":"0","upper":"0","title":"Title text","mt":"0","mb":"30","content":"<p>Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt. Donec velit neque, auctor. Vivamus consectetuer hendrerit lacus. Phasellus consectetuer vestibulum elit. Ut non enim eleifend felis pretium feugiat. Aenean imperdiet. Vestibulum fringilla pede sit amet augue.</p>","elname":"Text"},"attr":[]},{"type":"mb2pb_el","settings":{"id":"button","type":"primary","size":"lg","link":"#","target":"0","fw":"0","fweight":"400","lspacing":"0","wspacing":"0","rounded":"0","upper":"0","ml":"0","mr":"20","mt":"0","mb":"0","border":"0","center":"0","text":"Read more","elname":"Button"},"attr":[]},{"type":"mb2pb_el","settings":{"id":"button","type":"success","size":"lg","link":"#","target":"0","fw":"0","fweight":"400","lspacing":"0","wspacing":"0","rounded":"0","upper":"0","ml":"0","mr":"0","mt":"0","mb":"0","border":"1","center":"0","text":"Apply now","elname":"Button"},"attr":[]}]},{"type":"mb2pb_col","settings":{"id":"column","col":"6","pt":"70","pb":"40","mobcenter":"0","moborder":"0","align":"none","height":"0","scheme":"light","bgcolor":"rgb(231, 233, 235)","elname":"Column"},"attr":[{"type":"mb2pb_el","settings":{"id":"boxesimg","columns":"2","type":"1","mt":"0","mb":"0","gutter":"normal","elname":"Boxes - image"},"attr":[{"type":"mb2pb_subel","settings":{"id":"boxesimg_item","image":"mb2sampledata:2020/08/office-2070806","link_target":"0","color":"rgba(230, 57, 70, 0.6)","text":"Sed augue ipsum","elname":"Box image"},"attr":[]},{"type":"mb2pb_subel","settings":{"id":"boxesimg_item","image":"mb2sampledata:2020/08/code-1839406","link_target":"0","color":"rgba(17, 157, 101, 0.6)","text":"Vestibulum eu odio","elname":"Box image"},"attr":[]},{"type":"mb2pb_subel","settings":{"id":"boxesimg_item","image":"mb2sampledata:2020/08/books-1943625","link_target":"0","color":"rgba(251, 139, 36, 0.6)","text":"Donec vitae sapien","elname":"Box image"},"attr":[]},{"type":"mb2pb_subel","settings":{"id":"boxesimg_item","image":"mb2sampledata:2020/08/apple-1850613","link_target":"0","color":"rgba(3, 56, 96, 0.6)","text":"Curabitur a felis","elname":"Box image"},"attr":[]}]}]}]}'
		),
		array(
			'name' => 'imageboxes-3',
			'thumb' => 'imageboxes-3',
			'tags' => 'imageboxes',
			'data' => '{"type":"mb2pb_row","settings":{"id":"row","bgcolor":"rgb(29, 53, 87)","bgfixed":"0","colgutter":"s","prbg":"0","scheme":"dark","rowhidden":"0","pt":"70","pb":"10","fw":"0","rowaccess":"0","elname":"Row"},"attr":[{"type":"mb2pb_col","settings":{"id":"column","col":"6","pt":"0","pb":"30","mobcenter":"0","moborder":"0","align":"none","height":"0","scheme":"light","elname":"Column"},"attr":[{"type":"mb2pb_el","settings":{"id":"boxesimg","columns":"2","type":"1","mt":"0","mb":"0","gutter":"normal","elname":"Boxes - image"},"attr":[{"type":"mb2pb_subel","settings":{"id":"boxesimg_item","image":"mb2sampledata:2020/08/office-2070806","link_target":"0","color":"rgba(230, 57, 70, 0.6)","text":"Sed augue ipsum","elname":"Box image"},"attr":[]},{"type":"mb2pb_subel","settings":{"id":"boxesimg_item","image":"mb2sampledata:2020/08/code-1839406","link_target":"0","color":"rgba(17, 157, 101, 0.6)","text":"Vestibulum eu odio","elname":"Box image"},"attr":[]},{"type":"mb2pb_subel","settings":{"id":"boxesimg_item","image":"mb2sampledata:2020/08/books-1943625","link_target":"0","color":"rgba(251, 139, 36, 0.6)","text":"Donec vitae sapien","elname":"Box image"},"attr":[]},{"type":"mb2pb_subel","settings":{"id":"boxesimg_item","image":"mb2sampledata:2020/08/apple-1850613","link_target":"0","color":"rgba(3, 56, 96, 0.6)","text":"Curabitur a felis","elname":"Box image"},"attr":[]}]}]},{"type":"mb2pb_col","settings":{"id":"column","col":"6","pt":"0","pb":"30","mobcenter":"0","moborder":"0","align":"none","height":"0","scheme":"light","elname":"Column"},"attr":[{"type":"mb2pb_el","settings":{"id":"heading","tag":"h2","size":"2.4","align":"none","fweight":"700","lspacing":"0","wspacing":"0","upper":"1","mt":"0","mb":"30","template":"1","content":"Etiam sit amet orci eget","elname":"Heading"},"attr":[]},{"type":"mb2pb_el","settings":{"id":"text","align":"none","size":"n","sizerem":"1","showtitle":"0","fweight":"400","lspacing":"0","wspacing":"0","upper":"0","title":"Title text","mt":"0","mb":"30","content":"<p>Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt. Donec velit neque, auctor.</p>","elname":"Text"},"attr":[]},{"type":"mb2pb_el","settings":{"id":"button","type":"primary","size":"lg","link":"#","target":"0","fw":"0","fweight":"400","lspacing":"0","wspacing":"0","rounded":"0","upper":"0","ml":"0","mr":"0","mt":"0","mb":"0","border":"0","center":"0","text":"Read more","elname":"Button"},"attr":[]}]}]}'
		)
	)
);

define( 'LOCAL_MB2BUILDER_IMPORT_BLOCKS_IMAGEBOXES', base64_encode( serialize( $mb2_settings ) ) );
