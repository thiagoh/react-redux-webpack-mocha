export interface JQueryExtended<T extends Node = HTMLElement> extends JQuery<T> {
  simulate(eventName: string, value?: any): this;
}
