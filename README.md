# vue-transfer-dom

> requires Vue v2.+

Transfer DOM to another place (eg. `<body>`).

**Caveat: This directive has not fuly tested yet.**

Useful in some situations such as z-index management, see discussion [here](https://github.com/vuejs/vue/issues/2130).

## Installation

download or point your package.json to a fork of this repo

## Usage

```js
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
```

**Note:** If appending or prepending to a non-existant target element, an error will be thrown and the element will not be moved.

## Credits

Based on https://github.com/rhyzx/vue-transfer-dom for Vue 1.x
and https://github.com/tmorehouse/vue-transfer-dom for the Vue 2 port.
