import { useState , useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App()
{
const [password, setpassword] = useState("Password Genarator")
const [num, setnum] = useState(false)
const [char, setchar] = useState(false)
const [range, setrange] = useState(8)

function passGenerate()
{
let pass="";
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

if(num)
{
  str = str + "0123456789";
}

if(char)
{
  str = str + "!@#$%^&*()_+-={}[]|:;'<>,.?/~`;"
}



for(let i=0;i<range;i++)
{

   let textIndex =   Math.floor(Math.random() * str.length );
pass = pass   +  str.charAt(textIndex);
setpassword(pass);


}





}

useEffect(() => {
  passGenerate()
}, [setpassword,range, num , char ])

let passRef = useRef(null)




  return (
    <>

    <div className="min-h-screen bg-gray-900 flex items-center justify-center">

      <div className="bg-gray-800 p-6 rounded-xl w-[420px] shadow-lg">

        <h1 className="text-white text-xl font-semibold mb-4">
          Password Generator
        </h1>

        {/* Password Input */}
        <div className="flex mb-4">
          <input
          value={password}
          ref={passRef}
          onChange={(ev)=>{
            setpassword(ev.target.value)
          }}
 
            type="text"
            placeholder="Generated Password"
            className="flex-1 px-4 py-2 rounded-l-md bg-gray-700 text-white outline-none"
          />

          <button  
          onClick={()=>
          {
            passRef.current?.select();
            window.navigator.clipboard.writeText(password)
            
          }
          }
          className="bg-blue-500 px-4 py-2 rounded-r-md text-white hover:bg-blue-600">
            Copy
          </button>
        </div>

        {/* Range Slider */}
        <div className="mb-4">
          <input
            type="range"
            onChange={(ev)=>{
              setrange(ev.target.value)
            }}
            defaultValue={range}
            min="8"
            max="50"
            className="w-full"
          />
          <p className="text-gray-300 text-sm mt-1">
            Length: {range}
          </p>
        </div>

        {/* Options */}
        <div className="flex items-center gap-6 text-gray-300">

          <label className="flex items-center gap-2">
            <input onClick={()=>{
              setnum((prev) => !prev)
            }} type="checkbox" />
            Numbers
          </label>

          <label className="flex items-center gap-2">
            <input 
            onClick={()=>
            {
               setchar((prev) => !prev)
            }
            }
            
            type="checkbox" />
            Characters
          </label>

        </div>

      </div>

    </div>
  




    </>
  )
}

export default App
