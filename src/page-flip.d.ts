declare module 'page-flip' {
  export default class PageFlip {
    constructor(element: HTMLElement, options?: any);

    loadFromHTML(pages: NodeListOf<Element>): void;
    turnToPage(index: number): void;
    flipNext(): void;
    flipPrev(): void;

    on(event: string, callback: (e?: any) => void): void;
  }
}
