import React from 'react'
import {makeStyles} from '@material-ui/core'

const style = makeStyles({
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(180deg, rgba(66,66,66,1) 0%, rgba(94,94,94,1) 35%, rgba(229,229,229,1) 100%)',
    },
    loader: {
        position: 'absolute',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        background: 'linear-gradient(#14ffe9,#ffeb3b,#ff00e0)',
        animation: 'animate 0.5s linear infinite',
        "&::after" : {
            content: "''",
            position: 'absolute',
            top : '10px',
            left: '10px',
            right: '10px',
            bottom: '10px',
            background: "#f4f4f4",
            borderRadius: '50%'
        }   
    },
    span:{        
        position: 'absolute',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        background: 'linear-gradient(#14ffe9,#ffeb3b,#ff00e0)',
        animation: '$animate 0.5s linear infinite',      
        "&:nth-child(1)":{
            filter:'blur(5px)'
        },
        "&:nth-child(2)":{
            filter:'blur(10px)'
        },
        "&:nth-child(3)":{
            filter:'blur(17px)'
        },
        "&:nth-child(4)":{
            filter:'blur(27px)'
        },
    },
    "@keyframes animate":{
        "0%":{
            transform: 'rotate(0deg)'
        },
        "100%":{
            transform: 'rotate(360deg)'
        }
    }
})
const LoadPage = () =>{
    const styledLoad = style()
    return(
        <div className = {styledLoad.container}>
            <div className={styledLoad.loader}>
                <span className={styledLoad.span}></span>
                <span className={styledLoad.span}></span>
                <span className={styledLoad.span}></span>
                <span className={styledLoad.span}></span>
            </div>
        </div>
    )
}
export default LoadPage