import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Hulk', 'Ironman', 'Shehulk', 'thor'];
  public deleteHero?: string = '';

  removeLastHero(): void {
    this.deleteHero = this.heroNames.pop();
  }

}
