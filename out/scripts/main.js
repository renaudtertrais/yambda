document.querySelectorAll('.code').forEach(function(domNode) {
    var code = domNode.textContent;
    console.dir(domNode)
    domNode.innerHTML = '';

    CodeMirror(domNode, {
        value: code,
        mode: 'javascript',
        theme: 'dracula',
        lineNumbers: domNode.className.indexOf('linenumber') > -1,
        readOnly: true
    });

});
