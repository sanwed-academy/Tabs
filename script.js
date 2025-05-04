class Tabs {
    constructor(selector, startIndex = 0) {
        this.container = document.querySelector(selector);
        this.navButtons = this.container.querySelector('.tabs__nav').children;
        this.panels = this.container.querySelector('.tabs__content').children;
        this.activeTabIndex = startIndex;

        this.init();
    }

    init() {
        Array.from(this.navButtons).forEach((btn, index) => {
            btn.addEventListener('click', () => this.changeTab(index));
            if (index === this.activeTabIndex) {
                btn.classList.add('active');
            }
        });

        Array.from(this.panels).forEach((panel, index) => {
            if (index !== this.activeTabIndex) {
                panel.classList.add('hide');
            }
        })
    }

    changeTab(index) {
        this.navButtons[this.activeTabIndex].classList.remove('active');
        this.panels[this.activeTabIndex].classList.add('hide');

        this.activeTabIndex = index;

        this.navButtons[this.activeTabIndex].classList.add('active');
        this.panels[this.activeTabIndex].classList.remove('hide');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Tabs('#my-tabs');
});