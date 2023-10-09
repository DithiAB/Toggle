import {useEffect} from 'react'

const Title = () => {

    useEffect(()=>{
        let interval= setInterval(()=>{
            console.log("Mounting.....")
        },2000)

        return()=>{
            console.log("unmounting....")
            clearInterval(interval)
        }
    },[])
  return (
    <div>
        <h2>Cleanup Function</h2>
    </div>
  )
}

export default Title;