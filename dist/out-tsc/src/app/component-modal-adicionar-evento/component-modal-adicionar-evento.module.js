import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponentModalAdicionarEventoPage } from './component-modal-adicionar-evento.page';
var routes = [
    {
        path: '',
        component: ComponentModalAdicionarEventoPage
    }
];
var ComponentModalAdicionarEventoPageModule = /** @class */ (function () {
    function ComponentModalAdicionarEventoPageModule() {
    }
    ComponentModalAdicionarEventoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ComponentModalAdicionarEventoPage]
        })
    ], ComponentModalAdicionarEventoPageModule);
    return ComponentModalAdicionarEventoPageModule;
}());
export { ComponentModalAdicionarEventoPageModule };
//# sourceMappingURL=component-modal-adicionar-evento.module.js.map