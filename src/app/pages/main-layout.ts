import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Header } from "../core/components/header";
import { Footer } from "../core/components/footer";

@Component({
    selector:'app-main-layout',
    // to configure router-outlet for child routes
    imports:[RouterOutlet,Header,Footer],
    template:`
    <app-header/>
    <router-outlet/>
    <app-footer/>
    `,
})

export class MainLayout{

}