//import 是ES6的模块化语法，我们这里用了babel插件来编译
 import 'babel-polyfill';
 import cats from './cats';
 import $ from 'jquery';

//混用require语法也可以的，因为有babel
require("./index.css");
require("./index.less");

 $('<h1>Cats</h1>').appendTo('body');
 const ul = $('<ul></ul>').appendTo('body');
 for (const cat of cats) {
     $('<li></li>').text(cat).appendTo(ul);
 }

//异步加载的dogs模块，引用的dogs.css会被编译到子模块中去
require.ensure(["./dogs"],function(dogs){

});