import {Component} from "../core/component.js";
import {createPostFormModal} from "../main.js";


export class PageApplication extends Component {
    constructor(id, pageAuthorization) {
        super(id);
        this.pageAuthorizatoin = pageAuthorization
    }
    init() {
        this.logoutBtn = document.getElementById('logout')
        this.logoutBtn.addEventListener('click', onLogoutHandler.bind(this))
        this.createBtn = document.getElementById('create-btn')
        this.createBtn.addEventListener('click', onShowFormCreatePostHandler.bind(this))
    }
}


function onLogoutHandler() {
    this.hide()
    localStorage.setItem('selectedUserId', null)
    this.pageAuthorizatoin.show()

}

function onShowFormCreatePostHandler() {
    createPostFormModal.show()
}
