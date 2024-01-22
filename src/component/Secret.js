import React,{useState} from 'react'

const Secret = () => {
    const [secret,setSecret] = useState("")
    const [checked,setChecked]=useState(false)
  return (
    <div>
        <label htmlFor='input'>Secret</label>
        <input type="text" id="input" value={secret} onChange={(e)=>setSecret(e.target.value)}/>
        <input type="checkbox" checked={checked} onChange={e=>setChecked(e.target.checked)}/>
    </div>
  )
}

export default Secret