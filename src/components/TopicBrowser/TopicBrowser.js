import React from 'react';
import {Component} from 'react'; //must deconstruct by using {}
import EvenAndOdd from './../Topics/EvenAndOdd';
import FilterObject from './../Topics/FilterObject';
import FilterString from './../Topics/FilterString';
import Palindrome from './../Topics/Palindrome';
import Sum from './../Topics/Sum';
// import FilterObject 

class TopicBrowser extends Component{
    constructor (){
        super();
    }
    render(){
        return(
            <div>
            <EvenAndOdd/>
            <FilterObject/>
            <FilterString/>
            <Palindrome/>
            <Sum/>
            </div>
        )
    }
}

export default TopicBrowser;