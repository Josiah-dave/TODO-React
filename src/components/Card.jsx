/* eslint-disable react/prop-types */



const Card = ({task}) => {
  return (
    <div className={"md:max-w-[30%]   p-5 max-h-[30vh] my-5 cursor-text bg-white opacity-60 rounded-2xl shadow-2xl  drop-shadow-2xl "}>


            <p> {task} </p>


        <div className="flex justify-end gap-3">
            <button className="focus:shadow-2xl md:text-2xl  hover:drop-shadow-2xl"> ✅</button>
            <button className="focus:shadow-2xl md:text-2xl  hover:drop-shadow-2xl"> ❌</button>  
        </div>

        <div>

    </div>

    </div>
  )
}

export default Card


