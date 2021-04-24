
import { useState, useEffect} from 'react';
 import {projectStorage,projectFirestore,timeStamp} from '../firebase/config';

//custom hook ,firebase storage hook returning url ,progress and error
 const useStorage = (file) => {

const [progress,setProgress]= useState(0);
const [error , setError] = useState(null);
const [url,setUrl] = useState(null);

  useEffect( () =>{
     
    //refrences
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');
     
    storageRef.put(file).on('state_changed',(snap)=>{
   
      let percentage =(snap.bytesTransferred / snap.totalBytes)*100;
      setProgress(percentage);

    },(err) =>{
        setError(err);
    }, async()=>{
        const url= await storageRef.getDownloadURL();
           const createdAt =timeStamp();
        await collectionRef.add({url,createdAt});
        setUrl(url);
    } );
 }, [file]);
     
  return {progress,url,error}

 }

 export default useStorage;
