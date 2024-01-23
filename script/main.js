const lnb_btn = document.querySelector('.lnb_btn')
const lnb_btnImg = document.querySelector('.lnb_btn img')

const open = () => {
    wrap.classList.add('on');
    lnb_btnImg.setAttribute('src','img/bg_header_lnb_active.png')
}

const close = () => {
    wrap.classList.remove('on');
    lnb_btnImg.setAttribute('src','img/bg_header_lnb.png')
}
lnb_btn.addEventListener('click', open)
cover.addEventListener('click', close)
