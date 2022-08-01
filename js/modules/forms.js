import {closeModal, openModal} from './modal';
import {postData} from '../services/services';

function forms(formSelector, modalTimer) {
        const forms = document.querySelectorAll(formSelector);

        const message = {
            loading: 'icons/spinner.svg',
            success: 'Спасибо! Скоро мы с Вами свяжемся',
            failure: 'Что-то пошло не так...'
        };
    
        forms.forEach(item => {
            bindPostData(item);
        });
    
        function bindPostData(form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
    
                const statusMessage = document.createElement('img');
                statusMessage.src = message.loading;
                statusMessage.style.cssText = `
                    margin: 0 auto;
                    display: block;
                `;
                form.insertAdjacentElement('afterend', statusMessage);
    
                const formData = new FormData(form);
    
                const json = JSON.stringify(Object.fromEntries(formData.entries()));
    
                postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                }).catch(() => {
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                });
            });
        }
    
        function showThanksModal(message) {
            const prevModal = document.querySelector('.modal__dialog');
    
            prevModal.classList.add('hide');
            openModal('.modal', modalTimer);
    
            const thanksModal = document.createElement('div');
            thanksModal.classList.add('modal__dialog');
            thanksModal.innerHTML = `
            <div class="modal__content">
            <div data-close class="modal__close">&times;</div>
            <div class="modal__title">${message}</div>
            </div>
            `;
    
            document.querySelector('.modal').append(thanksModal);
            
            setTimeout(() => {
                thanksModal.remove();
                prevModal.classList.add('show');
                prevModal.classList.remove('hide');
                closeModal('.modal');
            }, 4000);
        }
    
        fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));
}

export default forms;