import { PluginFunction } from 'vue';
import { transferDom } from './transfer-dom';

export const TransferDom: PluginFunction<{ name: string }> = (Vue, options) => {
    const name = options?.name ?? 'transferDom';
    Vue.directive(name, transferDom(name));
};
