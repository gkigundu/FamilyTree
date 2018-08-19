(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_auth_redirect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth-redirect.service */ "./src/app/services/auth-redirect.service.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_reset_pw_reset_pw_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/reset-pw/reset-pw.component */ "./src/app/components/reset-pw/reset-pw.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// creating our routes 
var appRoutes = [
    //each route has an object, path
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], canActivate: [_services_auth_redirect_service__WEBPACK_IMPORTED_MODULE_3__["AuthRedirectService"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], canActivate: [_services_auth_redirect_service__WEBPACK_IMPORTED_MODULE_3__["AuthRedirectService"]] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], canActivate: [_services_auth_redirect_service__WEBPACK_IMPORTED_MODULE_3__["AuthRedirectService"]] },
    { path: 'forgotpassword', component: _components_reset_pw_reset_pw_component__WEBPACK_IMPORTED_MODULE_6__["ResetPWComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n    font-size: 50px;\n    margin: auto;\n    text-align: center;\n}\n\nimg {\n    width: 100%;\n    height: auto;\n}\n\n.container {\n    width: 70%;\n    margin: 2% auto;\n}\n\n/* effective under 1200px */\n\n@media(max-width: 1200px) {\n    .container {\n        width: 100%;\n    }\n    h1 {\n        font-size: 40px;\n    }\n}\n\n/* effective under between 900px to 450px */\n\n@media(max-width: 900px) and (min-width: 450px) {\n    .container {\n        width: 100%;\n    }\n\n    h1 {\n        font-size: 30px;\n    }\n}\n\n/* effective under 450px */\n\n@media(max-width: 450px) {\n    .container {\n        width: 100%;\n    }\n\n    h1 {\n        font-size: 17px;\n    }\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-navbar></app-navbar>\n\n\n  <div class=\"container\">\n    <h1 >\n      Welcome to {{ title }}!\n    </h1>\n  </div>\n  <div class=\"container\">\n    <img src=\"assets/images/beachFamily.jpg\" />\n  </div>\n\n  <app-user></app-user> -->\n\n  <app-navbar></app-navbar>\n  <router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_reset_pw_reset_pw_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/reset-pw/reset-pw.component */ "./src/app/components/reset-pw/reset-pw.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// importing FormsModule for two-way data binding to form elements: ngModel








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_reset_pw_reset_pw_component__WEBPACK_IMPORTED_MODULE_9__["ResetPWComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n    font-size: 50px;\n    margin: auto;\n    text-align: center;\n}\n\nimg {\n    width: 100%;\n    height: auto;\n}\n\n.container {\n    width: 70%;\n    margin: 2% auto;\n}\n\n/* effective under 1200px */\n\n@media(max-width: 1200px) {\n    .container {\n        width: 100%;\n    }\n    h1 {\n        font-size: 40px;\n    }\n}\n\n/* effective under between 900px to 450px */\n\n@media(max-width: 900px) and (min-width: 450px) {\n    .container {\n        width: 100%;\n    }\n\n    h1 {\n        font-size: 30px;\n    }\n}\n\n/* effective under 450px */\n\n@media(max-width: 450px) {\n    .container {\n        width: 100%;\n    }\n\n    h1 {\n        font-size: 17px;\n    }\n}\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 >\n    Welcome to {{ title }}!\n  </h1>\n</div>\n<div class=\"container\">\n  <img src=\"assets/images/beachFamily.jpg\" />\n  {{user}}\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService) {
        this.userService = userService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(this.userService.persistGetUser());
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n    text-align: center;\n}\n\n.content {\n    width: 30%;\n    min-width: 150px;\n    margin: auto;\n    margin-top: 5%;\n    border: 5px solid;\n    border-radius: 10px;\n    padding: 3%;\n}\n\n.form-group{\n    width: 80%;\n    min-width: 130px;\n    margin: auto;\n    margin-right :5%;\n    margin-top: 5%;\n}\n\nlabel{    \n    width: 80%;\n    min-width: 110px;\n    display: block;\n}\n\nbutton {    \n    width: 80%;\n    min-width: 110px;\n    display: block;\n    margin-right :5%;\n    margin-top: 5%;\n    white-space: normal;\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to FamilyTree!</h1>\n\n    <div class=\"content\">\n     \n       <form class=\"form\">\n           <div class=\"form-group\">\n              \n              <label for=\"username\">Username: </label>\n              <input class=\"form-control\" [(ngModel)]=\"username\" id=\"username\" type=\"text\" placeholder=\"email\" name=\"username\" ng-required=\"required\">\n         \n              <label for=\"password\">Password: </label>\n              <input class=\"form-control\" [(ngModel)]=\"password\" id=\"password\" type=\"password\" placeholder=\"password\" name=\"password\" ng-required=\"required\">\n           </div>\n            \n            <div class=\"form-group\">\n                <button class=\"btn btn-primary\" id=\"login\" (click)=\"login()\" type=\"submit\">Login</button>\n                <button class=\"btn\"  id=\"register\" [routerLink]=\"['/register']\" >Register</button>\n                <button class=\"btn\" id=\"resetPW\" [routerLink]=\"['/forgotpassword']\">Forgot Password</button>\n            </div>     \n       </form>\n     </div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _models_userlogin_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/userlogin.model */ "./src/app/models/userlogin.model.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/user.model */ "./src/app/models/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, auth, userService) {
        this.router = router;
        this.auth = auth;
        this.userService = userService;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var userLogin = new _models_userlogin_model__WEBPACK_IMPORTED_MODULE_4__["UserLogin"]();
        this.userService.login(userLogin).subscribe(function (resp) {
            var respJSON = JSON.parse(resp['body']);
            if (resp['status'] == 202) {
                //user successfully logged in
                //storing data in cache obserable
                var newUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_5__["User"]();
                newUser.$setAll(respJSON);
                _this.userService.persistSetUser(newUser);
                _this.router.navigate(['home']);
            }
        }, function (err) {
            alert("Wrong Password!");
            console.log(err.status);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .fix-me {\n    position: fixed;\n} */\n\n.navbar-brand, .nav-link {\n    font-size: 30px;\n}\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light fix-me\">\n  <a class=\"navbar-brand \" routerLink=\"/\">Family Tree</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav \">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"signOutBtn\" routerLink=\"/\">Home</a>\n          </li>\n          </ul>\n    <ul class=\"navbar-nav \">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"signOutBtn\" routerLink=\"/home\">Profile</a>\n      </li>\n      </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"signOutBtn\" routerLink=\"/login\" (click)=\"logout()\">Sign Out</a>\n      </li>\n      \n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, router, user) {
        this.auth = auth;
        this.router = router;
        this.user = user;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        this.auth.deleteToken();
        this.user.persistRemoveUser();
        this.router.navigate(['login']);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Register</h1>\n<div class=\"content\">\n     \n    <form class=\"form\">\n        <div class=\"form-group\">\n            <label for=\"email\">Email: </label>\n            <input class=\"form-control\" [(ngModel)]=\"email\" id=\"email\" type=\"email\" placeholder=\"Email\" name=\"email\" required>\n\n           <label for=\"username\">Username: </label>\n           <input class=\"form-control\" [(ngModel)]=\"username\" id=\"username\" type=\"text\" placeholder=\"Username\" name=\"username\" required>\n      \n           <label for=\"password\">Password: </label>\n           <input class=\"form-control\" [(ngModel)]=\"password\" id=\"password\" type=\"password\" name=\"password\" required>\n        </div>\n         \n         <div class=\"form-group\">\n             <button class=\"btn btn-primary\" id=\"register\" (click)=\"register()\" type=\"submit\">Register</button>\n         </div>     \n    </form>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _models_userlogin_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/userlogin.model */ "./src/app/models/userlogin.model.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/user.model */ "./src/app/models/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        var userLogin = new _models_userlogin_model__WEBPACK_IMPORTED_MODULE_2__["UserLogin"]();
        userLogin.$email = this.email;
        userLogin.$username = this.username;
        userLogin.$password = this.password;
        this.userService.register(userLogin).subscribe(function (resp) {
            console.log("Entering registerComponent.register.resp");
            var respJSON = JSON.parse(resp['body']);
            console.log("respJSON is " + respJSON);
            if (resp['status'] == 202) {
                var newUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
                newUser.$setAll(respJSON);
                _this.userService.persistSetUser(newUser);
                _this.router.navigate(['home']);
            }
            console.log("Exiting registerComponent.register.resp");
        }, function (err) {
            console.log("Entering registerComponent.register.err");
            alert("Unable to register!");
            console.log(err.status);
            console.log("Exitin registerComponent.register.err");
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/reset-pw/reset-pw.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/reset-pw/reset-pw.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/reset-pw/reset-pw.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/reset-pw/reset-pw.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Reset Password</h1>\n"

/***/ }),

/***/ "./src/app/components/reset-pw/reset-pw.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/reset-pw/reset-pw.component.ts ***!
  \***********************************************************/
/*! exports provided: ResetPWComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPWComponent", function() { return ResetPWComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResetPWComponent = /** @class */ (function () {
    function ResetPWComponent() {
    }
    ResetPWComponent.prototype.ngOnInit = function () {
    };
    ResetPWComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-pw',
            template: __webpack_require__(/*! ./reset-pw.component.html */ "./src/app/components/reset-pw/reset-pw.component.html"),
            styles: [__webpack_require__(/*! ./reset-pw.component.css */ "./src/app/components/reset-pw/reset-pw.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResetPWComponent);
    return ResetPWComponent;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    //soon to come
    //private profilePic:Blob;
    User.prototype.$setAll = function (newUser) {
        this.userID = newUser.$userID;
        this.email = newUser.$email;
    };
    Object.defineProperty(User.prototype, "$userID", {
        get: function () {
            return this.userID;
        },
        set: function (value) {
            this.userID = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "$email", {
        get: function () {
            return this.email;
        },
        set: function (value) {
            this.email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "$phoneNumber", {
        get: function () {
            return this.phoneNumber;
        },
        set: function (value) {
            this.phoneNumber = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "$firstName", {
        get: function () {
            return this.firstName;
        },
        set: function (value) {
            this.firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "$lastName", {
        get: function () {
            return this.lastName;
        },
        set: function (value) {
            this.lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "$location", {
        get: function () {
            return this.location;
        },
        set: function (value) {
            this.location = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "$age", {
        get: function () {
            return this.age;
        },
        set: function (value) {
            this.age = value;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());



/***/ }),

/***/ "./src/app/models/userlogin.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/userlogin.model.ts ***!
  \*******************************************/
/*! exports provided: UserLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogin", function() { return UserLogin; });
var UserLogin = /** @class */ (function () {
    //private phoneNumber:number;
    function UserLogin() {
    }
    UserLogin.prototype.$setAll = function (newUser) {
        this.username = newUser.$username;
        this.password = newUser.$password;
        this.email = newUser.$email;
        //this.phoneNumber=newUser.$phoneNumber;
    };
    Object.defineProperty(UserLogin.prototype, "$username", {
        get: function () {
            return this.username;
        },
        set: function (value) {
            this.username = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserLogin.prototype, "$password", {
        get: function () {
            return this.password;
        },
        set: function (value) {
            this.password = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserLogin.prototype, "$email", {
        get: function () {
            return this.email;
        } /*
        public set $phoneNumber(value:number){
            this.phoneNumber=value;
        }
        public get $phoneNumber(){
            return this.phoneNumber;
        }*/,
        set: function (value) {
            this.email = value;
        },
        enumerable: true,
        configurable: true
    });
    return UserLogin;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuardService.prototype.canActivate = function (next, state) {
        if (this.authService.checkToken()) {
            return true;
        }
        this.router.navigate(['login']);
        alert("Login required");
        return false;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth-redirect.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/auth-redirect.service.ts ***!
  \***************************************************/
/*! exports provided: AuthRedirectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRedirectService", function() { return AuthRedirectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthRedirectService = /** @class */ (function () {
    function AuthRedirectService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthRedirectService.prototype.canActivate = function (next, state) {
        if (this.authService.checkToken()) {
            this.router.navigate(['home']);
            return false;
        }
        return true;
    };
    AuthRedirectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthRedirectService);
    return AuthRedirectService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.setToken = function (newToken) {
        localStorage.setItem('Token', newToken);
    };
    AuthService.prototype.getToken = function () {
        console.log(localStorage.getItem('Token'));
        return localStorage.getItem('Token');
    };
    AuthService.prototype.deleteToken = function () {
        localStorage.removeItem('Token');
    };
    AuthService.prototype.appendToken = function (url) {
        return url + "?token=" + this.getToken();
    };
    AuthService.prototype.checkToken = function () {
        if (this.getToken() != null) {
            console.log('token not null');
            return true;
        }
        else
            return false;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(htttpClient) {
        this.htttpClient = htttpClient;
        this.userUrl = "http://localhost:8080/familytree/user";
        this.loginUrl = "http://localhost:8080/familytree/login";
        this.header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                ContentType: 'application/json',
                responseType: 'application/json',
                observe: 'response'
            })
        };
    }
    UserService.prototype.register = function (newUserLogin) {
        console.log("Entering userService.register");
        console.log(newUserLogin);
        var tempUrl = this.loginUrl + '/add';
        var requestBody = newUserLogin;
        console.log("Exiting userService.register");
        return this.htttpClient.post(tempUrl, requestBody, this.header);
    };
    UserService.prototype.login = function (userLogin) {
        var tempUrl = this.loginUrl + '/login';
        var requestBody = JSON.stringify(userLogin);
        console.log(requestBody);
        return this.htttpClient.post(tempUrl, requestBody, this.header);
    };
    UserService.prototype.persistSetUser = function (user) {
        localStorage.setItem('User', JSON.stringify(user));
    };
    UserService.prototype.persistCheckUser = function () {
        if (localStorage.getItem('User') != null)
            return true;
        else
            return false;
    };
    UserService.prototype.persistRemoveUser = function () {
        localStorage.removeItem('User');
    };
    UserService.prototype.persistGetUser = function () {
        return localStorage.getItem('User');
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var server = 'http://localhost:8080';
var environment = {
    production: false,
    server: server,
    user: {
        getAllUsers: function () { return server + "/user/all"; },
        getUserByID: function (value) { return server + "/user/id/" + value; },
        getUserByEmail: function (value) { return server + "/user/email/" + value; },
        getUsersByFirstname: function (value) { return server + "/user/firstname/" + value; },
        getUsersByLaststname: function (value) { return server + "/user/lastname/" + value; }
    },
    userLogin: {
        getLoginByEmail: function (value) { return server + "/user/email/" + value; },
        getLoginByUsername: function (value) { return server + "/userlogin/username/" + value; },
    },
    userFamily: {
        getFamilyByUserID: function (value) { return server + "/user/id/" + value; }
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\WatuWetu\projects\FamilyTree\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map