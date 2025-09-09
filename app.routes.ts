import { Routes } from '@angular/router';
import { ControlFlow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { Signal } from './components/signal/signal';
import { Attribute } from './components/attribute/attribute';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'data-binding',
        pathMatch:'full'
    },
    {
        path:'controlflow',
        component: ControlFlow
    },
    {
        path:'data-binding',
        component: DataBinding
    },
    {
        path: 'signal',
        component: Signal
    },
    {
        path: 'attribute',
        component: Attribute
    },
    {
        path:'**',
        component: NotFound
    }
];
