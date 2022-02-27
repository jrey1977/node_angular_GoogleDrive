"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 3049);
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ 8622);
/* harmony import */ var _pages_archivos_archivos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/archivos/archivos.component */ 9385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);






const routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: 'galeria', component: _pages_archivos_archivos_component__WEBPACK_IMPORTED_MODULE_2__.ArchivosComponent },
    { path: '**', component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _utils_popup_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/popup/popup.component */ 5891);
/* harmony import */ var _utils_notification_notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/notification/notification.component */ 2411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);




class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-popup");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_utils_popup_popup_component__WEBPACK_IMPORTED_MODULE_0__.PopupComponent, _utils_notification_notification_component__WEBPACK_IMPORTED_MODULE_1__.NotificationComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/pages.module */ 2302);
/* harmony import */ var _shared_etiquetas_etiquetas_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/etiquetas/etiquetas.module */ 4724);
/* harmony import */ var _utils_utils_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/utils.module */ 1217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__.PagesModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _utils_utils_module__WEBPACK_IMPORTED_MODULE_4__.UtilsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _shared_etiquetas_etiquetas_module__WEBPACK_IMPORTED_MODULE_3__.EtiquetasModule,
        ], _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_pages_pages_module__WEBPACK_IMPORTED_MODULE_2__.PagesModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _utils_utils_module__WEBPACK_IMPORTED_MODULE_4__.UtilsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _shared_etiquetas_etiquetas_module__WEBPACK_IMPORTED_MODULE_3__.EtiquetasModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule] }); })();


/***/ }),

/***/ 9385:
/*!******************************************************!*\
  !*** ./src/app/pages/archivos/archivos.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArchivosComponent": () => (/* binding */ ArchivosComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ 6755);
/* harmony import */ var src_app_shared_etiquetas_etiquetas_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/etiquetas/etiquetas.component */ 4467);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 8260);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 1149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_archivos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/archivos.service */ 1298);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-device-detector */ 5511);
/* harmony import */ var src_app_utils_popup_services_popup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/popup/services/popup.service */ 2158);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ 4428);
/* harmony import */ var src_app_utils_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utils/notification/notification.service */ 1335);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-infinite-scroll */ 3621);
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-masonry */ 3460);













