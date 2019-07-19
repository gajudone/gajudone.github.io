(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n\t<router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employees/employee-list/employee-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employees/employee-list/employee-list.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Employees List</h1>\n  <table class=\"table table-hover\">\n    <thead>\n      <th>Name</th>\n      <th>Position</th>\n      <th>Employee Code</th>\n      <th>Mobile</th>\n      <th>Delete/Update</th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let emp of list\">\n        <td>{{emp.fullName}}</td>\n        <td>{{emp.position}}</td>\n        <td>{{emp.empCode}}</td>\n        <td>{{emp.mobile}}</td>\n        <td>\n          <a class=\"btn text-danger\" (click)=\"onDelete(emp.id)\"><i class=\"fa fa-trash\"></i></a>\n          <a class=\"btn text-danger\" (click)=\"onEdit(emp)\"><i class=\"fa fa-edit\"></i></a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employees/employee/employee.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employees/employee/employee.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<h1 class=\"display-4\">Employee Register</h1>\n<form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\n  <input type=\"hidden\" name=\"id\" #id=\"ngModel\" [(ngModel)]=\"service.formData.id\">\n  <div class=\"form-group col-md-6\">\n    <input name=\"fullName\" #fullName=\"ngModel\" [(ngModel)]=\"service.formData.fullName\" class=\"form-control\" placeholder=\"Full name\" required>\n    <div *ngIf=\"fullName.invalid && fullName.touched\" class=\"validation-error\">This field is required.</div>\n  </div>\n  <div class=\"form-group col-md-6\">\n    <input name=\"position\" #position=\"ngModel\" [(ngModel)]=\"service.formData.position\" class=\"form-control\" placeholder=\"Position\">\n  </div>\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-6\">\n      <input name=\"empCode\" #empCode=\"ngModel\" [(ngModel)]=\"service.formData.empCode\" class=\"form-control\" placeholder=\"Emp. code\">\n    </div>\n    <div class=\"form-group  col-md-6\">\n      <input name=\"mobile\" #mobile=\"ngModel\" [(ngModel)]=\"service.formData.mobile\" class=\"form-control\" placeholder=\"Mobile\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-lg btn-block btn-warning\">SUBMIT</button>\n  </div>\n\n</form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employees/employees.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employees/employees.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"\">\n  <div class=\"col-md-12\">\n    <app-employee></app-employee>\n  </div>\n  <div class=\"col-md-12\" >\n    <app-employee-list></app-employee-list>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"header\">Login with Firebase or Social Providers</h1>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 col-md-offset-3\">\n      <form [formGroup]=\"loginForm\">\n        <div class=\"form-group\">\n          <label>Email address</label>\n          <input type=\"email\" formControlName=\"email\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input type=\"password\" class=\"form-control\" formControlName=\"password\">\n          <label class=\"error\">{{errorMessage}}</label>\n        </div>\n        <button type=\"submit\" (click)=\"tryLogin(loginForm.value)\" class=\"btn btn-default\">Login</button>\n      </form>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n      <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"tryFacebookLogin()\">Login with Facebook</button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n      <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"tryGoogleLogin()\">Login with Google</button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n      <button type=\"button\" class=\"btn btn-info btn-block\" (click)=\"tryTwitterLogin()\">Login with Twitter</button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n      <p>No account yet? <a href=\"/register\">Create an account</a></p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"header\">Create an account with Firebase or Social Providers</h1>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 col-md-offset-3\">\n      <form [formGroup]=\"registerForm\">\n        <div class=\"form-group\">\n          <label>Email address</label>\n          <input type=\"email\" formControlName=\"email\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input type=\"password\" class=\"form-control\" formControlName=\"password\">\n          <label class=\"error\">{{errorMessage}}</label>\n          <label class=\"success\">{{successMessage}}</label>\n        </div>\n        <button type=\"submit\" (click)=\"tryRegister(registerForm.value)\" class=\"btn btn-default\">Register</button>\n      </form>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n      <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"tryFacebookLogin()\">Register with Facebook</button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n      <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"tryGoogleLogin()\">Register with Google</button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n      <button type=\"button\" class=\"btn btn-info btn-block\" (click)=\"tryTwitterLogin()\">Register with Twitter</button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n      <p>Already have an account? <a href=\"/login\">Login</a></p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-static-top navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n    <ul class=\"list-inline\">\n      <li routerLinkActive=\"active\" class=\"navbar-text navbar-link\" routerLink=\"Employees\"> <a>\n        <span class=\"glyphicon glyphicon-user\"></span> Employees</a></li>\n      <li routerLinkActive=\"active\" class=\"navbar-text navbar-link\" routerLink=\"AddEmployees\"><a>\n        <span class=\"glyphicon glyphicon-plus\"></span> Add New Customer</a></li>\n      <li routerLinkActive=\"active\" style=\"float: right\" class=\"navbar-text navbar-right navbar-link\"><a  (click)=\"logout()\" ><span class=\"glyphicon glyphicon-log-out\"></span> Logout</a></li>\n    </ul>\n  </div>\n</nav>  \n<div style=\"margin-top: 50px;min-height: 490px;\">\n  <router-outlet></router-outlet>\n</div>\n<div style=\"background:#2c4626;height: 50px;position:fixed;bottom:0px;width: 100%;\">\n  <p style=\"text-align: center; line-height: 50px;color:white;font-weight: bold;\"> Copyright © 2019 Your Company | Design: Template Mo </p>\n</div>\n<!-- <app-employees style=\"float: left\"></app-employees> -->"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\");\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmdGaXJlYmFzZVY2IChjb3B5KS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHUSxvRkFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRpY29uLWZvbnQtcGF0aDogXCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC8zLjMuNy9mb250cy9cIiAhZGVmYXVsdDtcbi8vIEluY2x1ZGUgQm9vdHN0cmFwIHN0eWxlc1xuLy9AaW1wb3J0IFwifmJvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9fYm9vdHN0cmFwXCI7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4zLjYvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJyk7Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _user_user_resolver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/user.resolver */ "./src/app/user/user.resolver.ts");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/auth.guard */ "./src/app/core/auth.guard.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _var_www_html_ngFirebaseV6_copy_src_app_employees_employees_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./src/app/employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _var_www_html_ngFirebaseV6_copy_src_app_employees_employee_employee_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./src/app/employees/employee/employee.component */ "./src/app/employees/employee/employee.component.ts");
/* harmony import */ var _var_www_html_ngFirebaseV6_copy_src_app_employees_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./src/app/employees/employee-list/employee-list.component */ "./src/app/employees/employee-list/employee-list.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");




















