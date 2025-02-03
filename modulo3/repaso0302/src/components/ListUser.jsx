import User from "./User"

function ListUser({ data }) {
    //se puede poner props y luego const {data} = props;
    
    const html = data.map(user => <User key={user.id} info={user}/>)

    return (
    <div>
        {html}
    </div>
  )
}

export default ListUser