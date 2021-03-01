import { Component } from 'react';
import Selection from './Selection';
import DataStructureOptions from "./DataStructureOptions";

/**
 * Creates the footer for the Data Visualization Tool. Splits into two panes: left and right.
 * Left pane will always show options to choose from (data structures)
 * Right pane will be options for current data structure
 */
function Footer({dataStructure, onSelectStructure}) {
        return (
            <div>
                <Selection onSelectStructure={onSelectStructure} dataStructure={dataStructure}/>
                <DataStructureOptions dataStructure={dataStructure}/>
            </div>
        );
}

export default Footer;