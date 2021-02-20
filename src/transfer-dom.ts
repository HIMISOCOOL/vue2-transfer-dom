import { DirectiveOptions } from 'vue';
import { ErrorLogger } from './logger';

/**
 * A directive to move an element to another location in the DOM
 * Useful in situations such as z-index management for modals, popups etc.
 *
 * @author Matthew Meehan <matusmarx@hotmail.com>
 *
 * @variation Troy Morehouse <https://github.com/tmorehouse/vue-transfer-dom>
 *
 * @example
 * const component = {
 *   // div will be appended to body(default)
 *   template: '<div v-transfer-dom>foo</div>'
 * }
 *
 * // prepend to body
 * const component = {
 *   // div will be prepended to body(default)
 *   template: '<div v-transfer-dom.prepend>foo</div>'
 * }
 *
 * Move to a specific target element identifed by target's id:
 *
 * // append to specific place
 * const component = {
 *   // div will be appended to #bar(document.getElementById)
 *   template: '<div v-transfer-dom:bar>foo</div>'
 * }
 *
 * // prepend to specific place
 * const component = {
 *   // div will be prepended to #bar(document.getElementById)
 *   template: '<div v-transfer-dom:bar.prepend>foo</div>'
 * }
 * 
 * // replace the content of an element
 * const component = {
 *   // div will replace the content of #bar(document.getElementById)
 *   template: '<div v-transfer-dom:bar.replace>foo</div>'
 * }
 */
export const transferDom = (name: string): DirectiveOptions => {
    const logError = ErrorLogger(name);

    const directive: DirectiveOptions = {
        inserted(el, { arg, modifiers }) {
            const container = arg
                ? // if passed an argument use this to get the element
                  document.getElementById(arg)
                : // otherwise just use the body
                  document.body;

            if (modifiers.replace && !arg) {
                logError(
                    'cannot use replace mode without an arg, your element will be appended to body'
                );
            }

            if (modifiers.prepend && modifiers.replace) {
                logError(
                    `cannot have both prepend and replace${
                        arg ? `, ${arg} will be replaced` : ''
                    }`
                );
            }

            if (container) {
                el.setAttribute('data-transfer-dom', '');
                if (modifiers.replace) {
                    container.replaceWith(el);
                } else if (modifiers.prepend) {
                    // if the prepend option is passed in and the container is not empty
                    container.firstChild
                        ? // insert the new element before the first child
                          container.insertBefore(el, container.firstChild)
                        : // otherwise just insert it
                          container.appendChild(el);
                } else {
                    container.appendChild(el);
                }
            } else {
                logError(`target element at #${arg} not found.`);
            }
        },
        unbind(el) {
            if (el.parentNode) {
                el.parentNode.removeChild(el);
            }
        }
    };
    return directive;
};
