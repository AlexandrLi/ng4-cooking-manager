import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpened = false;
  constructor() { }

  @HostListener('click') toggle() {
    this.isOpened = !this.isOpened;
  }
}
