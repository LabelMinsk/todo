import {Component} from "../core/component";
import {apiService} from "../services/api.service";
import {Form} from "../core/form";

export class DeleteComponent extends Component{
	constructor(id){
		super(id);
	};
	init() {
		this.$el.addEventListener('click',deletePosts.bind(this));
	}
}

async function deletePosts(event){
	event.preventDefault();
	await apiService.deletePost();
}