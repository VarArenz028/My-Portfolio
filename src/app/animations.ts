import { trigger, state, style, transition, animate, query } from "@angular/animations";


export const routerTransition = trigger('routerTransition', [

    transition('* <=> *', [

        style({ opacity : 0}),
        animate('0.3s', style({ opacity : 1 }))

    ])
]);

export let fade = trigger('fade', [

    state('void', style({opacity : 0})),
    transition(':enter, :leave', [
        animate(500)
    ])

]);

export let fadeOut = trigger('fadeOut', [

    state('void', style({
        transform:  'translateX(-100%)'
    })),

    transition(':enter, :leave', [
        animate(500)
    ])
    

]);
export let myState = trigger('heroState', [

    state('inactive', style({ background : '#eee',
                              transform : 'scale(1)'})),
    
    state('active', style({ background: '#cfd8dc',
                            transform : 'scale(1.1)'})),
    
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('100ms ease-out'))                        

]);