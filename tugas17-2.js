//back-tick multiline string `~(`)

var a = 
`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
like Aldus PageMaker including versions of Lorem Ipsum.`

var i0 = a.charCodeAt(0);
var i1 = a.charCodeAt(1);
var i2 = a.charCodeAt(2);
var i3 = a.charCodeAt(3);
var i4 = a.charCodeAt(4);
var i5 = a.charCodeAt(5);

console.log(i0+"-"+i1+"-"+i2+"-"+i3+"-"+i4+"-"+i5);