//import { CustomersComponent } from './customers/customers.component';





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
            _var_www_html_ngFirebaseV6_copy_src_app_employees_employees_component__WEBPACK_IMPORTED_MODULE_20__["EmployeesComponent"], _var_www_html_ngFirebaseV6_copy_src_app_employees_employee_employee_component__WEBPACK_IMPORTED_MODULE_21__["EmployeeComponent"], _var_www_html_ngFirebaseV6_copy_src_app_employees_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_22__["EmployeeListComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_23__["ToastrModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_5__["rootRouterConfig"], { useHash: false }),
            _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"].enablePersistence(),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__["AngularFireDatabaseModule"] // imports firebase/auth, only needed for auth features
        ],
        providers: [_core_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _core_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"], _user_user_resolver__WEBPACK_IMPORTED_MODULE_13__["UserResolver"], _core_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: rootRouterConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootRouterConfig", function() { return rootRouterConfig; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _user_user_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.resolver */ "./src/app/user/user.resolver.ts");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/auth.guard */ "./src/app/core/auth.guard.ts");
/* harmony import */ var _var_www_html_ngFirebaseV6_copy_src_app_employees_employees_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/app/employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _var_www_html_ngFirebaseV6_copy_src_app_employees_employee_employee_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/app/employees/employee/employee.component */ "./src/app/employees/employee/employee.component.ts");





//import { CustomersComponent } from './customers/customers.component'


