import { PluginBoilerplate } from "./interface/plugin-boilerplate";
export default class Accordion implements PluginBoilerplate {
    greeting: string;
    constructor(greeting: string);
    init(): void;
    destroy(): void;
    greet(): void;
}
