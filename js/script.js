import tabs from './modules/tabs';
import timer from'./modules/timer';
import slider from './modules/slider';
import modal from './modules/modal';
import calc from './modules/calc';
import cards from './modules/cards';
import forms from './modules/forms';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimer = setTimeout(() => openModal('.modal', modalTimer), 50000);
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2022-08-08');
    slider({
        container: '.offer__slider', 
        slide: '.offer__slide', 
        nextArrow: '.offer__slider-next', 
        prevArrow: '.offer__slider-prev', 
        totalCounter: '#total', 
        currentCounter: '#current', 
        wrapper: '.offer__slider-wrapper', 
        field: '.offer__slider-inner'
    }); 
    modal('[data-modal]', '.modal', modalTimer);
    calc();
    cards();
    forms('form', modalTimer);
});





