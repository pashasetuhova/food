function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {

    const tabs = document.querySelectorAll(tabsSelector),
    tabContent = document.querySelectorAll(tabsContentSelector),
    tabsParent = document.querySelector(tabsParentSelector);

    function hideTabContent() { /* скрываем контент всех табов */
        tabContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
      
        tabs.forEach(item => {
            item.classList.remove(activeClass); /* убираем класс активности у всех табов */
          /* точка не ставится, так как classList уже определяет работу с классами */
        });
    }

    function showTabContent(i = 0) { /* показываем контент табов */ /* ставим дефолтное значение 0 */
        tabContent[i].classList.remove('hide');
        tabContent[i].classList.add('show', 'fade');
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent(); /* функция вызывается без аргумента, но выше объявлено дефолтное значение */

    tabsParent.addEventListener('click', (e) => {
        const target = e.target; 

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i); /* i - номер элемента, который совпал в этом условии */
                }
            });
        }
    });
}

export default tabs;