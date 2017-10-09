

import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeLateral =
  trigger('fadeLateral', [
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-0.8%)'

      }),
      animate('300ms linear', style({
        opacity: 1,
        transform: 'translateY(0)'
      }))
    ])
  ]);