const _c0 = ["contentArchivosNuevos"];
const _c1 = ["contextMenu"];
const _c2 = ["etiquetas"];
function ArchivosComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ArchivosComponent_div_12_li_9_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ArchivosComponent_div_12_li_9_span_1_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15); const file_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r14.abrirPopup(ctx_r14.filesNewsTemp[0][file_r8]); })("contextmenu", function ArchivosComponent_div_12_li_9_span_1_Template_span_contextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); const file_r8 = ctx_r18.$implicit; const i_r9 = ctx_r18.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r17.onRightClick($event, ctx_r17.filesNewsTemp[0][file_r8], i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ArchivosComponent_div_12_li_9_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ArchivosComponent_div_12_li_9_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20); const file_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r19.abrirPopup(ctx_r19.filesNewsTemp[0][file_r8]); })("contextmenu", function ArchivosComponent_div_12_li_9_img_2_Template_img_contextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); const file_r8 = ctx_r23.$implicit; const i_r9 = ctx_r23.index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r22.onRightClick($event, ctx_r22.filesNewsTemp[0][file_r8], i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const file_r8 = ctx_r24.$implicit;
    const i_r9 = ctx_r24.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r11.urlImg + ctx_r11.filesNewsTemp[0][file_r8].id, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("alt", ctx_r11.filesNewsTemp[0][file_r8].name)("id", i_r9);
} }
function ArchivosComponent_div_12_li_9_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 30);
} }
function ArchivosComponent_div_12_li_9_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 31);
} }
function ArchivosComponent_div_12_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ArchivosComponent_div_12_li_9_span_1_Template, 1, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ArchivosComponent_div_12_li_9_img_2_Template, 1, 3, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, ArchivosComponent_div_12_li_9_img_4_Template, 1, 0, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ArchivosComponent_div_12_li_9_img_5_Template, 1, 0, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.filesNewsTemp[0][file_r8].mimeType.includes("video"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.filesNewsTemp[0][file_r8].mimeType.includes("image"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.filesNewsTemp[0][file_r8].mimeType.includes("image"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.filesNewsTemp[0][file_r8].mimeType.includes("video"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r7.filesNewsTemp[0][file_r8].name);
} }
function ArchivosComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "hr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ArchivosComponent_div_12_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r25.scrollLeft(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " << ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ul", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("scrolled", function ArchivosComponent_div_12_Template_ul_scrolled_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r27.onScrollNew(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, ArchivosComponent_div_12_li_9_Template, 10, 5, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ArchivosComponent_div_12_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r26); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r28.scrollRight(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, " >> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" Sin etiquetar [", ctx_r3.contadorFotos, " de ", ctx_r3.filesNew.length, "] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("infiniteScrollDistance", 2)("scrollWindow", false)("horizontal", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r3.Object.keys(ctx_r3.filesNewsTemp[0]));
} }
function ArchivosComponent_div_13_div_10_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "span", 43);
} }
function ArchivosComponent_div_13_div_10_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("contextmenu", function ArchivosComponent_div_13_div_10_img_2_Template_img_contextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); const file_r30 = ctx_r36.$implicit; const i_r31 = ctx_r36.index; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r34.onRightClick($event, ctx_r34.filesOldTemp[0][file_r30], i_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const file_r30 = ctx_r37.$implicit;
    const i_r31 = ctx_r37.index;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r33.urlImg + ctx_r33.filesOldTemp[0][file_r30].id, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("alt", ctx_r33.filesOldTemp[0][file_r30].name)("id", i_r31);
} }
function ArchivosComponent_div_13_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ArchivosComponent_div_13_div_10_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r39); const file_r30 = restoredCtx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r38.abrirPopup(ctx_r38.filesOldTemp[0][file_r30]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ArchivosComponent_div_13_div_10_span_1_Template, 1, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ArchivosComponent_div_13_div_10_img_2_Template, 1, 3, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r30 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r29.filesOldTemp[0][file_r30].mimeType.includes("video"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r29.filesOldTemp[0][file_r30].mimeType.includes("image"));
} }
function ArchivosComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("scrolled", function ArchivosComponent_div_13_Template_div_scrolled_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r40.onScrollOld(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "hr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "hr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "ngx-masonry", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, ArchivosComponent_div_13_div_10_Template, 3, 2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("infiniteScrollDistance", 2)("scrollWindow", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("Galer\u00EDa [", ctx_r4.contadorFotos, " de ", ctx_r4.filesOld.length, "]");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("width", ctx_r4.porcentaje);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ordered", true)("options", ctx_r4.myOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r4.Object.keys(ctx_r4.filesOldTemp[0]));
} }
function ArchivosComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ArchivosComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r42.scrollTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " GO UP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", "no-hidden");
} }
const _c3 = function (a0, a1) { return { visible: a0, invisible: a1 }; };
class ArchivosComponent {
    constructor(archivoService, deviceService, popupService, renderer, modalService, notificationService) {
        this.archivoService = archivoService;
        this.deviceService = deviceService;
        this.popupService = popupService;
        this.renderer = renderer;
        this.modalService = modalService;
        this.notificationService = notificationService;
        // Arrays independientes donde meto uno a uno los registros
        this.new40Files = [];
        this.old40Files = [];
        // Todos los archivos (fotos y videos) nuevos y viejos
        this.filesTemp = [];
        // Todos los archivos con etiqueta
        this.filesNew = [];
        // Los archivos nuevos y viejos que se están mostrando
        this.filesNewsTemp = [];
        this.filesOldTemp = [];
        // Todos los viejos
        this.filesOld = [];
        // Infinite Scroll New Files
        this.actualPageNew = 1;
        this.finishPageNew = 1;
        // Infinite Scroll Old Files
        this.actualPageOld = 1;
        this.finishPageOld = 1;
        this.showGoUpButton = false;
        this.filesPerPage = 40;
        this.showScrollHeight = 400;
        this.hideScrollHeight = 200;
        this.Object = Object;
        this.urlImg = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.urlImgGoogle;
        this.notification = false;
        this.margenLateral = 0;
        this.myOptions = {};
        this.showLoading = true;
        this.contadorFotos = 40;
        this.porcentaje = '0%';
        this.porcentajeArchivo = 0;
        this.showContextMenu = false;
        this.showEtiquetas = false;
    }
    ngOnInit() {
        // Menú contextual al pinchar con el botón derecho en cualquier lugar de la pantalla
        this.renderer.listen('window', 'click', (e) => {
            if (e.target !== this.contextMenu.nativeElement &&
                e.target !== this.contextMenu.nativeElement.querySelector('div') &&
                e.target !== this.contextMenu.nativeElement.querySelector('ul') &&
                e.target !== this.contextMenu.nativeElement.querySelector('li')) {
                this.showContextMenu = false;
            }
        });
        const isMobile = this.deviceService.isMobile();
        if (isMobile) {
            this.margenLateral = 5;
        }
        else {
            this.margenLateral = 20;
        }
        // OPCIONES DE GRID MASONRY
        this.myOptions = {
            gutter: this.margenLateral,
            resize: true,
            animations: {
                show: [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({ opacity: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('400ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({ opacity: 1 })),
                ],
                hide: [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({ opacity: '*' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('400ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({ opacity: 0 })),
                ],
            },
        };
        this.getNewFiles();
    }
    onWindowScroll() {
        console.log('Hago scroll');
        if ((window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop) > this.showScrollHeight) {
            this.showGoUpButton = true;
        }
        else if (this.showGoUpButton &&
            (window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop) < this.hideScrollHeight) {
            this.showGoUpButton = false;
        }
    }
    agregarEtiquetas(foto) {
        console.log('Agrego etiquetas al archivo con ID ', foto.id);
        this.showContextMenu = true;
        this.showEtiquetas = true;
        this.modalRef = this.modalService.show(src_app_shared_etiquetas_etiquetas_component__WEBPACK_IMPORTED_MODULE_0__.EtiquetasComponent);
        this.modalRef.content.fotoSeleccionada = foto;
    }
    onRightClick($event, archivo, indexFoto) {
        $event.preventDefault();
        this.showContextMenu = false;
        this.fotoSeleccionada = archivo;
        this.indexFotoSeleccionada = indexFoto;
        this.rightClickMenuPositionX = $event.clientX + 'px';
        this.rightClickMenuPositionY = $event.clientY + 'px';
        this.renderer.setStyle(this.contextMenu.nativeElement, 'left', this.rightClickMenuPositionX);
        this.renderer.setStyle(this.contextMenu.nativeElement, 'top', this.rightClickMenuPositionY);
        this.showContextMenu = true;
    }
    scrollLeft() {
        console.log('Hago scroll a la izda.');
        let style = getComputedStyle(this.ul.nativeElement);
        this.anchoUl = parseInt(style.width);
        //this.ul.nativeElement.scrollLeft -= this.anchoUl;
        this.ul.nativeElement.scrollBy({
            left: -this.anchoUl,
            behavior: 'smooth',
        });
        console.log('ancho', this.anchoUl);
    }
    scrollRight() {
        console.log('Hago scroll a la dcha.');
        let style = getComputedStyle(this.ul.nativeElement);
        this.anchoUl = parseInt(style.width);
        //this.ul.nativeElement.scrollLeft += this.anchoUl
        this.ul.nativeElement.scrollBy({
            left: +this.anchoUl,
            behavior: 'smooth',
        });
        console.log('ancho', this.anchoUl);
    }
    add40NewFiles() {
        if (this.filesNewsTemp.length) {
            this.filesNewsTemp.concat(this.new40Files);
        }
        else {
            this.filesNewsTemp.push(this.new40Files);
        }
    }
    add40OldFiles() {
        if (this.filesOldTemp.length) {
            this.filesOldTemp.concat(this.old40Files);
            this.contadorFotos = this.filesOldTemp[0].length;
            this.showLoading = false;
        }
        else {
            this.filesOldTemp.push(this.old40Files);
            this.contadorFotos = this.filesOldTemp[0].length;
            this.showLoading = false;
        }
    }
    onScrollNew() {
        console.log('Entro a onScrollNew');
        if (this.actualPageNew < this.finishPageNew) {
            var startSlice = this.actualPageNew * this.filesPerPage;
            var endSlice = startSlice + this.filesPerPage;
            var nuevas = this.filesNew.slice(startSlice, endSlice);
            nuevas.forEach((elem) => {
                this.new40Files.push(elem);
            });
            this.add40NewFiles();
            this.actualPageNew++;
        }
        else {
            console.log('No more lines. Finish page!');
        }
    }
    onScrollOld() {
        console.log('Entro a onScrollOld');
        if (this.actualPageOld < this.finishPageOld) {
            this.showLoading = true;
            var startSlice = this.actualPageOld * this.filesPerPage;
            var endSlice = startSlice + this.filesPerPage;
            var viejas = this.filesOld.slice(startSlice, endSlice);
            viejas.forEach((elem) => {
                console.log('porcentaje es', parseFloat(this.porcentaje));
                this.porcentaje =
                    parseFloat(this.porcentaje) + this.porcentajeArchivo + '%';
                console.log('this.porcentaje', this.porcentaje);
                this.old40Files.push(elem);
            });
            this.showLoading = true;
            this.add40OldFiles();
            this.actualPageOld++;
        }
        else {
            console.log('No more lines. Finish page!');
        }
    }
    scrollTop() {
        document.body.scrollTop = 0; // Safari
        document.documentElement.scrollTop = 0; // Other
    }
    // Compruebo si hay archivos nuevos en la unidad de Google Drive
    // y si es así los grabo en la base de datos
    getNewFiles() {
        this.archivoService.getFiles().subscribe((res) => {
            console.log('Recibo esto:', res);
            this.filesTemp = Array.from(res.totalFiles);
            this.filesNew = this.filesTemp.filter((file) => file.etiquetas.length < 1);
            this.filesOld = this.filesTemp.filter((file) => file.etiquetas.length > 0);
            this.finishPageNew = Math.ceil(this.filesNew.length / this.filesPerPage);
            this.finishPageOld = Math.ceil(this.filesOld.length / this.filesPerPage);
            var filesNewsTemp = Array.from(this.filesNew.slice(0, this.filesPerPage));
            var filesOldTemp = Array.from(this.filesOld.slice(0, this.filesPerPage));
            this.porcentajeArchivo = 100 / this.filesTemp.length;
            console.log('porcentajeArchivo es ', this.porcentajeArchivo);
            filesNewsTemp.forEach((elem) => {
                this.new40Files.push(elem);
            });
            this.add40NewFiles();
            filesOldTemp.forEach((elem) => {
                this.porcentaje =
                    parseFloat(this.porcentaje) + this.porcentajeArchivo + '%';
                this.old40Files.push(elem);
            });
            this.add40OldFiles();
        });
    }
    creoBaseDatos() {
        this.archivoService.creoBaseDatos().subscribe((res) => {
            console.log('res de creoBaseDatos es', res);
        });
    }
    borrarArchivo() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
            title: 'Estás seguro?',
            text: 'Si lo borras no podrás recuperar el archivo!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, bórralo!',
        }).then((result) => {
            if (result.isConfirmed) {
                var idArchivoEliminado = this.fotoSeleccionada.id;
                var indexArchivoEliminado = this.indexFotoSeleccionada;
                this.archivoService
                    .borraArchivo(idArchivoEliminado)
                    .subscribe((res) => {
                    // Se ha borrado el archivo de Google Drive
                    if (res.respuesta.status === 204) {
                        this.mostrarNotificacion('Se ha borrado el archivo de la unidad de Google Drive', 'success');
                        // Ahora lo borro de la base datos
                        try {
                            this.mostrarNotificacion('Eliminando archivo...', 'info');
                            this.archivoService
                                .borraArchivoBaseDatos(idArchivoEliminado)
                                .subscribe((res) => {
                                // Ahora borro el archivo de la página
                                if (res.respuesta === 'ok') {
                                    this.mostrarNotificacion('Archivo eliminado', 'success', true);
                                    this.filesNewsTemp[0].splice(indexArchivoEliminado, 1);
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().close();
                                }
                                else {
                                    this.mostrarNotificacion('Algo ha pasado que no llegó ok: ' + res.respuesta, 'danger');
                                }
                            });
                        }
                        catch (error) {
                            this.mostrarNotificacion('No se ha podido eliminar el archivo de la base de datos por: ' +
                                error, 'danger');
                        }
                    }
                    else {
                        this.mostrarNotificacion('No se ha podido borrar el archivo de la unidad de Google Drive', 'danger');
                    }
                });
            }
        });
    }
    abrirPopup(pArchivo) {
        this.popupService.abrirPopup(pArchivo);
    }
    mostrarNotificacion(mensaje, tipo, fixed) {
        let note = {
            message: mensaje,
            type: tipo,
            fixed: fixed,
        };
        this.notificationService.setMessage(note);
    }
}
ArchivosComponent.ɵfac = function ArchivosComponent_Factory(t) { return new (t || ArchivosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_archivos_service__WEBPACK_IMPORTED_MODULE_3__.ArchivosService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_10__.DeviceDetectorService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_utils_popup_services_popup_service__WEBPACK_IMPORTED_MODULE_4__.PopupService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_utils_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__.NotificationService)); };
ArchivosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ArchivosComponent, selectors: [["app-archivos"]], viewQuery: function ArchivosComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.ul = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.contextMenu = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.etiquetas = _t.first);
    } }, hostBindings: function ArchivosComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("scroll", function ArchivosComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveWindow"]);
    } }, decls: 15, vars: 8, consts: [[1, "container-fluid", "p-4", "p-md-5", "pt-md-0"], [1, "p-3", "border", "bg-light", "contextMenu", 3, "ngClass"], ["contextMenu", ""], [1, "p-0"], ["insideMenu", ""], [1, "p-2", 3, "click"], ["class", "loadingSpan", 4, "ngIf"], [3, "click"], ["class", "w-100 contentNew", 4, "ngIf"], ["class", "w-100 contentOld", 4, "ngIf"], ["class", "btn btn-dark", 3, "ngClass", "click", 4, "ngIf"], [1, "loadingSpan"], ["src", "/assets/img/loading.gif", "alt", "Cargando"], [1, "w-100", "contentNew"], [1, "bg-white", "w-100", "over", "header"], [1, "pt-0", "pt-md-5"], [1, "mb-3"], [1, "btn", "btn-warning", "botonNavegacion", "d-none", "d-md-inline-block", 3, "click"], ["infiniteScroll", "", 1, "contentArchivosNuevos", 3, "infiniteScrollDistance", "scrollWindow", "horizontal", "scrolled"], ["contentArchivosNuevos", ""], ["class", "new-item", "draggable", "true", 4, "ngFor", "ngForOf"], ["draggable", "true", 1, "new-item"], ["class", "bgVideo", 3, "click", "contextmenu", 4, "ngIf"], ["class", "img-fluid", 3, "src", "alt", "id", "click", "contextmenu", 4, "ngIf"], ["class", "logoImg", "src", "https://drive-thirdparty.googleusercontent.com/16/type/image/jpeg", "alt", "Imagen", 4, "ngIf"], ["class", "logoVideo", "src", "https://drive-thirdparty.googleusercontent.com/16/type/video/mp4", "alt", "V\u00EDdeo", 4, "ngIf"], [1, "name"], [1, "options", "d-md-none"], [1, "bgVideo", 3, "click", "contextmenu"], [1, "img-fluid", 3, "src", "alt", "id", "click", "contextmenu"], ["src", "https://drive-thirdparty.googleusercontent.com/16/type/image/jpeg", "alt", "Imagen", 1, "logoImg"], ["src", "https://drive-thirdparty.googleusercontent.com/16/type/video/mp4", "alt", "V\u00EDdeo", 1, "logoVideo"], [1, "w-100", "contentOld"], ["infiniteScroll", "", 3, "infiniteScrollDistance", "scrollWindow", "scrolled"], [1, "position-relative", "mb-4", "pb-2"], [1, "rellenoBarra", "position-absolute", "over", "m-0"], [1, "fondoBarra", "m-0"], [1, "contentArchivosViejos"], [3, "ordered", "options"], ["ngxMasonryItem", "", "class", "masonry-item", 3, "click", 4, "ngFor", "ngForOf"], ["ngxMasonryItem", "", 1, "masonry-item", 3, "click"], ["class", "bgVideo", 4, "ngIf"], ["class", "img-fluid", 3, "src", "alt", "id", "contextmenu", 4, "ngIf"], [1, "bgVideo"], [1, "img-fluid", 3, "src", "alt", "id", "contextmenu"], [1, "btn", "btn-dark", 3, "ngClass", "click"]], template: function ArchivosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ul", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ArchivosComponent_Template_li_click_5_listener() { return ctx.agregarEtiquetas(ctx.fotoSeleccionada); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Editar");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ArchivosComponent_Template_li_click_7_listener() { return ctx.borrarArchivo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Eliminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, ArchivosComponent_span_9_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ArchivosComponent_Template_button_click_10_listener() { return ctx.mostrarNotificacion("Holiiii", "info"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, " Abrir notificaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, ArchivosComponent_div_12_Template, 12, 6, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, ArchivosComponent_div_13_Template, 11, 8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, ArchivosComponent_button_14_Template, 2, 1, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](5, _c3, ctx.showContextMenu, !ctx.showContextMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.filesNewsTemp[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.filesOldTemp[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showGoUpButton);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__.InfiniteScrollDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, ngx_masonry__WEBPACK_IMPORTED_MODULE_12__.NgxMasonryComponent, ngx_masonry__WEBPACK_IMPORTED_MODULE_12__.NgxMasonryDirective], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  min-height: 50px;\n}\n\n.no-hidden[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n  visibility: visible;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: 100%;\n  min-height: 50px;\n}\n\n.page[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\niframe[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  display: block;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  width: 95%;\n  margin: 1.5em auto;\n}\n\n.masonry[_ngcontent-%COMP%] {\n  margin: 1.5em 0;\n  padding: 0;\n  -moz-column-gap: 1.5em;\n  -webkit-column-gap: 1.5em;\n  grid-column-gap: 1.5em;\n  column-gap: 1.5em;\n  font-size: 0.85em;\n}\n\n.item[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #fff;\n  padding: 1.5em;\n  margin: 0 0 2em;\n  width: 100%;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.18);\n  border-radius: 3px;\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n  border: 1px solid black;\n}\n\n.masonry-item[_ngcontent-%COMP%] {\n  width: 48.5%;\n  transition: top 0.4s ease-in-out, left 0.4s ease-in-out;\n  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.18);\n  border-radius: 3px;\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n  margin-bottom: 0.5em;\n  border: 1px solid black;\n  cursor: pointer;\n}\n\n@media screen and (min-width: 450px) {\n  .masonry-item[_ngcontent-%COMP%] {\n    width: 48%;\n    margin-bottom: 1em;\n  }\n}\n\n@media screen and (min-width: 700px) {\n  .masonry-item[_ngcontent-%COMP%] {\n    width: 31%;\n    margin-bottom: 1.2em;\n  }\n}\n\n@media screen and (min-width: 1000px) {\n  .masonry-item[_ngcontent-%COMP%] {\n    width: 23%;\n    margin-bottom: 1.2em;\n  }\n}\n\n@media screen and (min-width: 1600px) {\n  .masonry-item[_ngcontent-%COMP%] {\n    width: 18%;\n    margin-bottom: 1.2em;\n  }\n}\n\n@media screen and (min-width: 1900px) {\n  .masonry-item[_ngcontent-%COMP%] {\n    width: 13%;\n    margin-bottom: 1.2em;\n  }\n}\n\n@media screen and (min-width: 2200px) {\n  .masonry-item[_ngcontent-%COMP%] {\n    width: 11.5%;\n    margin-bottom: 1.2em;\n  }\n}\n\n@media screen and (min-width: 2500px) {\n  .masonry-item[_ngcontent-%COMP%] {\n    width: 11%;\n    margin-bottom: 1.2em;\n  }\n}\n\n@media screen and (min-width: 2800px) {\n  .masonry-item[_ngcontent-%COMP%] {\n    width: 10%;\n    margin-bottom: 1.3em;\n  }\n}\n\n@media screen and (min-width: 3200px) {\n  .masonry-item[_ngcontent-%COMP%] {\n    width: 9%;\n    margin-bottom: 1.2em;\n  }\n}\n\n.title[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 1.75em;\n  margin: 0.25em 0;\n}\n\n.title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.75em 1.25em;\n  color: #888;\n  border: 2px solid #aaa;\n  margin: 0.25em 1em 1em;\n  text-decoration: none;\n  border-radius: 3px;\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -ms-border-radius: 3px;\n  -o-border-radius: 3px;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: #666;\n}\n\n.title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #666;\n  border-color: #888;\n}\n\n.share-link[_ngcontent-%COMP%], .article-link[_ngcontent-%COMP%] {\n  color: #888;\n}\n\n.imgVideo[_ngcontent-%COMP%] {\n  min-height: 225px;\n}\n\n.bgVideo[_ngcontent-%COMP%] {\n  background-image: url(https://cdn.dribbble.com/users/45617/screenshots/5021228/frame_3_4x.png?compress=1&resize=400x300);\n  width: 100%;\n  height: 232px;\n  display: block;\n  background-size: contain;\n}\n\nimg[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n\n\n\n\nimg[alt][_ngcontent-%COMP%]:after {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  font-family: \"Helvetica\";\n  font-weight: 300;\n  line-height: 2;\n  text-align: center;\n  content: attr(alt);\n  color: white;\n}\n\n.loadingSpan[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 45vh;\n  left: 48%;\n  z-index: 9;\n}\n\n.header[_ngcontent-%COMP%] {\n  top: 0;\n}\n\n.rellenoBarra[_ngcontent-%COMP%] {\n  height: 10px;\n  background: #3872bd;\n}\n\n.fondoBarra[_ngcontent-%COMP%] {\n  height: 10px;\n  background: #ccc;\n  box-sizing: border-box;\n  border: 1px solid black;\n}\n\n.contentArchivosNuevos[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 2vh 0;\n  height: auto;\n  overflow-y: hidden;\n  display: inline-flex;\n  margin: 0 1%;\n  max-width: 96%;\n}\n\n@media screen and (min-width: 991px) {\n  .contentArchivosNuevos[_ngcontent-%COMP%] {\n    max-width: 92%;\n    display: inline-block;\n  }\n}\n\n.contentArchivosNuevos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  padding: 0 0.3rem;\n  height: 100%;\n  cursor: pointer;\n}\n\n@media screen and (min-width: 991px) {\n  .contentArchivosNuevos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: table-cell;\n    width: 25%;\n  }\n}\n\n.contentArchivosNuevos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100px;\n  max-height: 100px;\n  height: 100px;\n  width: 100px;\n  object-fit: cover;\n  border-radius: 5px 5px 0 0;\n}\n\n@media screen and (min-width: 991px) {\n  .contentArchivosNuevos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 232px;\n    max-height: 184px;\n    height: 184px;\n    width: 232px;\n  }\n}\n\n.contentArchivosNuevos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n\n.contentArchivosNuevos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 0.7rem;\n  border-right: 1px solid #dadce0;\n  border-bottom: 1px solid #dadce0;\n  border-left: 1px solid #dadce0;\n  border-radius: 0 0 6px 6px;\n  box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.07);\n  transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.contentArchivosNuevos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .logoImg[_ngcontent-%COMP%], .contentArchivosNuevos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .logoVideo[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 0px;\n  margin-left: 0.4rem;\n  position: relative;\n  top: -0.05rem;\n}\n\n.contentArchivosNuevos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span.name[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 175px;\n  color: rgba(0, 0, 0, 0.72);\n  font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 500;\n}\n\n@media screen and (min-width: 991px) {\n  .contentArchivosNuevos[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span.name[_ngcontent-%COMP%] {\n    width: 209px;\n    box-sizing: border-box;\n    padding-left: 16px;\n  }\n}\n\n.botonNavegacion[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 10%;\n  vertical-align: top;\n  margin: 4vh 0;\n  font-size: 0.6rem;\n}\n\n@media screen and (min-width: 991px) {\n  .botonNavegacion[_ngcontent-%COMP%] {\n    margin: 3vh 0;\n    width: 3%;\n    margin: 9vh 0;\n    font-size: 1rem;\n  }\n}\n\n.contentArchivosViejos[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-width: 95%;\n}\n\n.contentNew[_ngcontent-%COMP%] {\n  height: auto;\n  top: 0;\n  min-height: 20vh;\n  padding-bottom: 4vh;\n}\n\n.contentOld[_ngcontent-%COMP%] {\n  height: 66vh;\n  top: 32vh;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.contextMenu[_ngcontent-%COMP%] {\n  position: absolute;\n  border: none;\n  border-radius: 6px;\n  box-shadow: 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12), 0px 5px 5px -3px rgba(0, 0, 0, 0.2);\n  display: block;\n  margin-top: -10px;\n  max-width: 448px;\n  min-width: 320px;\n  outline: 1px solid transparent;\n  overflow-y: hidden;\n  padding: 0;\n  transition: height 267ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, margin-top 267ms cubic-bezier(0.4, 0, 0.2, 1), opacity 267ms cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: height, margin-top, opacity;\n}\n\n.contextMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\n.contextMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  cursor: pointer;\n}\n\n.contextMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #e7e7e7;\n}\n\n.contextMenuExpanded[_ngcontent-%COMP%] {\n  position: absolute;\n  border: none;\n  border-radius: 6px;\n  box-shadow: 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12), 0px 5px 5px -3px rgba(0, 0, 0, 0.2);\n  display: block;\n  margin-top: -10px;\n  max-width: 448px;\n  min-width: 320px;\n  outline: 1px solid transparent;\n  overflow-y: hidden;\n  padding: 0;\n  transition: all 0.5s ease;\n}\n\n.contextMenuExpanded[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\n.contextMenuExpanded[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  cursor: pointer;\n}\n\n.contextMenuExpanded[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #e7e7e7;\n}\n\n.invisible[_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: -1;\n}\n\n.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 99;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFyY2hpdm9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUFBLGlCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsdURBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxrQkFBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxvQkFBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxvQkFBQTtFQURGO0FBQ0Y7O0FBSUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxvQkFBQTtFQUZGO0FBQ0Y7O0FBS0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxvQkFBQTtFQUhGO0FBQ0Y7O0FBTUE7RUFDRTtJQUNFLFlBQUE7SUFDQSxvQkFBQTtFQUpGO0FBQ0Y7O0FBT0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxvQkFBQTtFQUxGO0FBQ0Y7O0FBUUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxvQkFBQTtFQU5GO0FBQ0Y7O0FBU0E7RUFDRTtJQUNFLFNBQUE7SUFDQSxvQkFBQTtFQVBGO0FBQ0Y7O0FBVUE7O0VBRUUsa0JBQUE7QUFSRjs7QUFXQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFSRjs7QUFXQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQVJGOztBQVdBO0VBQ0UsV0FBQTtBQVJGOztBQVdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBUkY7O0FBV0E7O0VBRUUsV0FBQTtBQVJGOztBQVdBO0VBQ0UsaUJBQUE7QUFSRjs7QUFXQTtFQUNFLHdIQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7QUFSRjs7QUFXQTtFQUNFLGtCQUFBO0FBUkY7O0FBV0EsaUNBQUE7O0FBQ0EsMkNBQUE7O0FBQ0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBUkY7O0FBV0E7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBUkY7O0FBV0E7RUFDRSxNQUFBO0FBUkY7O0FBV0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFSRjs7QUFXQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFSRjs7QUFXQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFSRjs7QUFTRTtFQVJGO0lBU0ksY0FBQTtJQUNBLHFCQUFBO0VBTkY7QUFDRjs7QUFPRTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUxKOztBQU1JO0VBTEY7SUFNSSxtQkFBQTtJQUNBLFVBQUE7RUFISjtBQUNGOztBQUlJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQUZOOztBQUdNO0VBUEY7SUFRSSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7RUFBTjtBQUNGOztBQUNNO0VBQ0UsWUFBQTtBQUNSOztBQUVJO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0ZBQUE7RUFHQSx5REFBQTtBQUROOztBQUVNOztFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUFSOztBQUVNO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsOERBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQUFSOztBQUNRO0VBVkY7SUFXSSxZQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtFQUVSO0FBQ0Y7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQURGOztBQUVFO0VBTkY7SUFPSSxhQUFBO0lBQ0EsU0FBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUdBLDJIQUFBO0VBRUEsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBSUEsb0pBQUE7RUFHQSx3Q0FBQTtBQUxGOztBQU1FO0VBQ0UscUJBQUE7QUFKSjs7QUFLSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUhOOztBQUlNO0VBQ0UsbUJBQUE7QUFGUjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBR0EsMkhBQUE7RUFFQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFJQSx5QkFBQTtBQVBGOztBQVFFO0VBQ0UscUJBQUE7QUFOSjs7QUFPSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUxOOztBQU1NO0VBQ0UsbUJBQUE7QUFKUjs7QUFVQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBUEY7O0FBVUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQVBGIiwiZmlsZSI6ImFyY2hpdm9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA1MHB4O1xufVxuXG4ubm8taGlkZGVuIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiA1MHB4O1xufVxuXG4ucGFnZSB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbmlmcmFtZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLndyYXBwZXIge1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IDEuNWVtIGF1dG87XG59XG5cbi5tYXNvbnJ5IHtcbiAgbWFyZ2luOiAxLjVlbSAwO1xuICBwYWRkaW5nOiAwO1xuICAtbW96LWNvbHVtbi1nYXA6IDEuNWVtO1xuICAtd2Via2l0LWNvbHVtbi1nYXA6IDEuNWVtO1xuICBjb2x1bW4tZ2FwOiAxLjVlbTtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG59XG5cbi5pdGVtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAxLjVlbTtcbiAgbWFyZ2luOiAwIDAgMmVtO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5tYXNvbnJ5LWl0ZW0ge1xuICB3aWR0aDogNDguNSU7XG4gIHRyYW5zaXRpb246IHRvcCAwLjRzIGVhc2UtaW4tb3V0LCBsZWZ0IDAuNHMgZWFzZS1pbi1vdXQ7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ1MHB4KSB7XG4gIC5tYXNvbnJ5LWl0ZW0ge1xuICAgIHdpZHRoOiA0OCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gIC5tYXNvbnJ5LWl0ZW0ge1xuICAgIHdpZHRoOiAzMSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yZW07XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XG4gIC5tYXNvbnJ5LWl0ZW0ge1xuICAgIHdpZHRoOiAyMyU7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yZW07XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XG4gIC5tYXNvbnJ5LWl0ZW0ge1xuICAgIHdpZHRoOiAxOCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yZW07XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkwMHB4KSB7XG4gIC5tYXNvbnJ5LWl0ZW0ge1xuICAgIHdpZHRoOiAxMyU7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yZW07XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjIwMHB4KSB7XG4gIC5tYXNvbnJ5LWl0ZW0ge1xuICAgIHdpZHRoOiAxMS41JTtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyNTAwcHgpIHtcbiAgLm1hc29ucnktaXRlbSB7XG4gICAgd2lkdGg6IDExJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyODAwcHgpIHtcbiAgLm1hc29ucnktaXRlbSB7XG4gICAgd2lkdGg6IDEwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjNlbTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjAwcHgpIHtcbiAgLm1hc29ucnktaXRlbSB7XG4gICAgd2lkdGg6IDklO1xuICAgIG1hcmdpbi1ib3R0b206IDEuMmVtO1xuICB9XG59XG5cbi50aXRsZSxcbi5mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS43NWVtO1xuICBtYXJnaW46IDAuMjVlbSAwO1xufVxuXG4udGl0bGUgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMC43NWVtIDEuMjVlbTtcbiAgY29sb3I6ICM4ODg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNhYWE7XG4gIG1hcmdpbjogMC4yNWVtIDFlbSAxZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIC1vLWJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi50aXRsZSBhOmhvdmVyIHtcbiAgY29sb3I6ICM2NjY7XG4gIGJvcmRlci1jb2xvcjogIzg4ODtcbn1cblxuLnNoYXJlLWxpbmssXG4uYXJ0aWNsZS1saW5rIHtcbiAgY29sb3I6ICM4ODg7XG59XG5cbi5pbWdWaWRlbyB7XG4gIG1pbi1oZWlnaHQ6IDIyNXB4O1xufVxuXG4uYmdWaWRlbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2Nkbi5kcmliYmJsZS5jb20vdXNlcnMvNDU2MTcvc2NyZWVuc2hvdHMvNTAyMTIyOC9mcmFtZV8zXzR4LnBuZz9jb21wcmVzcz0xJnJlc2l6ZT00MDB4MzAwKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjMycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbmltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLyogc3R5bGUgdGhpcyB0byBmaXQgeW91ciBuZWVkcyAqL1xuLyogYW5kIHJlbW92ZSBbYWx0XSB0byBhcHBseSB0byBhbGwgaW1hZ2VzKi9cbmltZ1thbHRdOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29udGVudDogYXR0cihhbHQpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5sb2FkaW5nU3BhbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA0NXZoO1xuICBsZWZ0OiA0OCU7XG4gIHotaW5kZXg6IDk7XG59XG5cbi5oZWFkZXIge1xuICB0b3A6IDA7XG59XG5cbi5yZWxsZW5vQmFycmEge1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMzODcyYmQ7XG59XG5cbi5mb25kb0JhcnJhIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmNvbnRlbnRBcmNoaXZvc051ZXZvcyB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMnZoIDA7XG4gIGhlaWdodDogYXV0bztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgbWFyZ2luOiAwIDElO1xuICBtYXgtd2lkdGg6IDk2JTtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkxcHgpIHtcbiAgICBtYXgtd2lkdGg6IDkyJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgbGkge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZzogMCAwLjNyZW07XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTFweCkge1xuICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgbWF4LWhlaWdodDogMTAwcHg7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MXB4KSB7XG4gICAgICAgIG1heC13aWR0aDogMjMycHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDE4NHB4O1xuICAgICAgICBoZWlnaHQ6IDE4NHB4O1xuICAgICAgICB3aWR0aDogMjMycHg7XG4gICAgICB9XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgfVxuICAgIH1cbiAgICBkaXYge1xuICAgICAgcGFkZGluZzogMC43cmVtO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RhZGNlMDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGFkY2UwO1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGFkY2UwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDZweCA2cHg7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDAgcmdiKDAgMCAwIC8gMTAlKSxcbiAgICAgICAgaW5zZXQgMCAtMXB4IDAgcmdiKDAgMCAwIC8gNyUpO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgICAubG9nb0ltZyxcbiAgICAgIC5sb2dvVmlkZW8ge1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjRyZW07XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAtMC4wNXJlbTtcbiAgICAgIH1cbiAgICAgIHNwYW4ubmFtZSB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB3aWR0aDogMTc1cHg7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzIpO1xuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBSb2JvdG9EcmFmdCwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICB3aWR0aDogMjA5cHg7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmJvdG9uTmF2ZWdhY2lvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwJTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWFyZ2luOiA0dmggMDtcbiAgZm9udC1zaXplOiAwLjZyZW07XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MXB4KSB7XG4gICAgbWFyZ2luOiAzdmggMDtcbiAgICB3aWR0aDogMyU7XG4gICAgbWFyZ2luOiA5dmggMDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cblxuLmNvbnRlbnRBcmNoaXZvc1ZpZWpvcyB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtd2lkdGg6IDk1JTtcbn1cblxuLmNvbnRlbnROZXcge1xuICBoZWlnaHQ6IGF1dG87XG4gIHRvcDogMDtcbiAgbWluLWhlaWdodDogMjB2aDtcbiAgcGFkZGluZy1ib3R0b206IDR2aDtcbn1cblxuLmNvbnRlbnRPbGQge1xuICBoZWlnaHQ6IDY2dmg7XG4gIHRvcDogMzJ2aDtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5jb250ZXh0TWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiBub25lO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA4cHggMTBweCAxcHggcmdiKDAgMCAwIC8gMTQlKSxcbiAgICAwcHggM3B4IDE0cHggMnB4IHJnYigwIDAgMCAvIDEyJSksIDBweCA1cHggNXB4IC0zcHggcmdiKDAgMCAwIC8gMjAlKTtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxMHB4IDFweCByZ2IoMCAwIDAgLyAxNCUpLFxuICAgIDBweCAzcHggMTRweCAycHggcmdiKDAgMCAwIC8gMTIlKSwgMHB4IDVweCA1cHggLTNweCByZ2IoMCAwIDAgLyAyMCUpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1heC13aWR0aDogNDQ4cHg7XG4gIG1pbi13aWR0aDogMzIwcHg7XG4gIG91dGxpbmU6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAyNjdtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcyxcbiAgICBtYXJnaW4tdG9wIDI2N21zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksXG4gICAgb3BhY2l0eSAyNjdtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMjY3bXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXMsXG4gICAgbWFyZ2luLXRvcCAyNjdtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLFxuICAgIG9wYWNpdHkgMjY3bXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgd2lsbC1jaGFuZ2U6IGhlaWdodCwgbWFyZ2luLXRvcCwgb3BhY2l0eTtcbiAgdWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBsaSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2U3ZTdlNztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmNvbnRleHRNZW51RXhwYW5kZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggOHB4IDEwcHggMXB4IHJnYigwIDAgMCAvIDE0JSksXG4gICAgMHB4IDNweCAxNHB4IDJweCByZ2IoMCAwIDAgLyAxMiUpLCAwcHggNXB4IDVweCAtM3B4IHJnYigwIDAgMCAvIDIwJSk7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTBweCAxcHggcmdiKDAgMCAwIC8gMTQlKSxcbiAgICAwcHggM3B4IDE0cHggMnB4IHJnYigwIDAgMCAvIDEyJSksIDBweCA1cHggNXB4IC0zcHggcmdiKDAgMCAwIC8gMjAlKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtYXgtd2lkdGg6IDQ0OHB4O1xuICBtaW4td2lkdGg6IDMyMHB4O1xuICBvdXRsaW5lOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbGkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlN2U3ZTc7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5pbnZpc2libGUge1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLnZpc2libGUge1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiA5OTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 1298:
/*!*************************************************************!*\
  !*** ./src/app/pages/archivos/services/archivos.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArchivosService": () => (/* binding */ ArchivosService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 8260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);



class ArchivosService {
    constructor(http) {
        this.http = http;
        this.urlBack = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBack;
    }
    /* getFiles() {
      console.log('Obtengo archivos');
      return this.http.get<any[]>('http://localhost:3100/archivos');
    } */
    getFiles() {
        return this.http.get(this.urlBack + 'archivos');
    }
    borraArchivo(idArchivo) {
        return this.http.get(`${this.urlBack}archivos/borrar/${idArchivo}`);
    }
    borraArchivoBaseDatos(idArchivo) {
        return this.http.get(`${this.urlBack}archivos/borrar/ArchivoBBDD/${idArchivo}`);
    }
    creoBaseDatos() {
        console.log('Creo Base de datos');
        return this.http.get(this.urlBack + 'archivos/generaBDatos');
    }
}
ArchivosService.ɵfac = function ArchivosService_Factory(t) { return new (t || ArchivosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ArchivosService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ArchivosService, factory: ArchivosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3049:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);


class HomeComponent {
    constructor() { }
    ngOnInit() {
        console.log('Hola');
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 0, consts: [[1, "container"], [1, "jumbotron"], ["routerLink", "galeria"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bienvenido a mi nueva multi-app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Galer\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8622:
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 3, vars: 0, consts: [[1, "container"], [1, "mb-2", "text-danger"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "P\u00E1gina no encontrada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2302:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesModule": () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found/not-found.component */ 8622);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 3049);
/* harmony import */ var _archivos_archivos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./archivos/archivos.component */ 9385);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-infinite-scroll */ 3621);
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-masonry */ 3460);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 2650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _shared_etiquetas_etiquetas_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/etiquetas/etiquetas.module */ 4724);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ 4428);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);












class PagesModule {
}
PagesModule.ɵfac = function PagesModule_Factory(t) { return new (t || PagesModule)(); };
PagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__.InfiniteScrollModule,
            ngx_masonry__WEBPACK_IMPORTED_MODULE_8__.NgxMasonryModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
            _shared_etiquetas_etiquetas_module__WEBPACK_IMPORTED_MODULE_4__.EtiquetasModule,
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__.ModalModule.forRoot(),
        ], _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_archivos_archivos_component__WEBPACK_IMPORTED_MODULE_2__.ArchivosComponent, _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__.InfiniteScrollModule,
        ngx_masonry__WEBPACK_IMPORTED_MODULE_8__.NgxMasonryModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
        _shared_etiquetas_etiquetas_module__WEBPACK_IMPORTED_MODULE_4__.EtiquetasModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__.ModalModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule] }); })();


