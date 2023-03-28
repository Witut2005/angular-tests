import { trigger, transition,style, animate, state, group, animateChild, query } from '@angular/animations';


export const ThemeChange = trigger('aThemeChange', [
    state(
        'white',
        style({color: 'black'})
    ),
    state(
        'black',
        style({color: 'white'})
    ),
    transition('white => black', [animate('1s ease-out')]),
    transition('black => white', [
    animate('1s ease-out'), 
    ])
])

export const navThemeChange = trigger('navThemeChange', [
    state(
        'white',
        style({color: 'black', backgroundColor: 'white'})
    ),
    state(
        'black',
        style({color: 'white', backgroundColor: 'black'})
    ),
    transition('white => black', [
    animate('1s ease-out'),
    group([
        query('@aThemeChange', [animateChild()])
    ])]
    ),

    transition('black => white', [
    animate('1s ease-out'), 
    group([
        query('@aThemeChange', [animateChild()])
    ])
    ])
])


export const brighnessChangeAnimation = trigger('brighnessChangeAnimation', [
    state(
        'normal',
        style({filter: 'brightness(1)'})
    ),

    state(
        'hovered',
        style({filter: 'brightness(1.75)'})
    ),
    transition('normal => hovered', [animate('1s ease-out')]),
    transition('hovered => normal', [animate('1s ease-out')])
        
])

export const offerSelected = trigger('offerSelected', [
    state(
        'normal',
        style({
            right: '0%',
            transform: 'scale(1)'
        })
    ),

    state(
        'selected',
        style({
            right: '50%',
            transform: 'scale(1.05)'
        })
    ),
    transition('normal => selected', [animate('1s ease-out')]),
    transition('selected => normal', [animate('1s ease-out')])
        
])