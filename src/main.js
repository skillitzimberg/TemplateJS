import $ from 'jquery';
import { TemplateJS } from './TemplateJS';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  var greeting = new TemplateJS('Hello from TemplateJS!');
  $('#helloWorld').append(greeting);
});
