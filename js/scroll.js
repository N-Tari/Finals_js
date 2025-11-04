


export function scrollToTopFnc() {
    let scrollbtn = document.querySelector('.scrool_to_top')

    window.onscroll = function () {scrollfunction()};

    function scrollfunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollbtn.style.display = "block";
        } else {
            scrollbtn.style.display = "none";
        }
    }

    scrollbtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        });
        // scrollfunction()
    });
};
