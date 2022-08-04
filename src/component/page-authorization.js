import {Component} from "../core/component.js";
import {SingInComponent} from "./sing-in.js";
import {SingUpComponent} from "./sing-up.js";

class PageAuthorizationComponent extends Component {
    constructor(id) {
        super(id)

    }

    init() {
        this.singIn = new SingInComponent('sing-in', this)
        this.singUp = new SingUpComponent('sing-up', this)
        this.links = this.component.querySelectorAll('.form__link')
        this.links.forEach(link => {
            link.addEventListener('click', onChangeFormHandler.bind(this))
        })
    }
}

function onChangeFormHandler(e) {
    e.preventDefault()
    if (e.target.classList.contains('link-in')) {
        this.singIn.show()
        this.singUp.hide()
    } else if (e.target.classList.contains('link-up')) {
        this.singIn.hide()
        this.singUp.show()
    }
}


export default PageAuthorizationComponent

