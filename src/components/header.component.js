import {Component} from "../core/component";


export class HeaderComponent extends Component{
	constructor(id){
		super(id); //вызываем конструктор родителя(calling constructor parent)
	}
	init(){  //Вызывается(calling) lifecycle hook

		//cheking first time visiting - 'visited' value / проверяем первое посещение - значение 'visited'
		localStorage.getItem('visited')  // if first visit / если первое посещение
			 ? this.hide() //if 'true' we are hiding header / если 'true' скрываем header
			 		: this.show(); //if 'false' we are showing header / если 'false' скрываем header

		//get Button and create event(получает кнопку и создаем событие)
		this.$el.querySelector('.js-header-button').addEventListener('click',buttonHandler.bind(this));
	}
}

//Private function hiding header div  or showing  приватная функция отображающая или скрывающая заглавный экран
function buttonHandler() {
	//console.dir(buttonHandler.bind(this))

	/*add set-item true when use button first time / добавляет параметр со значением true при первом использовании
	 кнопки */
	localStorage.setItem('visited', JSON.stringify(true));

	//use parent method for hidden header / используем метод родителя чтобы скрыть хэдер
	this.hide();
}