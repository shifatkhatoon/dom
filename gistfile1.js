const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const dom = new JSDOM(`<body></body>`, { runScripts: "dangerously" });


function createDom(total) {
    for (var i = 0; i < total; i++) {
        var btn = dom.window.document.createElement('button');
        // console.log(btn);
        // var b = dom.window.document.createTextNode('Button ' + i);
        // console.log(b);
        // btn.appendChild(b);
        btn.appendChild(dom.window.document.createTextNode('Button ' + i));
        btn.addEventListener('click', function(){ console.log(i); });
        dom.window.document.body.appendChild(btn);
    }
}

function testDom(which) {
    var evt = dom.window.document.createEvent("HTMLEvents");
    evt.initEvent("click", false, false);
    // console.log("jbnjn",dom.window.document.body.children[which]);
    // console.log(dom.window.document.body);
    dom.window.document.body.children[which].dispatchEvent(evt);
}

var args = process.argv.slice(2);
// var args = [1, 0];
createDom(args[0])
testDom(args[1])

