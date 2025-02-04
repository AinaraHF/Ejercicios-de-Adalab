import Shirt from "./Shirt"

function ShirtList({ info }) {

    const htmlList = info.map(shirt => <Shirt key={shirt.id} data={shirt}/>)
    
  return (
    <ul>
        {htmlList}
    </ul>
  )
}

export default ShirtList