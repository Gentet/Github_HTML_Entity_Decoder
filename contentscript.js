String.prototype.replaceAll = function (find, replace) {
	var str = this;
	return str.replace(new RegExp(find, 'g'), replace);
};

document.body.innerHTML = document.body.innerHTML
	.replaceAll('<!--amp;-->\"', '<!--amp;-->\&quot;')
	.replaceAll('<!--amp;-->\'', '<!--amp;-->&apos;')
	.replaceAll('((<!---->)?&(amp;)|<!--(amp;)-->&)(apos|quot|lt|gt|amp);', '<!--$3-->&$4$5;');