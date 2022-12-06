import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //items = [];
  items: any[] = [];
  scrollTo = 120;
  @ViewChild(CdkVirtualScrollViewport) viewPort!: CdkVirtualScrollViewport;

  constructor(private toastCtrl: ToastController) {
    this.items = Array.from({ length: 500 }).map((_, i) => `Item #${i}`);
  }

  scrollToIndex() {
      if (this.scrollTo > -1) {
          this.viewPort.scrollToIndex(this.scrollTo, 'smooth');
      }
  }
//Added :string to item to fix error TS7006: Parameter 'item' implicitly has an 'any' type.
  async selectItem(item: string) {
      const toast = await this.toastCtrl.create({
          message: item,
          duration: 2000
      });
      toast.present();
  }
}
