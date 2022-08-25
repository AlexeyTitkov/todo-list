import {Component} from "../core/component.js";
import {Storage} from "../core/storage.js";

export class ThemeComponent extends Component {
    constructor(id, pageConteiner) {
        super(id);
        this.pageConteiner = pageConteiner
    }

    init() {
        if (Storage.getTodoInfo()) {
            this.component.value = Storage.getTodoInfo().theme
        } else {
            this.component.value = 'gray'
        }

        this.component.addEventListener('change', onThemeHandler.bind(this))
    }
    value() {
        return this.component.value
    }
}

function onThemeHandler(e) {
    Storage.setTheme(e.target.value)

    let classList = this.pageConteiner.classList
    Array.from(classList).forEach(theme => {
        if (theme !== 'page-application') {
            this.pageConteiner.classList.remove(theme)
        }

    })

    this.pageConteiner.classList.add(e.target.value)
}