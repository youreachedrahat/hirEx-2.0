function Custome_Match_Function(Para1, Para2){
    let counter=0;
    match=[]
    let splittedPara1=Para1.split(" ");
        let splittedPara2=Para2.split(" ");
    for (let i=0;i<splittedPara1.length; i++){
        for (let j=0;j<splittedPara2.length;j++){
            if(splittedPara1[i]===splittedPara2[j]){
                counter=counter+1;
                match.push(splittedPara2[j]);
                splittedPara2.splice(j, 1);
                console.log(typeof Para2);
            }
        }
    }
    return counter;
}

module.exports = {
    Custome_Match_Function,
  };
  