/***/ }),

/***/ 4467:
/*!*********************************************************!*\
  !*** ./src/app/shared/etiquetas/etiquetas.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EtiquetasComponent": () => (/* binding */ EtiquetasComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 8260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ 4428);
/* harmony import */ var _etiquetas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./etiquetas.service */ 2946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);





function EtiquetasComponent_h2_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Esta foto todav\u00EDa no se ha etiquetado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EtiquetasComponent_ng_container_14_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EtiquetasComponent_ng_container_14_ul_4_li_1_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const etiqueta_r5 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r7.borrarEtiqueta(etiqueta_r5._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const etiqueta_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", etiqueta_r5.name, " ");
} }
function EtiquetasComponent_ng_container_14_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EtiquetasComponent_ng_container_14_ul_4_li_1_Template, 4, 1, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.etiquetas);
} }
function EtiquetasComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Etiquetas:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, EtiquetasComponent_ng_container_14_ul_4_Template, 2, 1, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.etiquetas.length);
} }
class EtiquetasComponent {
    constructor(bsModalRef, etiquetaService) {
        this.bsModalRef = bsModalRef;
        this.etiquetaService = etiquetaService;
        this.urlImg = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlImgGoogle;
        this.categoriaArchivo = '';
        this.idArchivo = '';
        this.etiquetas = [];
    }
    set fotoSeleccionada(value) {
        this._fotoSeleccionada = value;
        this.obtenerEtiquetas(this._fotoSeleccionada.id);
        this.idArchivo = this._fotoSeleccionada.id;
    }
    ngOnInit() {
        console.log('Cargo componente de etiquetas');
    }
    obtenerEtiquetas(idParam) {
        console.log('entro a obtenerEtiquetas');
        this.etiquetaService.obtenerEtiquetas(idParam).subscribe((res) => {
            console.log('Etiquetas del archivo:', res.arrayLabelNames);
            this.etiquetas = Object.values(res.arrayLabelNames);
        });
    }
    borrarEtiqueta(idEtiqueta) {
        console.log('Borro etiqueta con id:', idEtiqueta);
        this.etiquetaService
            .borrarEtiqueta(idEtiqueta, this.idArchivo)
            .subscribe((res) => {
            if (res.respuesta === 'OK') {
                alert('Etiqueta borrada');
            }
            else {
                alert('Error: ' + res.respuesta);
            }
        });
    }
    agregaEtiqueta(nombreEtiqueta) {
        var _a;
        console.log('El valor es ', nombreEtiqueta);
        // Quito espacios en blanco
        let nombreEtiquetaBueno = nombreEtiqueta.replace(/ /g, '');
        if ((_a = this._fotoSeleccionada) === null || _a === void 0 ? void 0 : _a.id) {
            let idArchivo = this._fotoSeleccionada.id;
            this.etiquetaService
                .agregarEtiqueta(nombreEtiquetaBueno, idArchivo)
                .subscribe((res) => {
                if (res.respuesta === 'OK') {
                    this.obtenerEtiquetas(idArchivo);
                    alert('Etiqueta grabada');
                }
                else {
                    alert('Error: ' + res.respuesta);
                }
            });
        }
    }
}
EtiquetasComponent.ɵfac = function EtiquetasComponent_Factory(t) { return new (t || EtiquetasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__.BsModalRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_etiquetas_service__WEBPACK_IMPORTED_MODULE_2__.EtiquetasService)); };
EtiquetasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EtiquetasComponent, selectors: [["app-etiquetas"]], inputs: { fotoSeleccionada: "fotoSeleccionada" }, decls: 18, vars: 5, consts: [["type", "button", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "container-fluid", "px-1", "py-5", "mx-auto"], [1, "row", "d-flex", "justify-content-center", "px-5"], [1, "col-12"], [1, "col-8", "card"], [1, "form-group"], ["type", "text", "placeholder", "Nombre de la etiqueta"], ["etiqueta", ""], [1, "btn", "btn-success", 3, "click"], [4, "ngIf"], [1, "col-1"], [1, "col-3", "card"], [1, "img-fluid", "imgEtiquetada", 3, "src", "alt"], [1, "form-group", "flex-column", "d-flex"], [1, "form-control-label", "pl-2"], ["class", "ulEtiquetas", 4, "ngIf"], [1, "ulEtiquetas"], [4, "ngFor", "ngForOf"], [1, "btn", "test", 3, "click"]], template: function EtiquetasComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EtiquetasComponent_Template_button_click_0_listener() { return ctx.bsModalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EtiquetasComponent_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10); return ctx.agregaEtiqueta(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, EtiquetasComponent_h2_13_Template, 2, 0, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, EtiquetasComponent_ng_container_14_Template, 5, 1, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx._fotoSeleccionada == null ? null : ctx._fotoSeleccionada.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.etiquetas.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.etiquetas.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.urlImg + (ctx._fotoSeleccionada == null ? null : ctx._fotoSeleccionada.id), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", ctx.fotoSeleccionada == null ? null : ctx.fotoSeleccionada.name);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: [".close[_ngcontent-%COMP%] {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.5;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 30px 40px;\n  margin-top: 60px;\n  margin-bottom: 60px;\n  border: none !important;\n  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.2);\n}\n\n.blue-text[_ngcontent-%COMP%] {\n  color: #00bcd4;\n}\n\n.form-control-label[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  padding: 8px 15px;\n  border-radius: 5px !important;\n  margin: 5px 0px;\n  box-sizing: border-box;\n  border: 1px solid #ccc;\n  font-size: 18px !important;\n  font-weight: 300;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n  border: 1px solid #00bcd4;\n  outline-width: 0;\n  font-weight: 400;\n}\n\n.btn-block[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 15px !important;\n  font-weight: 400;\n  height: 43px;\n  cursor: pointer;\n}\n\n.btn-block[_ngcontent-%COMP%]:hover {\n  color: #fff !important;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n  outline-width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aXF1ZXRhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7OztFQUdFLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTs7RUFJRSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFHRSwyQkFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoiZXRpcXVldGFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3NlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjZmZmO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5jYXJkIHtcbiAgcGFkZGluZzogMzBweCA0MHB4O1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmJsdWUtdGV4dCB7XG4gIGNvbG9yOiAjMDBiY2Q0O1xufVxuXG4uZm9ybS1jb250cm9sLWxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSxcbmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuaW5wdXQ6Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyB7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBiY2Q0O1xuICBvdXRsaW5lLXdpZHRoOiAwO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uYnRuLWJsb2NrIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGhlaWdodDogNDNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLWJsb2NrOmhvdmVyIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuYnV0dG9uOmZvY3VzIHtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG91dGxpbmUtd2lkdGg6IDA7XG59XG4iXX0= */"] });


/***/ }),

