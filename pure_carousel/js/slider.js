((d) => {
    let slider = Array.from(d.getElementsByClassName('slider'));
    slider.forEach((s) => {
        let container = Array.from(s.getElementsByClassName('slider__cnt'))[0],
            images = Array.from(s.getElementsByClassName('slider__el')),
            toggles = Array.from(s.getElementsByClassName('toggle')),
            reference = images[0],
            time = 500,
            next = (element) => {
                return element.nextElementSibling || images[0]
            },

            prev = (element) => {
                return element.previousElementSibling || images[images.length - 1];
            };

        container.dataset.isSet = '1';
        container.dataset.isReversing = '0';
        for (let i = 0; i < images.length; i++) {
            images[i].style.order = (i+1).toString();
        }

        for (let btn of toggles) {
            (function(b) {
                b.addEventListener('click', (e)=> {
                    if (container.dataset.isSet === '0') {
                        return ;
                    }
                    if (e.target.dataset.toggle === 'next') {
                        container.dataset.isSet = '0';
                        reference = next(reference);

                        setTimeout((function () {
                            for (let i = 1, tmp = reference; i <= images.length; i++, tmp = next(tmp)) {
                                tmp.style.order = i.toString();
                            }
                            return container.dataset.isSet = '1';
                        }), time);

                    } else {
                        container.dataset.isSet = '0';
                        container.dataset.isReversing = '1-5';
                        reference = prev(reference);

                        for (let i = 1, tmp = reference; i <= images.length; i++, tmp = next(tmp)) {
                            tmp.style.order = i.toString();
                        }

                        setTimeout(function() {
                            container.dataset.isReversing = '1';
                            setTimeout((function () {
                                container.dataset.isReversing = '0';
                                return container.dataset.isSet = '1';
                            }), time - 50);
                        },50);
                    }
                });
            })(btn);
        }
    });
})(document);