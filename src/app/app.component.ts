import { Component, AfterViewInit } from '@angular/core';

// 262 241
// main.bundle.js:40921 311 171
// main.bundle.js:40921 349 196
// main.bundle.js:40921 390 211
// main.bundle.js:40921 396 199
// main.bundle.js:40921 436 189
// main.bundle.js:40921 480 215
// main.bundle.js:40921 511 255
// main.bundle.js:40921 545 282
// main.bundle.js:40921 469 341
// main.bundle.js:40921 510 344
// main.bundle.js:40921 371 370
// main.bundle.js:40921 238 290
// main.bundle.js:40921 265 239

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app works!';

  ngAfterViewInit() {
    var c : any = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    window.addEventListener('click', function(evt) {
      console.log(evt.clientX, evt.clientY);
    }, false);
    // change the height of the image to match

    var tree : any = document.getElementById("tree");
    tree.height = window.innerHeight - 250;

    var treeTop = tree.offsetTop;
    var treeSide = tree.offsetLeft;

    ctx.beginPath();
    ctx.scale(1.5, 1);
    // console.log(treeSide + (tree.width / 2), treeTop + tree.height * (1/3))
    ctx.arc((treeSide + (tree.width / 2)) / 1.5, treeTop - tree.height * (1/6), 150, 2 * Math.PI, false);

    // Draw each circle of leaves
    for (var r : any = 150; r >= 0; r -= 50) {
      // Draw each leaf
      for (var theta : any = 0; theta < 2 * Math.PI; theta += Math.PI / 12) {
        var imageObj : any = new Image();
        imageObj.src = "../assets/leaf.png";

        imageObj.data = {
          x: (treeSide + (tree.width / 2)) / 1.5 + r * Math.cos(theta),
          y: treeTop - tree.height * (1/6) + r * Math.sin(theta)
        };

        imageObj.onload = function() {
          console.log(this.x, this.y);
          ctx.restore();
          ctx.scale(1.5, 1);
          ctx.drawImage(this, this.data.x, this.data.y, 25, 35);
          ctx.scale(1/1.5, 1);
        };
       // pick 5-10 leaves to omit from the outer circle
       // otherwise fill the circle with leaves
       // ctx.arc((treeSide + (tree.width / 2)) / 1.5, treeTop - tree.height * (1/6), 150, 2 * Math.PI, false);
      }
    }


    //ctx.restore();
    ctx.stroke();
    ctx.scale(1/1.5, 1);
    ctx.save();

    // generate some leaves
    var noOfLeaves = 60;

    var imageObj : any = new Image();
    imageObj.src = "../assets/leaf.png";
    //console.log(imageObj);
    imageObj.onload = function() {
      ctx.drawImage(imageObj, 0, 0, 35, 35);
    };

  }
}
