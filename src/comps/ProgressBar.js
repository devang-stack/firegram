import React, { useEffect } from 'react';
 import useStorage from '../hooks/useStorage';
import {motion} from 'framer-motion';
 // creating component  progressBar
  
 const ProgressBar = ({file, setFile}) =>{
    // using the hook that we created to get the url ,error and progree
    const {url, progress}= useStorage(file);
    useEffect(() =>{
        if(url){
        setFile(null);

        }

    },[url,setFile])
    return (
             <motion.div className="progress-bar"
             initial={{ width :0}}
             animate={{width: progress + '%'}}
             
             
             ></motion.div>


    )


 }
  export default ProgressBar;