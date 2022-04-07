/* eslint-disable */

export default {
    mounted(el, binding) {
        let options = {
            rootMargin: '0px',
            threshold: 1.0
        }
        let callback = (entries) => {
            if(entries[0].isIntersecting) {
                binding.value()
            };
        };
        let observer = new IntersectionObserver(callback, options);
        observer.observe(el);
    },
}