const rootRouterConfig = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    // { path: 'user', component: UserComponent,   resolve: { data: UserResolver}, children: [
    //   { path: '', redirectTo: 'Employees', pathMatch: 'full' },
    //   { path: 'Employees', component: EmployeesComponent},
    //   { path: 'AddEmployees', component: EmployeeComponent},
    //   { path: 'AddEmployees/:id', component: EmployeeComponent}
    // ]},
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_1__["UserComponent"], resolve: { data: _user_user_resolver__WEBPACK_IMPORTED_MODULE_3__["UserResolver"] }, children: [
            { path: '', redirectTo: 'Employees', pathMatch: 'full', resolve: { data: _user_user_resolver__WEBPACK_IMPORTED_MODULE_3__["UserResolver"] } },
            { path: 'Employees', component: _var_www_html_ngFirebaseV6_copy_src_app_employees_employees_component__WEBPACK_IMPORTED_MODULE_5__["EmployeesComponent"], resolve: { data: _user_user_resolver__WEBPACK_IMPORTED_MODULE_3__["UserResolver"] } },
            { path: 'AddEmployees', component: _var_www_html_ngFirebaseV6_copy_src_app_employees_employee_employee_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeComponent"], resolve: { data: _user_user_resolver__WEBPACK_IMPORTED_MODULE_3__["UserResolver"] } },
            { path: 'AddEmployees/:id', component: _var_www_html_ngFirebaseV6_copy_src_app_employees_employee_employee_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeComponent"], resolve: { data: _user_user_resolver__WEBPACK_IMPORTED_MODULE_3__["UserResolver"] } }
        ] }
];


/***/ }),

/***/ "./src/app/core/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/core/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/user.service */ "./src/app/core/user.service.ts");





