import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
    selector: '[myCornerstoneElement]',
})
export class CornerstoneElementDirective {
    @Input('myCornerstoneElement') imageId: string;
    constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit(el: ElementRef) {
        // If no imageId is given, do nothing
        if (!this.imageId) {
            return;
        }

        // Retrieve the DOM element itself
        var element = this.elementRef.nativeElement;

        // Enable the element with Cornerstone
        cornerstone.enable(element);

        // Load the image and enable tools
        cornerstone.loadImage(this.imageId).then(function(image) {
            cornerstone.displayImage(element, image);
            cornerstoneTools.mouseInput.enable(element);
            cornerstoneTools.mouseWheelInput.enable(element);

            // Enable all tools we want to use with this element
            cornerstoneTools.wwwc.activate(element, 1); // ww/wc is the default tool for left mouse button
            cornerstoneTools.pan.activate(element, 2); // pan is the default tool for middle mouse button
            cornerstoneTools.zoom.activate(element, 4); // zoom is the default tool for right mouse button
            cornerstoneTools.zoomWheel.activate(element); // zoom is the default tool for middle mouse wheel
        });
    }
}