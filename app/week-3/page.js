import ItemList from "./item-list";


export default function Page(){
    return(
        <main className="f-screen bg-white">
            <h1 className="font-bold text-4xl">Shopping List</h1>
            <ItemList />
        </main>
    )
}