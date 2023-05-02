class IceCreamComponent {
  arr: string[] = ["vanilla", "chocalate", "mint", "mango"];
  random = this.arr[(Math.random() * this.arr.length) | 0];

  @emoji()
  flavor = this.random;

  toppings: string[] = [];

  @Confirm("Are you sure?")
  @Confirm('Are you super super sure?')
  addTopping(topping = "sprinkles") {
    this.toppings.push(topping);
  }
}

function emoji() {
  return function (target: any, key: string | symbol) {
    let val = target[key];

    let getter = () => {
      return val;
    };

    let setter = (next: string) => {
      console.log("Updating flavor...");
      if (next == "vanilla") {
        val = `😄  ${next}  😄`;
      } else if (next == "chocalate") {
        val = `😸  ${next}  😸`;
      } else if (next == "mint") {
        val = `😙 ${next}  😙`;
      } else {
        val = `😃  ${next}  😃`;
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

function Confirm(messege: string) {
  return function (
    target: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const allow = confirm(messege);

      if (allow) {
        const result = original.apply(this, args);
        return result;
      } else {
        return null;
      }
    };
    return descriptor;
  };
}

let obj = new IceCreamComponent();

console.log(obj.flavor);
// obj.addTopping();
console.log(obj.toppings);

function add() {
  let inputData = document.querySelector("#inp") as HTMLInputElement | null;
  let value: any = inputData?.value;
  let res = obj.addTopping(value);
  //   console.log(value);
  console.log(obj.toppings);

  if (res !== null) {
    let div = document.querySelector(".display") as HTMLDivElement | null;
    let para = document.createElement("p");
    para.className = "para1";
    div?.appendChild(para);
    para?.append(value + " ");
  }
}

function change() {
  let obj1 = new IceCreamComponent();
  let print = document.getElementById("print") as HTMLElement;
  print.innerHTML = "";
  print?.append(obj1.flavor);
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
