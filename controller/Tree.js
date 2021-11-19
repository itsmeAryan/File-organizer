// yaha hum file package require kir rhe hai 
const fs=require('fs');
// yaha hum path package reqire kr rhe hai ye help krega path ko find krne mai
const path=require("path");
function TRee(dir){
    const check=dir===undefined;
    if(check){
       process.cwd();
       const indent=" "
    
       stamp(process.cwd(),indent)
    
       return;
    }else{
        const check=fs.existsSync(dir);
      if(check){
          const indent=" "
        stamp(dir,indent)
    
      }
    }
    }
    
    function stamp(dir,indent){
    
    const isfile=fs.lstatSync(dir).isFile()
    if(isfile){
        let filename=path.basename(dir);
        console.log(indent+"|------"+ filename);
    }else{
    let dirName=path.basename(dir);
    console.log(indent+"|------"+ dirName);
    const readChilds=fs.readdirSync(dir);
    for(let i=0;i<readChilds.length;i++){
        let lovechild=path.join(dir,readChilds[i]);
        stamp(lovechild,indent+"\t")
    }
    
    }
    
        
    }
    module.exports=TRee;