/***/ 4724:
/*!******************************************************!*\
  !*** ./src/app/shared/etiquetas/etiquetas.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EtiquetasModule": () => (/* binding */ EtiquetasModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _etiquetas_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./etiquetas.component */ 4467);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);




class EtiquetasModule {
}
EtiquetasModule.ɵfac = function EtiquetasModule_Factory(t) { return new (t || EtiquetasModule)(); };
EtiquetasModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EtiquetasModule });
EtiquetasModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule], _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EtiquetasModule, { declarations: [_etiquetas_component__WEBPACK_IMPORTED_MODULE_0__.EtiquetasComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule], exports: [_etiquetas_component__WEBPACK_IMPORTED_MODULE_0__.EtiquetasComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule] }); })();


/***/ }),

/***/ 2946:
/*!*******************************************************!*\
  !*** ./src/app/shared/etiquetas/etiquetas.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EtiquetasService": () => (/* binding */ EtiquetasService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 8260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);



const base_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBack;
class EtiquetasService {
    constructor(http) {
        this.http = http;
    }
    obtenerEtiquetas(idArchivo) {
        console.log('Pido etiquetas del archivo', idArchivo);
        return this.http.get(`http://localhost:3100/archivos/etiquetas/${idArchivo}`);
    }
    borrarEtiqueta(idEtiqueta, idArchivo) {
        const url = `${base_url}etiquetas/borrar`;
        return this.http.put(url, {
            idEtiqueta: idEtiqueta,
            idArchivo: idArchivo,
        });
    }
    agregarEtiqueta(nombreEtiqueta, idArchivo) {
        const url = `${base_url}etiquetas/grabar`;
        return this.http.post(url, {
            nombre: nombreEtiqueta,
            idArchivo: idArchivo,
        });
    }
}
EtiquetasService.ɵfac = function EtiquetasService_Factory(t) { return new (t || EtiquetasService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
EtiquetasService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EtiquetasService, factory: EtiquetasService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2411:
/*!**************************************************************!*\
  !*** ./src/app/utils/notification/notification.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationComponent": () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 6755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.service */ 1335);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);




function NotificationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate2"]("", ctx_r0.notification.type, " alert-", ctx_r0.notification.type, " notification");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeIn", undefined)("@fadeOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.notification.message, "\n");
} }
const enterTransition = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':enter', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
        opacity: 0,
    }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('0.5s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
        opacity: 1,
    })),
]);
const leaveTrans = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':leave', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
        opacity: 1,
    }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('0.5s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
        opacity: 0,
    })),
]);
const fadeIn = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('fadeIn', [enterTransition]);
const fadeOut = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('fadeOut', [leaveTrans]);
class NotificationComponent {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    ngOnInit() {
        this.notificationService.getMessage$().subscribe((notificationReceived) => {
            this.show = true;
            // No es fixed, así que se face fade out
            if (!notificationReceived.fixed) {
                setTimeout(() => {
                    // Se vuelve a comprobar que no es fixed, por si
                    // ha habido una notificación posterior que si lo es
                    if (this.fixed !== true) {
                        this.show = false;
                    }
                }, 1800);
            }
            else {
                this.fixed = true;
            }
            this.notification = notificationReceived;
        });
    }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) { return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_notification_service__WEBPACK_IMPORTED_MODULE_0__.NotificationService)); };
NotificationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NotificationComponent, selectors: [["app-notification"]], decls: 1, vars: 1, consts: [["role", "alert", 3, "class", 4, "ngIf"], ["role", "alert"]], template: function NotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NotificationComponent_div_0_Template, 2, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notification && ctx.show === true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".notification[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 2vh;\n  left: 2%;\n  width: auto;\n  padding: 0.75rem 1.25rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n\n.alert-info[_ngcontent-%COMP%] {\n  border-color: #bee5eb;\n}\n\n.alert-success[_ngcontent-%COMP%] {\n  border-color: #c3e6cb;\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  border-color: #f5c6cb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRiIsImZpbGUiOiJub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWZpY2F0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDJ2aDtcbiAgbGVmdDogMiU7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4uYWxlcnQtaW5mbyB7XG4gIGJvcmRlci1jb2xvcjogI2JlZTVlYjtcbn1cblxuLmFsZXJ0LXN1Y2Nlc3Mge1xuICBib3JkZXItY29sb3I6ICNjM2U2Y2I7XG59XG5cbi5hbGVydC1kYW5nZXIge1xuICBib3JkZXItY29sb3I6ICNmNWM2Y2I7XG59XG4iXX0= */"], data: { animation: [fadeIn, fadeOut] } });


