# vue2-transfer-dom

> requires Vue v2.+

Transfer DOM to another place (eg. `<body>`).

**Caveat: This directive has not fuly tested yet.**

Useful in some situations such as z-index management, see discussion [here](https://github.com/vuejs/vue/issues/2130).

## Installation

download or point your package.json to a fork of this repo

## Usage

```js
import { VueTransferDom } from 'vue2-transfer-dom';

Vue.use(VueTransferDom /*, {name: 'transferDom'}*/);

new Vue({
    // div will be appended to body(default)
    template: '<div v-transfer-dom>foo</div>'
});

// prepend to body
new Vue({
    // div will be prepended to body(default)
    template: '<div v-transfer-dom.prepend>foo</div>'
});
```

Move to a specific target element identifed by target's id:

```js
// append to specific place
new Vue({
    // div will be appended to #bar(document.getElementById)
    template: '<div v-transfer-dom:bar>foo</div>'
});

// prepend to specific place
new Vue({
    // div will be prepended to #bar(document.getElementById)
    template: '<div v-transfer-dom:bar.prepend>foo</div>'
});

// replace the content of an element
new Vue({
    // div will replace the content of #bar(document.getElementById)
    template: '<div v-transfer-dom:bar.replace>foo</div>'
})
```

**Note:**
If appending, prepending or replacing a non-existant target element, an error will be logged and the element will not be moved.
If you use both replace and prepend, the target element will be replaced

## Credits

Based on https://github.com/rhyzx/vue-transfer-dom for Vue 1.x
and https://github.com/tmorehouse/vue-transfer-dom for the Vue 2 port.
