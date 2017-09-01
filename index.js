// umd https://github.com/umdjs/umd/blob/master/templates/returnExports.js
!function (root, install) {
  if (typeof define === 'function' && define.amd) {
    define([], { install: install })
  } else if (typeof module === 'object' && module.exports) {
    exports.install = install
  } else {
    root.VueTransferDom = { install: install }
  }
}(this, function (Vue, options) {

var name = (options && options.name) || 'transferDom'

// Define the directive
Vue.directive(name, {
  inserted: function (el, bindings, vnode) {
    // default append to <body>
    var container = bindings.arg
      ? document.getElementById(bindings.arg)
      : document.body
    if (container) {
    	( bindings.modifiers.prepend && container.firstChild )
	    	? container.insertBefore(el, container.firstChild)  // top of target
        :	container.appendChild(el)                         // bottom of target
    } else {
      console.warn(
        'v-' + name + ' target element id "' + bindings.arg + '" not found.'
      )
    }
  },
  unbind: function (el) {
    if(el.parentNode) {
    	el.parentNode.removeChild(el);    
    }
  }
})

})
