import { mount } from "vue-test-utils";
import App from "../../src/App";

describe('App.test', () => {
    test('Instância Vue', () => {
        const inst = mount(App);
        expect(inst.isVueInstance()).toBeTruthy();
    });
});