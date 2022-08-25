import {Component} from "../core/component.js";
import {confirmActionModal, createPostFormModal, formEditPostModal, todoInfoModal} from "../main.js";
import {renderTodos} from "../template/render-post.js";
import {SearchComponent} from "./search.js";
import {Storage} from "../core/storage.js";
import {ThemeComponent} from "./theme.js";


export class PageApplication extends Component {
    constructor(id, pageAuthorization) {
        super(id);
        this.pageAuthorizatoin = pageAuthorization
    }

    init() {
        this.logoutBtn = document.getElementById('logout')
        this.logoutBtn.addEventListener('click', onLogoutHandler.bind(this))

        this.createBtn = document.getElementById('create-btn')
        this.createBtn.addEventListener('click', onShowFormCreatPostHandler.bind(this))
        this.todoList = document.querySelector('.todos-container')
        this.welcome = document.getElementById('welcome')
        this.search = new SearchComponent('search')
        this.theme = new ThemeComponent('theme', this.component)

    }

    onShow() {
        this.todoList.innerHTML = ''
        this.component.classList.add(this.theme.value())
        const html = renderTodos(this.search.value())
        this.todoList.insertAdjacentHTML('afterbegin', html)
        this.items = this.todoList.querySelectorAll('.todos__item')
        Array.from(this.items).forEach(item=> {
            item.addEventListener('click', onTodoHandler)
        })
        this.welcome.innerText = Storage.getUserData().name


    }

}

function onLogoutHandler() {
    this.hide()
    localStorage.setItem('selectedUserId', null)
    this.pageAuthorizatoin.show()

}

function onShowFormCreatPostHandler() {
    createPostFormModal.show()
}
function onTodoHandler(e) {
    const todoId = this.dataset.todoId

    if(e.target.classList.contains('todos__item')) {
        todoInfoModal.show(todoId)
    }
    if(e.target.classList.contains('todos__item-remove')) {
        confirmActionModal.show(todoId)
    }
    if(e.target.classList.contains('todos__item-edit')) {
        formEditPostModal.show(todoId)

    }
    if(e.target.classList.contains('todos__item-status')) {

        this.classList.toggle('todos__item_done')
        this.dataset.todoStatus = this.dataset.todoStatus === 'processing' ? 'done' : 'processing'
        Storage?.setTodoStatus(todoId)
    }
}