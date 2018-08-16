import $ from 'jquery';
import whatInput from 'what-input';


window.$ = $;
//
import Foundation from 'foundation-sites';


$(document).foundation();
$(document).ready(()=>{
  $(".menu").on('click',()=>{
    $("#Menu").toggleClass('on')
  })
  $(".trailer").on('click',()=>{
    $("#Movie").toggleClass('on')
  })


})