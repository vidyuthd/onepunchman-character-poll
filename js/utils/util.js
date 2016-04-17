const imgMember = require('./entries.json').images
const namMember = require('./entries.json').chars
var lstMember = new Array();
var parent = new Array();
var equal = new Array();
var rec = new Array();
var cmp1,cmp2;
var head1,head2;
var nrec;

var numQuestion;
var totalSize;
var finishSize;
var finishFlag;
var left, right, leftImage, rightImage
var percentComplete = 0

export function makeStore(){

  initList()

  left = namMember[lstMember[cmp1][head1]]
  right = namMember[lstMember[cmp2][head2]]
  leftImage = imgMember[lstMember[cmp1][head1]]
  rightImage = imgMember[lstMember[cmp2][head2]]

  return {
    imgMember,
    namMember,
    lstMember,
    parent,
    equal,
    rec,
    cmp1,
    cmp2,
    head1,
    head2,
    nrec,
    numQuestion,
    totalSize,
    finishSize,
    finishFlag,
    percentComplete,
    left,
    right,
    leftImage,
    rightImage
  }
}

function initList(){
	var n = 0;
	var mid;
	var i;

	//ソートすべき配列
	lstMember[n] = new Array();
	for (i=0; i<namMember.length; i++) {
		lstMember[n][i] = i;
	}
	parent[n] = -1;
	totalSize = 0;
	n++;

	for (i=0; i<lstMember.length; i++) {
		//要素数が２以上なら２分割し、
		//分割された配列をlstMemberの最後に加える
		if(lstMember[i].length>=2) {
			mid = Math.ceil(lstMember[i].length/2);
			lstMember[n] = new Array();
			lstMember[n] = lstMember[i].slice(0,mid);
			totalSize += lstMember[n].length;
			parent[n] = i;
			n++;
			lstMember[n] = new Array();
			lstMember[n] = lstMember[i].slice(mid,lstMember[i].length);
			totalSize += lstMember[n].length;
			parent[n] = i;
			n++;
		}
	}

	//保存用配列
	for (i=0; i<namMember.length; i++) {
		rec[i] = 0;
	}
	nrec = 0;

	//引き分けの結果を保存するリスト
	//キー：リンク始点の値
	// 値 ：リンク終点の値
	for (i=0; i<=namMember.length; i++) {
		equal[i] = -1;
	}

	cmp1 = lstMember.length-2;
	cmp2 = lstMember.length-1;
	head1 = 0;
	head2 = 0;
	numQuestion = 1;
	finishSize = 0;
	finishFlag = 0;
}
