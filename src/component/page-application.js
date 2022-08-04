import {Component} from "../core/component.js";

export class PageApplication extends Component {
    constructor(id, pageAuthorization) {
        super(id);
        this.pageAuthorizatoin = pageAuthorization
    }
    init() {
        this.logoutBtn = document.getElementById('logout')
        this.logoutBtn.addEventListener('click', onLogoutHandler.bind(this))

    }
}

function onLogoutHandler() {
    this.hide()
    localStorage.setItem('selectedUserId', null)
    this.pageAuthorizatoin.show()

}