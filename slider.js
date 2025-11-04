
   // var, let, const; let的值可以被修改
   // querySelector() 是一个 JavaScript 方法，
   // 用于从文档中查找并返回与指定 CSS 选择器 匹配的第一个元素。
   // 如果没有找到匹配项，则返回 null。
   // 该方法可以在 Document 实例和 Element 实例上调用，
   // 接收一个选择器字符串参数。如果需要返回所有匹配项，
   // 可以使用 querySelectorAll() 方法。

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom")

//addEventListener() 方法用于向指定元素添加事件句柄。
// 提示： 使用 removeEventListener() 方法来移除 addEventListener() 方法添加的事件句柄。

//translate() 方法通过在网格上将画布和原点水平移动 x 单位和垂直移动 y 单位，
// 向当前矩阵添加一个平移变换。

let slideNumber = 1;
const length = images.length
const nextSlide = () => { 
      slider.style.transform = `translateX(-${slideNumber * 500}px)`;
      slideNumber++;};
const getFirstSlide = () => { slider.style.transform = `translateX(0px)`;
      slideNumber = 1;
}
const prevSlide = () => {slider.style.transform = `translateX(-${(slideNumber-2) * 500}px)`; 
      slideNumber--;
}
const getLastSlide = () => {slider.style.transform = `translateX(-${(length - 1) * 500}px)`;
      slideNumber = length;}

const changeColor = () => {buttons[slideNumber-1].style.backgroundColor = "white"}

right.addEventListener("click", ()=> {
   slideNumber < length?  nextSlide() : getFirstSlide();
   resetBg()
   changeColor();
})

left.addEventListener("click",()=>{
  slideNumber > 1? prevSlide() : getLastSlide();
  resetBg()
  changeColor()
})

/*创建div元素, 类名为button; 用for循环和appendChild语法增加button数量为length*/


for(let i = 0; i < length; i++) {
   const div = document.createElement("div");
   div.className = "button";
   bottom.appendChild(div);
 }


/*调取所有buttons, 把第一个button,也就是button[0]的背景颜色换为白色*/

buttons = document.querySelectorAll(".button")
buttons[0].style.backgroundColor = "white"

/*当点击第i个button时,slide切换到第i个页面,底部所有buttons颜色先变透明,button[i]再变成白色*/

const resetBg = ()=> {
   buttons.forEach((button) => {
   button.style.backgroundColor = "transparent";
   });
};

buttons.forEach((button, i)=>{
   button.addEventListener("click", ( ) => {
      slider.style.transform = `translateX(-${i * 500}px)`;
      slideNumber = i + 1
      resetBg()
      button.style.backgroundColor = "white";
   });
});


