@Directive({
    selector: "[hightlightBaseOnFirstName]"
})
export class HightlightBaseOnFirstName implements AfterViewChecked {
    @Input() color: string = "white";
    private dom: any = null;
    constructor(ui: ElementRef) {
        this.dom = ui.nativeElement;
    }
    ngAfterViewChecked() {
        let firstName = this.dom.innerText;
        if (firstName.indexOf("Tu") < 0) { return; }
        this.dom.style.backgroundColor = this.color;
    }
}