import { Component, AfterViewInit } from '@angular/core';

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
    // change the height of the image to match

    var tree : any = document.getElementById("tree");
    tree.height = window.innerHeight - 250;

    var treeTop = tree.offsetTop;
    var treeSide = tree.offsetLeft;
    ctx.beginPath();

    // console.log(treeSide + (tree.width / 2), treeTop + tree.height * (1/3))
    ctx.arc((treeSide + (tree.width / 2)), treeTop - tree.height * (1/6), 200, 2 * Math.PI, false);
    ctx.stroke();

    // generate some leaves
    var noOfLeaves = 60;

    var imageObj = new Image();
    imageObj.src = "../assets/leaf.png";
    //console.log(imageObj);
    imageObj.onload = function() {
      ctx.drawImage(imageObj, 0, 0, 35, 35);
    };

  }
}
