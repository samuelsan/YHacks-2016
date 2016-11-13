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
  leafVal:number;
  leavesTotal:number;
  leavesFallen:number;
  af:AngularFire;

  //constructor(af: AngularFire, private transactionService: TransactionService) {
    //this.items = af.database.list('transactions/0');  // example for accessing first transaction
  constructor(af: AngularFire) {
    // this.items = af.database.list('transactions/0');  // example for accessing first transaction

    const queryObservable = af.database.list('/transactions', {
    query: {
      orderByChild: 'amount',
    }
    });

    this.af = af;

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

    var timer;

    this.pluckLeaves = function(e) {
      var noOfLeaves: number = this.leavesFallen;
      console.log("no of leaves", noOfLeaves);
      //var removed = [];
      // pick out the leaves
      for(var i = 0; i < noOfLeaves; i++) {
        var nextIndex: number =  Math.floor(Math.random() * this.leaves.length);
        this.leaves[nextIndex].status = true;
      }
    }.bind(this);

    window.addEventListener('resize', this.resizeHandler);

    // find the list of transactions up to a point
    var totalBalance:number = 5000; // assume 5000 dollars for easier demo'ing
    this.af.database.list('/transactions', { preserveSnapshot: true})
    .subscribe(snapshots=>{
        var newTransacs:number = 0;
        snapshots.forEach(snapshot => {
          //console.log(snapshot.key, snapshot.val());
          var nextTransaction = snapshot.val();
          newTransacs += nextTransaction.amount;
        });
        // find the value of each leaf in USD
        this.leafVal = totalBalance / (16 * 2 * 12); // amount of money per leaf
        this.leavesTotal = Math.floor(5000 / this.leafVal);
        this.leavesFallen = Math.floor(newTransacs / this.leafVal) * -1;
        console.log("value of each leaf ", this.leafVal);
        console.log("how many leaves on the tree total ", this.leavesTotal);
        console.log("how many leaves need to fall ", this.leavesFallen);

        // pass values out of callback
        if(this.leavesFallen >= 0)
          window.setTimeout(this.pluckLeaves, 1000);

        // happy, neutral, sad, crying
        var owlMoods = [0.25, 0.5, 0.75, 1];
        var balanceStatus = (this.leavesTotal - this.leavesFallen) / this.leavesTotal;
        if(balanceStatus >= 0 && balanceStatus < owlMoods[0])
          this.owlMood = "happy";
        else if(balanceStatus >= owlMoods[0] && balanceStatus < owlMoods[1])
          this.owlMood = "neutral";
        else if(balanceStatus >= owlMoods[1] && balanceStatus < owlMoods[2])
          this.owlMood = "sad";
        else if(balanceStatus >= owlMoods[3])
          this.owlMood = "crying";
    });
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
          var x = this.tree.treeSide + p.x + r * Math.cos(theta) + 380;
          var y = this.tree.treeTop + p.y + r * Math.sin(theta) - 50;
          var rotation = Math.random() * 360;
          var zIn = Math.random() * 10;
          var leaf:Leaf = {x: x, y: y, rotation: rotation, zIn: zIn, status: false};
          this.leaves.push(leaf);
        }
      }
    }
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
    $(".details-box").css({ top: window.innerHeight });

    $('#tree-icon').on('click', function(event) {
        // Prevent default anchor click behavior
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({ scrollTop: 0 }, 900);
        window.location.hash = hash;
      });

    $('#transaction-icon').on('click', function(event) {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({ scrollTop: $(document).height()}, 1000);
      window.location.hash = hash;
    });


    $('.scroll').on('click', function(event) {

      event.preventDefault();

      // Store hash
      var hash = this.hash;

      $('html, body').animate({
         scrollTop: $(hash).offset().top
      }, 900, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;

       });
    });

    // on first login, want to display a short tutorial
    $(function(){
        console.log($(".dialogue"));
        $(".dialogue").typed({
          strings: ["Please don't keep spending this way. I'm worried for the tree!"],
          showCursor: false,
          typeSpeed: 30
        });
    });
  }
}
