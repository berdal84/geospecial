import { Directive, ViewContainerRef } from '@angular/core';
import { Viewer } from 'cesium';

@Directive({
  selector: '[cesiumViewer]'
})
export class CesiumViewerDirective {

  /** The cesium (engin) viewver reference */
  private readonly _viewer: Viewer;

  constructor(private ref: ViewContainerRef) {
    // Init the viewer
    this._viewer = new Viewer( this.ref.element.nativeElement);
  }

}
