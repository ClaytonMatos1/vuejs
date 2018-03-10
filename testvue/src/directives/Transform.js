export default {
    bind(el, binding, vnode) {
        let current = 0;
        el.addEventListener('dblclick', function () {
            let increment = binding.value || 0,
                effect;

            if (!binding.arg || binding.arg == 'rotate') {
                if (binding.modifiers.reverse) {
                    current -= increment;
                } else {
                    current+=increment;
                }
                effect = `rotate(${current}deg)`;
            } else if (binding.arg == 'scale') {
                effect = `scale(${increment})`;
            }
            this.style.transform = effect;

            if (binding.modifiers.animate) {
                this.style.transition = 'transform 0.5s';
            }
        })
    }
}