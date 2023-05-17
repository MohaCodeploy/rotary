import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import clsx from 'clsx';

const emptyIcons=['Basilico','Carota','Formaggio','Gnocchi','Mozzarella','Pomodoro','Uova','Zucchina']
const images=['Basilico','Carota','Formaggio','Gnocchi','Mozzarella','Pomodoro','Uova','Zucchina']

export const Cart:React.FC=()=>{


const [positions, setPositions] = useState<Array<{x:number, y:number}>>([]);
const [randomImageIndex, setRandomImageIndex] = useState<number>(0);


useEffect(() => {
  setRandomImageIndex(getRandomImageIndex()); 
  setPositions(emptyIcons.map(() => ({ x: 0, y: 0 })));
}, []);


const updatePosition = (index:number, x:number, y:number) => {
  setPositions((prevPositions) => {
    console.log(positions)
    const newPositions = [...prevPositions];
    newPositions[index] = { x, y };
    return newPositions;
  });
};

const initialPosition=(index:number)=>{if(index===0||index===4) {return {x:-1000}}
                                if(index===1||index===2) {return {y:-1000}}
                                if(index===3||index===7) {return {x:1000}}
                                if(index===5||index===6) {return {y:1000}}
                                }


const getRandomImageIndex = () => {
        return Math.floor(Math.random() * images.length);
        };

        const animationVariants = {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
        };
      
        const animationProps = {
          initial: "initial",
          animate: "animate",
        };
      
        const handleClick = () => {
          // Riparti l'animazione settando lo stato iniziale
          // Puoi aggiungere altre proprietà animate se necessario
          animationProps.initial = "initial";
        };

        
  return (
    <div className="h-screen w-screen">
        <div className="h-full w-full flex items-center justify-center relative">
            <div className="bg-red-400 grid grid-cols-4 items-center justify-items-center">
                    {emptyIcons.map((item,index)=>(
                        <motion.div key={index} 
                                    style={{backgroundImage:  `url(${process.env.PUBLIC_URL + `/empty-icons/${item}.png`})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'contain'}} 
                                    className="h-full w-full flex items-center justify-center">  
                                            <motion.div 
                                            className={clsx("h-full w-full bg-blue-400" )}
                                            initial={initialPosition(index)}
                                            animate={{ x: 0, y:0 }}
                                            onTap={(event, { point }) => {
                                              updatePosition(index, point.x, point.y);
                                            }}
                                            drag={true}
                                            transition={{ duration: 8}}
                                           >  

                                           <motion.img   src={process.env.PUBLIC_URL + `/icons/${images[randomImageIndex]}.png`}
                                            alt={emptyIcons[index]}/>

                                            </motion.div>
                        </motion.div>
                    ))}
                <div>
            </div>
          </div>
        </div>
    </div>
  );
}