/***/ }),

/***/ 1335:
/*!************************************************************!*\
  !*** ./src/app/utils/notification/notification.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


class NotificationService {
    constructor() {
        this.message$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    setMessage(mensaje) {
        this.message$.next(mensaje);
    }
    getMessage$() {
        console.log('Se recibe mensaje:');
        return this.message$.asObservable();
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(); };
NotificationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5891:
/*!************************************************!*\
  !*** ./src/app/utils/popup/popup.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupComponent": () => (/* binding */ PopupComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 8260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_utils_popup_services_popup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utils/popup/services/popup.service */ 2158);
/* harmony import */ var src_app_shared_etiquetas_etiquetas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/etiquetas/etiquetas.service */ 2946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);





function PopupComponent_div_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "video", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "source", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Video not supported ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("poster", ctx_r1.popup.thumbnailLink, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.popup.webViewLink, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function PopupComponent_div_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r2.urlImg + ctx_r2.popup.id, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", ctx_r2.popup.name);
} }
function PopupComponent_div_0_ng_container_8_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const etiqueta_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", etiqueta_r6.name, " ");
} }
function PopupComponent_div_0_ng_container_8_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PopupComponent_div_0_ng_container_8_ul_4_li_1_Template, 2, 1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.etiquetas);
} }
function PopupComponent_div_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Etiquetas:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PopupComponent_div_0_ng_container_8_ul_4_Template, 2, 1, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.etiquetas.length);
} }
function PopupComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PopupComponent_div_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.cerrarPopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PopupComponent_div_0_ng_container_6_Template, 4, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, PopupComponent_div_0_ng_container_7_Template, 2, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, PopupComponent_div_0_ng_container_8_Template, 5, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.popup.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.popup.mimeType == null ? null : ctx_r0.popup.mimeType.includes("video"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.popup.mimeType == null ? null : ctx_r0.popup.mimeType.includes("image"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.etiquetas.length);
} }
class PopupComponent {
    constructor(popupService, etiquetaService) {
        this.popupService = popupService;
        this.etiquetaService = etiquetaService;
        this.statePopup = false;
        this.urlImg = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlImgGoogle;
        this.etiquetas = [];
    }
    ngOnInit() {
        // Me suscribo a los cambios que haya en popup y que se envían como parámetro en
        // el "next" de la función "abrirPopup" del service
        this.popupService.getPopup$().subscribe((popupRecibido) => {
            this.popup = popupRecibido;
            this.obtenerEtiquetas(this.popup.id);
        });
        this.popupService.getPopupState$().subscribe((estado) => {
            this.statePopup = estado;
        });
    }
    obtenerEtiquetas(idParam) {
        this.etiquetas = [];
        this.etiquetaService.obtenerEtiquetas(idParam).subscribe((res) => {
            console.log('Etiquetas del archivo:', res.arrayLabelNames);
            this.etiquetas = res.arrayLabelNames;
        });
    }
    cerrarPopup() {
        console.log('Entro en cerrarPopup');
        this.popupService.cerrarPopup();
    }
}
PopupComponent.ɵfac = function PopupComponent_Factory(t) { return new (t || PopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_utils_popup_services_popup_service__WEBPACK_IMPORTED_MODULE_1__.PopupService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_etiquetas_etiquetas_service__WEBPACK_IMPORTED_MODULE_2__.EtiquetasService)); };
PopupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PopupComponent, selectors: [["app-popup"]], decls: 1, vars: 1, consts: [["class", "position-fixed bg-white w-100 h-100 p-3 p-md-5 popup", 4, "ngIf"], [1, "position-fixed", "bg-white", "w-100", "h-100", "p-3", "p-md-5", "popup"], [1, "btn", "btn-danger", 3, "click"], [1, "text-center"], [1, "contenedorArchivo", "m-auto", "text-center"], [4, "ngIf"], ["controls", "", "preload", "none", "width", "100%", "playsinline", "", 3, "poster"], ["type", "video/mp4", 3, "src"], [1, "mt-4", "img-fluid", 3, "src", "alt"], [1, "form-group", "flex-column", "d-flex"], [1, "form-control-label", "pl-2"], ["class", "ulEtiquetas", 4, "ngIf"], [1, "ulEtiquetas"], [4, "ngFor", "ngForOf"]], template: function PopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PopupComponent_div_0_Template, 9, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.statePopup);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: [".popup[_ngcontent-%COMP%] {\n  z-index: 99;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-height: 65vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJwb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3B1cCB7XG4gIHotaW5kZXg6IDk5O1xufVxuXG5pbWcge1xuICBtYXgtaGVpZ2h0OiA2NXZoO1xufVxuIl19 */"] });


