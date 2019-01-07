import $ from 'jquery';
// import { TemplateJS } from './TemplateJS';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  function sayHello() {
    var greeting = 'Hello from TemplateJS!';
    alert(greeting);
  }
  sayHello();
});
