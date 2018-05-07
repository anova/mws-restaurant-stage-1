//responsive debugger
//from my pixel based work, to rem
//see also: https://gist.github.com/anova/00373622ae7c1ca7f085
let style_ = '',
  style = document.createElement('style'),
  div = document.createElement('div');

for(var i=1; i<1000; i++){
	style_ += '@media (min-width:' + i + 'rem){ #responsive-debugger-width:after{ content:"(min-width: ' + i + 'rem)"}}\n';
	style_ += '@media (min-height:' + i + 'rem){ #responsive-debugger-height:after{ content:"(min-height: ' + i + 'rem)"}}\n';
}

style_ += '#responsive-debugger{ position: fixed; bottom:0; left:0; z-index: 9999; background-color:white; color: red; padding:10px; opacity: .3; }\n';
style_ += '#responsive-debugger:hover , #responsive-debugger:focus { opacity: 1; }\n';
style.id = 'responsive-debugger-style';
style.innerHTML = style_;
document.body.appendChild(style);

div.id = 'responsive-debugger';
div.setAttribute('tabindex', '0');//mobile has not hover
div.innerHTML = '<span id="responsive-debugger-width"></span>x<span id="responsive-debugger-height"></span>';
document.body.appendChild(div);