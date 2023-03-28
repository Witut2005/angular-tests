import { trigger, transition,style, animate, state, group, animateChild, query } from '@angular/animations';
import { Component, OnInit, Input, HostBinding} from '@angular/core';
import { brighnessChangeAnimation} from '../animations';

declare var $: JQueryStatic;

const mouseHandle = trigger('mouseHandle', [

    state(
    'nohover',
    style({color: 'black'})
    ),

    state(
    'hover',
    style({color: 'gray'})
    ),
    transition('hover => nohover', [animate('1s ease-out')]),
    transition('nohover => hover', [animate('1s ease-out')])
])

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css'],
    animations: [mouseHandle]//, ThemeChange,navThemeChange]
})

export class NavComponent implements OnInit {

    @Input()shopName:string = 'Sklepik';
    @Input()theme = 'white';

    hoveredElement: any = undefined
    
    constructor() { }

    linkHover(event: any)
    {
        console.log(event.target.id) 
        this.hoveredElement = event.target.id;
    }

    linkUnHover()
    {
        this.hoveredElement = false;
    }

    ngOnInit(): void {
        // setInterval(()=>{console.log(this.theme)}, 1000)
    }

}