/***/ }),

/***/ 2158:
/*!*******************************************************!*\
  !*** ./src/app/utils/popup/services/popup.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupService": () => (/* binding */ PopupService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


class PopupService {
    constructor() {
        this.popup$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.popupState$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.popupState$.next(false);
    }
    abrirPopup(pArchivo) {
        this.popupState$.next(true);
        this.popup$.next(pArchivo);
    }
    cerrarPopup() {
        this.popupState$.next(false);
    }
    getPopup$() {
        console.log('Se recibe dato');
        return this.popup$.asObservable();
    }
    getPopupState$() {
        return this.popupState$.asObservable();
    }
}
PopupService.ɵfac = function PopupService_Factory(t) { return new (t || PopupService)(); };
PopupService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PopupService, factory: PopupService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1217:
/*!***************************************!*\
  !*** ./src/app/utils/utils.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilsModule": () => (/* binding */ UtilsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup/popup.component */ 5891);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification/notification.component */ 2411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);




class UtilsModule {
}
UtilsModule.ɵfac = function UtilsModule_Factory(t) { return new (t || UtilsModule)(); };
UtilsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: UtilsModule });
UtilsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UtilsModule, { declarations: [_popup_popup_component__WEBPACK_IMPORTED_MODULE_0__.PopupComponent, _notification_notification_component__WEBPACK_IMPORTED_MODULE_1__.NotificationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule], exports: [_popup_popup_component__WEBPACK_IMPORTED_MODULE_0__.PopupComponent, _notification_notification_component__WEBPACK_IMPORTED_MODULE_1__.NotificationComponent] }); })();


/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    urlImgGoogle: 'https://drive.google.com/uc?export=view&id=',
    urlBack: 'http://localhost:3100/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map