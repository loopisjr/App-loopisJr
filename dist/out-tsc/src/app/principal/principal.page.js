import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
var PrincipalPage = /** @class */ (function () {
    function PrincipalPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    PrincipalPage.prototype.ngOnInit = function () {
    };
    PrincipalPage.prototype.adicionarEvento = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: ComponentModalAdicionarEvento
                        })];
                    case 1:
                        modal = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PrincipalPage = tslib_1.__decorate([
        Component({
            selector: 'app-principal',
            templateUrl: './principal.page.html',
            styleUrls: ['./principal.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController])
    ], PrincipalPage);
    return PrincipalPage;
}());
export { PrincipalPage };
//# sourceMappingURL=principal.page.js.map