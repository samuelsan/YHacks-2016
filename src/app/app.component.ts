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

    // window.addEventListener('click', function(evt) {
    //   console.log(evt.clientX - c.offsetLeft - (tree.offsetLeft + tree.width / 2), evt.clientY - c.offsetTop - (tree.offsetTop)); // offsetTop actually gives center because top: 50%
    // }, false);
    // // change the height of the image to match

    var tree : any = document.getElementById("tree");
    tree.height = window.innerHeight - 250;

    var treeTop = tree.offsetTop;
    var treeSide = tree.offsetLeft;

    leaves = drawLeaves();
    setInterval(fallLeaf(leaves), 1000);

    function doneResizing() {
      treeSide = tree.offsetLeft;
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.canvas.width  = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
      drawLeaves();
    }

    var timer;

    window.addEventListener('resize', function(e) {
      clearTimeout(timer);
      timer = setTimeout(doneResizing, 100); // throttling
    });

    setInterval(fall)

    function drawLeaves() {
      var branchPoints = [
        {x: -39.5, y: 2},
        {x: -107.5, y: -20},
        {x: -164.5, y: -75},
        {x: -142.5, y: -129},
        {x: -92.5, y: -194},
        {x: -57.5, y: -163},
        {x: -22.5, y: -146},
        {x: -11.5, y: -163},
        {x: 25.5, y: -167},
        {x: 76.5, y: -148},
        {x: 105.5, y: -103},
        {x: 133.5, y: -85},
        {x: 60.5, y: -27},
        {x: 101.5, y: -20},
        {x: -50.5, y: -58},
        {x: 19.5, y: -57}
      ];
      leaves = [];
      branchPoints.forEach(function(p) {
        for (var r : any = 50; r >= 0; r -= 10) {
          // Draw each leaf
          for (var theta : any = 0; theta < 2 * Math.PI; theta += Math.PI / 12) {
            var imageObj : any = new Image();
            imageObj.src = "../assets/leaf.png";
            imageObj.data = {
              x: treeSide + tree.width / 2 + p.x + r * Math.cos(theta),
              y: treeTop + p.y + r * Math.sin(theta)
            };
            imageObj.onload = function() {
              console.log(this.x, this.y);
              // ctx.save();
              // ctx.translate(this.data.x, this.data.y)
              // ctx.rotate(Math.random() * 2 * Math.PI);
              ctx.drawImage(this, this.data.x, this.data.y, 35, 35);
              // ctx.restore();
            };
            leaves.push(imageObj);
          }
        }
      });
      return leaves;
    }
    function fallLeaf() {
      // pick a random leaf
      var leaf = Math.floor(Math.random * leaves.size);
      setInterval(leaf, 100) {
        leaf.
      }
    }
  }
}
