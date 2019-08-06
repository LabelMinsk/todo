export class Component {
	constructor (id){
		this.$el = document.getElementById(id); //получаем элемент (get DOM node)
		this.init();
	}
	init(){ //lifecycle hook (жизненный цикл, будет вызван при инициализации компонента)
	}
	onShow(){}
	onHide(){}
	hide(){//	hiding element method / метод скрывающий элементы
		this.$el.classList.add('hide');
		this.onHide();
	}
	show(){//	showing element method / метод показывающий элементы
		this.$el.classList.remove('hide');
		this.onShow();
	}
}