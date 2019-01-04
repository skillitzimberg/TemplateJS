import { TemplateJS } from './TemplateJS';
import './styles.css';

$(document).ready(function() {
  var greeting = new TemplateJS('Hello, World!');
  $('#helloWorld').append(greeting);
});
