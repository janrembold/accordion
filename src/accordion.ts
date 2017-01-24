import Demo from './demo';
import {PluginBoilerplate} from "./interface/plugin-boilerplate";

export default class Accordion implements PluginBoilerplate {
	constructor(public greeting: string) {
		new Demo();
		console.log('Accordion constructor');
	}

	init(): void {
	}

	destroy(): void {
	}

	greet() {
		console.log(this.greeting);
	}
}