let AuthGuard = class AuthGuard {
    constructor(afAuth, userService, router) {
        this.afAuth = afAuth;
        this.userService = userService;
        this.router = router;
    }
    canActivate() {
        return new Promise((resolve, reject) => {
            this.userService.getCurrentUser()
                .then(user => {
                this.router.navigate(['/user']);
                return resolve(false);
            }, err => {
                return resolve(true);
            });
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _core_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/core/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);


//import 'rxjs/add/operator/toPromise';


let AuthService = class AuthService {
    constructor(afAuth) {
        this.afAuth = afAuth;
    }
    doFacebookLogin() {
        return new Promise((resolve, reject) => {
            let provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].FacebookAuthProvider();
            this.afAuth.auth
                .signInWithPopup(provider)
                .then(res => {
                resolve(res);
            }, err => {
                console.log(err);
                reject(err);
            });
        });
    }
    doTwitterLogin() {
        return new Promise((resolve, reject) => {
            let provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].TwitterAuthProvider();
            this.afAuth.auth
                .signInWithPopup(provider)
                .then(res => {
                resolve(res);
            }, err => {
                console.log(err);
                reject(err);
            });
        });
    }
    doGoogleLogin() {
        return new Promise((resolve, reject) => {
            let provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            this.afAuth.auth
                .signInWithPopup(provider)
                .then(res => {
                resolve(res);
            }, err => {
                console.log(err);
                reject(err);
            });
        });
    }
    doRegister(value) {
        return new Promise((resolve, reject) => {
            firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().createUserWithEmailAndPassword(value.email, value.password)
                .then(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    doLogin(value) {
        return new Promise((resolve, reject) => {
            firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().signInWithEmailAndPassword(value.email, value.password)
                .then(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    doLogout() {
        return new Promise((resolve, reject) => {
            if (firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser) {
                this.afAuth.auth.signOut();
                resolve();
            }
            else {
                reject();
            }
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/core/user.model.ts":
/*!************************************!*\
  !*** ./src/app/core/user.model.ts ***!
  \************************************/
/*! exports provided: FirebaseUserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseUserModel", function() { return FirebaseUserModel; });
class FirebaseUserModel {
    constructor() {
        this.image = "";
        this.name = "";
        this.provider = "";
    }
}


/***/ }),

/***/ "./src/app/core/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);


//import 'rxjs/add/operator/toPromise';



let UserService = class UserService {
    constructor(db, afAuth) {
        this.db = db;
        this.afAuth = afAuth;
    }
    getCurrentUser() {
        return new Promise((resolve, reject) => {
            var user = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    resolve(user);
                }
                else {
                    reject('No user logged in');
                }
            });
        });
    }
    updateCurrentUser(value) {
        return new Promise((resolve, reject) => {
            var user = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser;
            user.updateProfile({
                displayName: value.name,
                photoURL: user.photoURL
            }).then(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserService);



/***/ }),

/***/ "./src/app/employees/employee-list/employee-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/employees/employee-list/employee-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZS1saXN0L2VtcGxveWVlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/employees/employee-list/employee-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/employees/employee-list/employee-list.component.ts ***!
  \********************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _var_www_html_ngFirebaseV6_copy_src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/shared/employee.service */ "./src/app/shared/employee.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let EmployeeListComponent = class EmployeeListComponent {
    constructor(service, firestore, toastr) {
        this.service = service;
        this.firestore = firestore;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.service.getEmployees().subscribe(actionArray => {
            this.list = actionArray.map(item => {
                return Object.assign({ id: item.payload.doc.id }, item.payload.doc.data());
            });
        });
    }
    onEdit(emp) {
        this.service.formData = Object.assign({}, emp);
    }
    onDelete(id) {
        if (confirm("Are you sure to delete this record?")) {
            this.firestore.doc('employees/' + id).delete();
            this.toastr.warning('Deleted successfully', 'EMP. Register');
        }
    }
};
EmployeeListComponent.ctorParameters = () => [
    { type: _var_www_html_ngFirebaseV6_copy_src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
EmployeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-employee-list',
        template: __webpack_require__(/*! raw-loader!./employee-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/employees/employee-list/employee-list.component.html"),
        styles: [__webpack_require__(/*! ./employee-list.component.css */ "./src/app/employees/employee-list/employee-list.component.css")]
    })
], EmployeeListComponent);



/***/ }),

/***/ "./src/app/employees/employee/employee.component.css":
/*!***********************************************************!*\
  !*** ./src/app/employees/employee/employee.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/employees/employee/employee.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/employees/employee/employee.component.ts ***!
  \**********************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _var_www_html_ngFirebaseV6_copy_src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/app/shared/employee.service */ "./src/app/shared/employee.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let EmployeeComponent = class EmployeeComponent {
    constructor(service, firestore, toastr) {
        this.service = service;
        this.firestore = firestore;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.resetForm();
    }
    resetForm(form) {
        if (form != null)
            form.resetForm();
        this.service.formData = {
            id: null,
            fullName: '',
            position: '',
            empCode: '',
            mobile: '',
        };
    }
    onSubmit(form) {
        let data = Object.assign({}, form.value);
        delete data.id;
        if (form.value.id == null)
            this.firestore.collection('employees').add(data);
        else
            this.firestore.doc('employees/' + form.value.id).update(data);
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'EMP. Register');
    }
};
EmployeeComponent.ctorParameters = () => [
    { type: _var_www_html_ngFirebaseV6_copy_src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee',
        template: __webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/index.js!./src/app/employees/employee/employee.component.html"),
        styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/employees/employee/employee.component.css")]
    })
], EmployeeComponent);



/***/ }),

/***/ "./src/app/employees/employees.component.css":
/*!***************************************************!*\
  !*** ./src/app/employees/employees.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/employees/employees.component.ts":
/*!**************************************************!*\
  !*** ./src/app/employees/employees.component.ts ***!
  \**************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EmployeesComponent = class EmployeesComponent {
    constructor() { }
    ngOnInit() {
    }
};
EmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employees',
        template: __webpack_require__(/*! raw-loader!./employees.component.html */ "./node_modules/raw-loader/index.js!./src/app/employees/employees.component.html"),
        styles: [__webpack_require__(/*! ./employees.component.css */ "./src/app/employees/employees.component.css")]
    })
], EmployeesComponent);



