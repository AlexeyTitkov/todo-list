import {Component} from "../core/component.js";
import {createPostFormModal, todoInfoModal} from "../main.js";
import {renderTodos} from "../template/render-post.js";


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
        this.todoList = document.querySelector('.todos-container')
    }
    onShow() {
        this.todoList.innerHTML = ''
        const html = renderTodos()
        this.todoList.insertAdjacentHTML('afterbegin', html)
        this.items = this.todoList.querySelectorAll('.todos__item')
        Array.from(this.items).forEach(item => {
            item.addEventListener('click', onTodoHandler)
        })
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

function onTodoHandler(e) {
    const todoId = this.dataset.todoId
    if(e.target.classList.contains('todos__item')){
        todoInfoModal.show(todoId)
    }

}
