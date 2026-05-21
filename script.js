const elements =
document.querySelectorAll(
'.section, .card, .skill'
);

function reveal() {

    elements.forEach(el => {

        const top =
        el.getBoundingClientRect().top;

        const visible =
        window.innerHeight - 100;

        if(top < visible){

            el.classList.add('active');
        }

    });

}

elements.forEach(el => {

    el.classList.add('reveal');

});

window.addEventListener(
'scroll',
reveal
);

reveal();
