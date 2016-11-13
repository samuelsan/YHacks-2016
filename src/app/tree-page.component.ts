import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LeafComponent, Leaf } from './leaf.component';
import { Transaction } from './transaction';
import { TransactionService } from './transaction.service';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
declare var $:any;

export class Tree {
  treeRef: HTMLElement;
  treeTop: number;
  treeSide: number;
  // amountSpent: number;
}

@Component({
  selector: 'tree-page',
  templateUrl: './tree-page.component.html',
  styleUrls: ['./tree-page.component.css'],
  providers: [TransactionService]
})

export class TreePageComponent implements AfterViewInit {
  // transactions: FirebaseListObservable<any[]>;
  owlMood: string;
  transactions: Transaction[];

  //constructor(af: AngularFire, private transactionService: TransactionService) {
    //this.items = af.database.list('transactions/0');  // example for accessing first transaction
  constructor(af: AngularFire) {
    // this.items = af.database.list('transactions/0');  // example for accessing first transaction

    const queryObservable = af.database.list('/transactions', {
    query: {
      orderByChild: 'amount',
    }
    });

    /*for (var i=0; i<5; i++) {
      amountSpent += transaction.amount; //this.amountSpent = queryObservable.
    }*/


    // total amount spent is $12155.45
    // queryObservable.subscribe(queriedItems => {
      // this.amountSpent = queriedItems.forEach;
      // console.log(queriedItems);
// });
    // console.log(queryObservable);
    // this.amountSpent = -12155.45;

    this.owlMood = "happy";
  }

  getTransactions(): void {
    //this.transactions = this.transactionService.getTransactions()
      //  .then(transactions => this.transactions = transactions);;
  }

  setOwlMood(owlMood: string): void {
    this.owlMood = owlMood;
  }

  // setAmountSpent(amountSpent: number) : void{
  //   amountSpent = amountSpent;
  // }
  // leafSelector: LeafComponent;
  treeHeight: string;
  tree: Tree;
  leaves: Array<Leaf>;
  resizeHandler: EventListener;
  pluckLeaves: Function;

  ngOnInit() {
    this.getTransactions();

    //this.treeHeight = "height: " + (window.innerHeight - 250) + " px";
    this.leaves = [];
    var tRef:HTMLElement = document.getElementById("tree");
    var tTop: number = tRef.offsetTop;
    var tSide: number = tRef.offsetLeft;
    //var tWidth: any = document.getElementById("tree").width;
    this.tree = {
      treeRef:tRef,
      treeTop:tTop,
      treeSide:tSide
    }

    this.drawLeaves();
    //setInterval(fallLeaf(leaves), 1000);

    var timer;

    this.resizeHandler = function(e) {
      clearTimeout(timer);
      timer = setTimeout(this.doneResizing, 100); // throttling
    }.bind(this);

    this.pluckLeaves = function(e) {
      var noOfLeaves: number = 3;
      //var removed = [];
      // pick out the leaves
      for(var i = 0; i < noOfLeaves; i++) {
        var nextIndex: number =  Math.floor(Math.random() * (this.leaves.length + 1));
        this.leaves[nextIndex].status = true;
        //removed.push(nextIndex);
        //this.leaves.splice(nextIndex, 1);
        //this.leaves.pop();
        //console.log(this.leaves[nextIndex]);
      }
      // for(var i = 0; i < removed.length; i++) {
      //   this.leaves.splice(removed[i], 1);
      // }
    }.bind(this);

    window.addEventListener('resize', this.resizeHandler);

    window.setTimeout(this.pluckLeaves, 1000);
    //setInterval(fall)
  }

  drawLeaves() {
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

    for(var i = 0; i < branchPoints.length; i++) {
      for (var r : any = 90; r >= 0; r -= 50) {
        for (var theta: any = 0; theta < 2 * Math.PI; theta += Math.PI / 6) {
          var p:any = branchPoints[i];
          var x = this.tree.treeSide + p.x + r * Math.cos(theta) - 30;
          var y = this.tree.treeTop + p.y + r * Math.sin(theta) - 50;
          var rotation = Math.random() * 360;
          var zIn = Math.random() * 10;
          var leaf:Leaf = {x: x, y: y, rotation: rotation, zIn: zIn, status: false};
          this.leaves.push(leaf);
        }
      }
    }
  }



  // given a transaction, this falls
  fallLeaf() {
    var noOfLeaves: number = 10;
    // pick out the leaves
    for(var i = 0; i < noOfLeaves; i++) {
      var nextIndex: number =  Math.floor(Math.random() * this.leaves.length);
      this.leaves[nextIndex].status = true;
      console.log(this.leaves[nextIndex]);
    }
    // animate them falling
    // make them clickable?
  }

  doneResizing() {
    var tRef:HTMLElement = document.getElementById("tree");
    var tTop: number = tRef.offsetTop;
    var tSide: number = tRef.offsetLeft;
    //var tWidth: any = document.getElementById("tree").width;
    this.tree = {
      treeRef:tRef,
      treeTop:tTop,
      treeSide:tSide
    }
    this.leaves.length = 0;
    this.drawLeaves();
  }

  ngAfterViewInit() {
    // push the transaction table programmatically below the page
    $(".details-box").css({top: window.innerHeight + 220});

    // button for scrolling
    $(function() {
  	$('a[href*=#]').on('click', function(e) {
  		e.preventDefault();
  		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    	});
    });

    // on first login, want to display a short tutorial
    $(function(){
        console.log($(".dialogue"));
        $(".dialogue").typed({
          strings: ["Hi I'm Orwell.", "It's so nice to meet you!", ""],
          showCursor: false,
          typeSpeed: 80
        });
    });

  }
}
