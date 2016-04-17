  function setState(state,newState){
    return Object.assign({},state,newState)
  }

  function castVote(state,flag){
    var namMember = state.namMember
    var lstMember = state.lstMember
    var parent = state.parent
    var equal = state.equal
    var rec = state.rec
    var cmp1 = state.cmp1
    var cmp2 = state.cmp2
    var head1 = state.head1
    var head2 = state.head2
    var nrec = state.nrec
    var numQuestion = state.numQuestion
    var totalSize = state.totalSize
    var finishSize = state.finishSize
    var finishFlag = state.finishFlag
    var percentComplete = state.percentComplete
    var left = state.left
    var right = state.right

    var leftImage, rightImage
    var i;
  	var str;

  	//recに保存
  	if (flag<0) {
  		rec[nrec] = lstMember[cmp1][head1];
  		head1++;
  		nrec++;
  		finishSize++;
  		while (equal[rec[nrec-1]]!=-1) {
  			rec[nrec] = lstMember[cmp1][head1];
  			head1++;
  			nrec++;
  			finishSize++;
  		}
  	}
  	else if (flag>0) {
  		rec[nrec] = lstMember[cmp2][head2];
  		head2++;
  		nrec++;
  		finishSize++;
  		while (equal[rec[nrec-1]]!=-1) {
  			rec[nrec] = lstMember[cmp2][head2];
  			head2++;
  			nrec++;
  			finishSize++;
  		}
  	}
  	else {
  		rec[nrec] = lstMember[cmp1][head1];
  		head1++;
  		nrec++;
  		finishSize++;
  		while (equal[rec[nrec-1]]!=-1) {
  			rec[nrec] = lstMember[cmp1][head1];
  			head1++;
  			nrec++;
  			finishSize++;
  		}
  		equal[rec[nrec-1]] = lstMember[cmp2][head2];
  		rec[nrec] = lstMember[cmp2][head2];
  		head2++;
  		nrec++;
  		finishSize++;
  		while (equal[rec[nrec-1]]!=-1) {
  			rec[nrec] = lstMember[cmp2][head2];
  			head2++;
  			nrec++;
  			finishSize++;
  		}
  	}

  	//片方のリストを走査し終えた後の処理
  	if (head1<lstMember[cmp1].length && head2==lstMember[cmp2].length) {
  		//リストcmp2が走査済 - リストcmp1の残りをコピー
  		while (head1<lstMember[cmp1].length){
  			rec[nrec] = lstMember[cmp1][head1];
  			head1++;
  			nrec++;
  			finishSize++;
  		}
  	}
  	else if (head1==lstMember[cmp1].length && head2<lstMember[cmp2].length) {
  		//リストcmp1が走査済 - リストcmp2の残りをコピー
  		while (head2<lstMember[cmp2].length){
  			rec[nrec] = lstMember[cmp2][head2];
  			head2++;
  			nrec++;
  			finishSize++;
  		}
  	}

  	//両方のリストの最後に到達した場合は
  	//親リストを更新する
  	if (head1==lstMember[cmp1].length && head2==lstMember[cmp2].length) {
  		for (i=0; i<lstMember[cmp1].length+lstMember[cmp2].length; i++) {
  			lstMember[parent[cmp1]][i] = rec[i];
  		}
  		lstMember.pop();
  		lstMember.pop();
  		cmp1 = cmp1-2;
  		cmp2 = cmp2-2;
  		head1 = 0;
  		head2 = 0;

  		//新しい比較を行う前にrecを初期化
  		if (head1==0 && head2==0) {
  			for (i=0; i<namMember.length; i++) {
  				rec[i] = 0;
  			}
  			nrec = 0;
  		}
  	}

  	if (cmp1<0) {
      percentComplete = Math.floor(finishSize*100/totalSize)
  		finishFlag = true
  	}
  	else {
      left = toNameFace(state,lstMember[cmp1][head1])
      right = toNameFace(state,lstMember[cmp2][head2])
      leftImage = toImageFace(state,lstMember[cmp1][head1])
      rightImage = toImageFace(state,lstMember[cmp2][head2])
      percentComplete  = Math.floor(finishSize*100/totalSize)
      numQuestion++;
  	}

  return  Object.assign({},state,{
    lstMember : lstMember,
    equal : equal,
    rec : rec,
    cmp1 : cmp1,
    cmp2 : cmp2,
    head1 : head1,
    head2 : head2,
    nrec : nrec,
    numQuestion : numQuestion,
    finishSize : finishSize,
    finishFlag : finishFlag,
    percentComplete : percentComplete,
    left : left,
    right : right,
    leftImage: leftImage,
    rightImage : rightImage
    })
  }

  function toNameFace(state,n){
    const namMember = state.namMember
  	const str = namMember[n];
  	return str;
  }

  function toImageFace(state,n){
    const imgMember = state.imgMember
  	var str = imgMember[n];
  	return str;
  }

  export default function(state={}, action){
    switch(action.type){
      case 'SET_STATE' :
      return setState(state,action.state)
      case 'VOTE' :
      return castVote(state,action.value)
    }
  }
