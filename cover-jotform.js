(function () {
    function coverElements() {
        const iframes = document.querySelectorAll('iframe');

        iframes.forEach(iframe => {
            const src = iframe.src || '';
            if (!src.includes('jotfor') && !iframe.id.includes('jotform') && !iframe.className.includes('jotform')) return;

            const container = iframe.parentElement;
            if (!container) return;

            const containerStyle = window.getComputedStyle(container);
            if (containerStyle.position === 'static') {
                container.style.position = 'relative';
            }

            if (!container.querySelector('.cover-disclaimer')) {
                const coverDisclaimer = document.createElement('div');
                coverDisclaimer.className = 'cover-disclaimer';
                Object.assign(coverDisclaimer.style, {
                    position: 'absolute',
                    bottom: '5px',
                    left: '0',
                    width: '100%',
                    height: '20px',
                    backgroundColor: '#ffffff',
                    zIndex: '9999',
                    pointerEvents: 'all',
                    cursor: 'default'
                });
                container.appendChild(coverDisclaimer);
            }
        });
    }

    coverElements();
    setTimeout(coverElements, 1000);
    setTimeout(coverElements, 2500);
    window.addEventListener('load', coverElements);
})();