import {Component} from "../core/component";

export class NavigationComponent extends Component{
	constructor(id) {
		super(id);
		this.tabs = [];
	}
		init(){
			//console.log(this.$el);


			this.$el.addEventListener('click',tabClickHandler.bind(this)) //Get tabs / получаем табы
		}
		//method for registered tabs (takes array in index.js) / метод для определения табов (принимает массив в index.js)
		registerTabs(tabs){
		this.tabs = tabs;
		}
}

function tabClickHandler(event){
	event.preventDefault(); //reset default action / сбрасываем стандартное поведение
	if(event.target.classList.contains('tab')) { //check element / проверям элементы
		//get array items has class tab / получаем массив элементов имеющих класс tab
	Array.from(this.$el.querySelectorAll('.tab')).forEach(tab => {
			tab.classList.remove('active') //removing classes / удаляем классы
		});

		event.target.classList.add('active'); //add class / добавляем класс


		const activeTab = this.tabs.find(t => t.name === event.target.dataset.name); //collect tab / выбираем таб
		this.tabs.forEach(t => t.component.hide()); //hide all tabs / скрываем все табы
		activeTab.component.show(); //show collect tab / отображаем выбранный таб
		
	}
}