import { Component } from '@angular/core';
import { Order } from '../common/order.model';

@Component({
	selector: 'app-my-form',
	templateUrl: './my-form.component.html',
	styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent {
	order: Order = new Order();

	onSubmit() {
		console.log(this.order);
	}
}
