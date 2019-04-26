// function mybox() {
//     var box = document.getElementById("nav").getElementsByTagName("li");
//     for (var i = 0; i < box.length; i++) {
//         box[i].onmouseover = function () {
//             console.log(this)
//             this.className += (this.className.length > 0 ? " " : "") + "sfhover";
//         }
//         box[i].onMouseUp = function () {
//             this.calssName += (this.calssName.length > 0 ? " " : "") + "sfhover";
//         }
//         box[i].onMouseDown = function () {
//             this.calssName += (this.calssName.length > 0 ? " " : "") + "sfhover";
//         }
//         box[i].onmouseout = function () {
//             this.className = this.className.replace(new RegExp("( ?|^)sfhover\\b"),
//                 "");
//         }
//     }
// }
// window.onload = mybox;