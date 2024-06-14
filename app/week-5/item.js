

export default function Item({itemObj}){
    let {name,quantity,category} = itemObj;
    
    return(
        <div className="m-6 p-2 bg-sky-200 w-1/4">
            <h3 className="text-xl font-bold">{name}</h3>
            <p>Buy {quantity} in {category}</p>
        </div>
    )
}