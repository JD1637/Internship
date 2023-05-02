"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var IceCreamComponent = /** @class */ (function () {
    function IceCreamComponent() {
        this.arr = ["vanilla", "chocalate", "mint", "mango"];
        this.random = this.arr[(Math.random() * this.arr.length) | 0];
        this.flavor = this.random;
        this.toppings = [];
    }
    IceCreamComponent.prototype.addTopping = function (topping) {
        if (topping === void 0) { topping = "sprinkles"; }
        this.toppings.push(topping);
    };
    __decorate([
        emoji()
    ], IceCreamComponent.prototype, "flavor", void 0);
    __decorate([
        Confirm("Are you sure?"),
        Confirm('Are you super super sure?')
    ], IceCreamComponent.prototype, "addTopping", null);
    return IceCreamComponent;
}());
function emoji() {
    return function (target, key) {
        var val = target[key];
        var getter = function () {
            return val;
        };
        var setter = function (next) {
            console.log("Updating flavor...");
            if (next == "vanilla") {
                val = "\uD83D\uDE04  " + next + "  \uD83D\uDE04";
            }
            else if (next == "chocalate") {
                val = "\uD83D\uDE38  " + next + "  \uD83D\uDE38";
            }
            else if (next == "mint") {
                val = "\uD83D\uDE19 " + next + "  \uD83D\uDE19";
            }
            else {
                val = "\uD83D\uDE03  " + next + "  \uD83D\uDE03";
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
}
function Confirm(messege) {
    return function (target, key, descriptor) {
        var original = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var allow = confirm(messege);
            if (allow) {
                var result = original.apply(this, args);
                return result;
            }
            else {
                return null;
            }
        };
        return descriptor;
    };
}
var obj = new IceCreamComponent();
console.log(obj.flavor);
// obj.addTopping();
console.log(obj.toppings);
function add() {
    var inputData = document.querySelector("#inp");
    var value = inputData === null || inputData === void 0 ? void 0 : inputData.value;
    var res = obj.addTopping(value);
    //   console.log(value);
    console.log(obj.toppings);
    if (res !== null) {
        var div = document.querySelector(".display");
        var para = document.createElement("p");
        para.className = "para1";
        div === null || div === void 0 ? void 0 : div.appendChild(para);
        para === null || para === void 0 ? void 0 : para.append(value + " ");
    }
}
function change() {
    var obj1 = new IceCreamComponent();
    var print = document.getElementById("print");
    print.innerHTML = "";
    print === null || print === void 0 ? void 0 : print.append(obj1.flavor);
    console.log("ki");
}
// console.log(obj.flavor);
// let para1 = document.querySelector(".print") as HTMLParagraphElement;
// para1?.append(obj.flavor);
// const x = document.getElementById("change");
// x?.addEventListener("click", () => {
//   let obj1 = new IceCreamComponent();
//   let print = document.getElementById("print") as HTMLElement;
//   print.innerHTML = "";
//   print?.append(obj1.flavor);
//   console.log("ki");
// });
