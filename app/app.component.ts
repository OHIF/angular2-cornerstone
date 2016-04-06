import {Component} from 'angular2/core';
import {CornerstoneElementDirective} from './cornerstone-element.directive';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Cornerstone Example</h1>
        <div myCornerstoneElement="example://1"
             oncontextmenu="return false"
             unselectable="on"
             onselectstart="return false;"
             onmousedown="return false;"></div>      
        `,
    directives: [CornerstoneElementDirective]
})
export class AppComponent { }