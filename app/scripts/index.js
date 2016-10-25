var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var AppComponent = require('./components/app.jsx').AppComponent;

// DOM Ready
$(function(){
  ReactDOM.render(
    React.createElement(AppComponent),
    document.getElementById('app')
  );
});
