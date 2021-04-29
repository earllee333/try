import styles from '../styles/Guides.module.css'
import {useContext, useEffect,useState} from 'react'
import AuthContext from '../stores/authContext'
export default function Guides() {
  const{user,authReady} = useContext(AuthContext)
  const[error,setError]=useState(null)
  const[guides,setGuides]=useState(null)
  useEffect(() => {
    if(authReady){
      fetch('/.netlify/functions/guides', user &&{
        headers: {
          Authorization:'Bearer '+ user.token.access_token
        }//Do rember plus space ' space ' after Bearer
      })
      //.then(res=>res.json())
      .then(res=>{
        //console.log(res)
        if(!res.ok){
          throw Error('You must be logged')
        }
        return res.json()
      })
      .then((data)=>{
        setGuides(data)
        setError(null)
      })
      .catch((err) => {
        setError(err.message)
        setGuides(null)
      })
    }
    },[user,authReady])
  return (
    <div className={styles.guides}>
      {!authReady && <div>Loading</div>}

      {error && <div className={styles.error}>
        <p>{error}</p>
        </div>}
      
      {guides && guides.map(guide=>(
        <div key ={guide.title} className={styles.guides}>
          <h3>{guide.title}</h3>
          <h4>Written by {guide.author}</h4>

        </div>
      ))}
    </div> 
  )
}