/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let LoginComponent = class LoginComponent {
    constructor(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.errorMessage = '';
        this.createForm();
    }
    createForm() {
        this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    tryFacebookLogin() {
        this.authService.doFacebookLogin()
            .then(res => {
            this.router.navigate(['/user']);
        });
    }
    tryTwitterLogin() {
        this.authService.doTwitterLogin()
            .then(res => {
            this.router.navigate(['/user']);
        });
    }
    tryGoogleLogin() {
        this.authService.doGoogleLogin()
            .then(res => {
            this.router.navigate(['/user']);
        });
    }
    tryLogin(value) {
        this.authService.doLogin(value)
            .then(res => {
            this.router.navigate(['/user']);
        }, err => {
            console.log(err);
            this.errorMessage = err.message;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.scss */ "./src/app/login/login.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/login/login.scss":
/*!**********************************!*\
  !*** ./src/app/login/login.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  text-align: center;\n  font-size: 30px;\n  margin-bottom: 40px;\n}\n\n.row {\n  margin-top: 10px;\n}\n\n.error {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmdGaXJlYmFzZVY2IChjb3B5KS9zcmMvYXBwL2xvZ2luL2xvZ2luLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLnJvd3tcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmVycm9ye1xuICBjb2xvcjogcmVkO1xufVxuIiwiLmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4ucm93IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  text-align: center;\n  font-size: 30px;\n  margin-bottom: 40px;\n}\n\n.row {\n  margin-top: 10px;\n}\n\n.error {\n  color: red;\n}\n\n.success {\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmdGaXJlYmFzZVY2IChjb3B5KS9zcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLnJvd3tcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmVycm9ye1xuICBjb2xvcjogcmVkO1xufVxuXG4uc3VjY2Vzc3tcbiAgY29sb3I6IGdyZWVuO1xufVxuIiwiLmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4ucm93IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnN1Y2Nlc3Mge1xuICBjb2xvcjogZ3JlZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let RegisterComponent = class RegisterComponent {
    constructor(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.errorMessage = '';
        this.successMessage = '';
        this.createForm();
    }
    createForm() {
        this.registerForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    tryFacebookLogin() {
        this.authService.doFacebookLogin()
            .then(res => {
            this.router.navigate(['/user']);
        }, err => console.log(err));
    }
    tryTwitterLogin() {
        this.authService.doTwitterLogin()
            .then(res => {
            this.router.navigate(['/user']);
        }, err => console.log(err));
    }
    tryGoogleLogin() {
        this.authService.doGoogleLogin()
            .then(res => {
            this.router.navigate(['/user']);
        }, err => console.log(err));
    }
    tryRegister(value) {
        this.authService.doRegister(value)
            .then(res => {
            console.log(res);
            this.errorMessage = "";
            this.successMessage = "Your account has been created";
        }, err => {
            console.log(err);
            this.errorMessage = err.message;
            this.successMessage = "";
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/shared/employee.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/employee.service.ts ***!
  \********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let EmployeeService = class EmployeeService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getEmployees() {
        return this.firestore.collection('employees').snapshotChanges();
    }
};
EmployeeService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }
];
EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], EmployeeService);



/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/user.model */ "./src/app/core/user.model.ts");








let UserComponent = class UserComponent {
    constructor(userService, authService, route, location, fb) {
        this.userService = userService;
        this.authService = authService;
        this.route = route;
        this.location = location;
        this.fb = fb;
        this.user = new _core_user_model__WEBPACK_IMPORTED_MODULE_7__["FirebaseUserModel"]();
    }
    ngOnInit() {
        this.route.data.subscribe(routeData => {
            let data = routeData['data'];
            if (data) {
                this.user = data;
                this.createForm(this.user.name);
            }
        });
    }
    createForm(name) {
        this.profileForm = this.fb.group({
            name: [name, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
    }
    save(value) {
        this.userService.updateCurrentUser(value)
            .then(res => {
            console.log(res);
        }, err => console.log(err));
    }
    logout() {
        this.authService.doLogout()
            .then((res) => {
            this.location.back();
        }, (error) => {
            console.log("Logout error", error);
        });
    }
};
UserComponent.ctorParameters = () => [
    { type: _core_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-user',
        template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html"),
        styles: [__webpack_require__(/*! ./user.scss */ "./src/app/user/user.scss")]
    })
], UserComponent);



/***/ }),

/***/ "./src/app/user/user.resolver.ts":
/*!***************************************!*\
  !*** ./src/app/user/user.resolver.ts ***!
  \***************************************/
/*! exports provided: UserResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolver", function() { return UserResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _core_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/user.model */ "./src/app/core/user.model.ts");





let UserResolver = class UserResolver {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    resolve(route) {
        let user = new _core_user_model__WEBPACK_IMPORTED_MODULE_4__["FirebaseUserModel"]();
        return new Promise((resolve, reject) => {
            this.userService.getCurrentUser()
                .then(res => {
                if (res.providerData[0].providerId == 'password') {
                    user.image = 'https://via.placeholder.com/400x300';
                    user.name = res.displayName;
                    user.provider = res.providerData[0].providerId;
                    return resolve(user);
                }
                else {
                    user.image = res.photoURL;
                    user.name = res.displayName;
                    user.provider = res.providerData[0].providerId;
                    return resolve(user);
                }
            }, err => {
                this.router.navigate(['/login']);
                return reject(err);
            });
        });
    }
};
UserResolver.ctorParameters = () => [
    { type: _core_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UserResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserResolver);



/***/ }),

/***/ "./src/app/user/user.scss":
/*!********************************!*\
  !*** ./src/app/user/user.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  text-align: center;\n  font-size: 30px;\n  margin-bottom: 40px;\n}\n\n.row {\n  margin-top: 10px;\n}\n\n.image {\n  width: 100%;\n}\n\na {\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: none;\n}\n\n.navbar-inverse {\n  background: #0B1541;\n}\n\na {\n  color: white;\n  font-weight: bold;\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.active a {\n  background: #76beee;\n  color: white;\n  padding: 20px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmdGaXJlYmFzZVY2IChjb3B5KS9zcmMvYXBwL3VzZXIvdXNlci5zY3NzIiwic3JjL2FwcC91c2VyL3VzZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQUkscUJBQUE7QUNFSjs7QURGNEI7RUFBVSxxQkFBQTtBQ010Qzs7QURKQTtFQUFrQixtQkFBQTtBQ1FsQjs7QUROQztFQUNDLFlBQUE7RUFBYyxpQkFBQTtFQUFtQixlQUFBO0VBQWlCLGVBQUE7QUNZcEQ7O0FEVkM7RUFBVyxtQkFBQTtFQUFnQyxZQUFBO0VBQWMsYUFBQTtFQUFlLHdCQUFBO0VBQUEsZ0JBQUE7QUNpQnpFIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLnJvd3tcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmltYWdlIHtcbiAgd2lkdGg6IDEwMCVcbn1cblxuYSB7IHRleHQtZGVjb3JhdGlvbjogbm9uZTt9IGE6aG92ZXIgeyB0ZXh0LWRlY29yYXRpb246IG5vbmU7fVxuXG4ubmF2YmFyLWludmVyc2UgeyBiYWNrZ3JvdW5kOiAjMEIxNTQxO31cblxuIGEge1xuICBjb2xvcjogd2hpdGU7IGZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE4cHg7IGN1cnNvcjogcG9pbnRlcjtcbn1cbiAuYWN0aXZlIGF7IGJhY2tncm91bmQ6IHJnYigxMTgsIDE5MCwgMjM4KTsgY29sb3I6IHdoaXRlOyBwYWRkaW5nOiAyMHB4OyB0cmFuc2l0aW9uOiAwLjVzOyB9IiwiLmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4ucm93IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5uYXZiYXItaW52ZXJzZSB7XG4gIGJhY2tncm91bmQ6ICMwQjE1NDE7XG59XG5cbmEge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFjdGl2ZSBhIHtcbiAgYmFja2dyb3VuZDogIzc2YmVlZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufSJdfQ== */"

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBCnTg6wsD96SSVtU8Ol2CBo761gXpixvk",
        authDomain: "helloworld-4f436.firebaseapp.com",
        databaseURL: "https://helloworld-4f436.firebaseio.com",
        projectId: "helloworld-4f436",
        storageBucket: "",
        messagingSenderId: "552902600985",
        appId: "1:552902600985:web:83a4d161add33711"
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/ngFirebaseV6 (copy)/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map