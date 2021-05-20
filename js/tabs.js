const tabHandlerItems = document.querySelectorAll('[data-tabs-handler]');
const tabFieldItems = document.querySelectorAll('[data-tabs-field]');
const designTitles = document.querySelectorAll('.design__title');


tabHandlerItems.forEach((handler, idx) => {
    handler.addEventListener('click', () => {
        for(const a of tabHandlerItems) {
             if(handler === a) {
                a.classList.add('design-list__item_active');
             } else {
                a.classList.remove('design-list__item_active');
             }
        }

        for(const field of tabFieldItems) {
            if (field.dataset.tabsField === handler.dataset.tabsHandler) {
                field.classList.remove('hidden')
            } else {
                field.classList.add('hidden')
            }
        }

        designTitles.forEach((designTitle, designTitleIdx) => {
            if(idx === designTitleIdx) {
                designTitle.classList.remove('hidden')
            } else {
                designTitle.classList.add('hidden')
            }
        })
    })
})