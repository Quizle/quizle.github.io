import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {ROUTER_PROVIDERS, HashLocationStrategy, LocationStrategy} from "angular2/router";
import {provide} from "angular2/core";
import {ToastOptions} from "ng2-toastr/ng2-toastr";
import {HTTP_PROVIDERS} from "angular2/http";
import {enableProdMode} from 'angular2/core';

enableProdMode();

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(ToastOptions, { useValue: new ToastOptions({ positionClass: "toast-bottom-center" })}),
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
