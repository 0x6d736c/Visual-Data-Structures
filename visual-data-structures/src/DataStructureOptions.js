import { Component } from 'react';
import List from './List';

/**
 * Creates the header for the Data Visualization Tool. Mostly just for aesthetics. May offer navigation features in future.
 */
function DataStructureOptions({dataStructure}) {


    if (dataStructure.includes("list")) {
        return (<List/>);
    } else {
        return (<List/>); //change this
    }
}

export default DataStructureOptions;