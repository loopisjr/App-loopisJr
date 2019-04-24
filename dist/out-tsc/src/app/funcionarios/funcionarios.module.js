import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FuncionariosPage } from './funcionarios.page';
var routes = [
    {
        path: '',
        component: FuncionariosPage
    }
];
var FuncionariosPageModule = /** @class */ (function () {
    function FuncionariosPageModule() {
    }
    FuncionariosPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [FuncionariosPage]
        })
    ], FuncionariosPageModule);
    return FuncionariosPageModule;
}());
export { FuncionariosPageModule };
//# sourceMappingURL=funcionarios.module.js.map