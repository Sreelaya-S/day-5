import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { About } from './page/about/about';
import { Component } from '@angular/core';
import { Products } from './page/products/products';
import { Contact } from './page/contact/contact';
import { SinglePage } from './single-page/single-page';

export const routes: Routes = [
    {
        path:"",component:Home
    },
{
    path:"about",component:About
},
{
path:"products",component:Products
},
{
    path:"contact",component:Contact
},
{
    path:"product",component:Products
},
{
    path:"single-page/:id",component:SinglePage
}
];
