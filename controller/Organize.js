// yaha hum file package require kir rhe hai 
const fs=require('fs');
// yaha hum path package reqire kr rhe hai ye help krega path ko find krne mai
const path=require("path");
function organize(directory){
    console.log("hello");
    //    dircetory khali toh nahi ye check karo pehle
    let Attchpath;
    const empty=directory===undefined;
    if(empty){
        Attchpath=process.cwd()
        return;
    }else{
        // ye directory location is correct or not;
        const valid=fs.existsSync(directory);
        if(!valid){
        console.log("please enter th e directory name");
    
        }else{
            const Folname="Organize_folder";
           Attchpath=path.join(directory,Folname);
            // check if folder exist there or not
            const exist=fs.existsSync(Attchpath);
            if(exist){
                // is function mai directory 
                // or foldername hai jo humne banaya hai
                GetDirchild(directory,Folname)
            }else{
                fs.mkdirSync(Attchpath);
                 // is function mai directory 
                // or foldername hai jo humne banaya hai
                GetDirchild(directory,Folname)
    
            }
        }
    }
    }
    
    function GetDirchild(dir,foldename){
        // yaha pr is directory ko dekha ja rha hai ki isme kya kya hai
    const dirChild=fs.readdirSync(dir);
    // humne iske andar ka data child mai save kr diya
    
    // ab loop lagate hai child pr
    for(let i=0;i<dirChild.length;i++){
        // lets check directory ke child mai folder or file kon hai
        const CompletePath=path.join(dir,dirChild[i])
        let Fil=fs.lstatSync(CompletePath).isFile();
         
        // agar file toh toh yaha dusra function call krwa denge hum
        if(Fil){
            let filesHere=dirChild[i];
            let extendion=path.extname(filesHere);
          const FileCat=  DataInstaller(extendion,dir,foldename);
          const compleFol=path.join(dir,foldename);
          SendFilles(CompletePath,compleFol,FileCat)
        }
        
    }
    }
    
    function  DataInstaller(extendion,dir,folder){
        const typeHolder={
            media:["mp4","mp3","mkv","omg3"],
            archieves:["zip","rar","7z","ol","olx"],
            doc:["doc","docx","xlxz","pdf","txt","json","js","css",'env'],
            app:["apk","amd","iso"]
        }
        // yaha humne extion ka 0 index wala part hata diya hai uski abhi jarurat nhi hai
        const FilterExtn=extendion.slice(1);
        // console.log(FilterExtn);
        // we are going to match type with extension so lets start the game
    for(let keys in typeHolder){
        // console.log(keys);=========>this are keys of type so lets put the for loop on this keys
        // to get the value of this keys
    
        const checking=typeHolder[keys];
        for(let i=0;i<checking.length;i++){
            if(FilterExtn==checking[i]){
                return keys
            }
        }
    
    }
    }
    function SendFilles(filesHere,compleFol,category){
    if(category!==undefined){
        const CatPath=path.join(compleFol,category);
       const exist=fs.existsSync(CatPath);
       if(!exist){
           fs.mkdirSync(CatPath)
       }
    
    
       const fileName=path.basename(filesHere);
       let dest=path.join(CatPath,fileName);
       console.log(dest);
       fs.copyFileSync(filesHere,dest)
       fs.unlinkSync(filesHere)
    
    }
    }
module.exports=organize;    