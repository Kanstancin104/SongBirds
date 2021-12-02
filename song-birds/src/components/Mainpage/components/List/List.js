import { useSelector, useDispatch } from "react-redux"
import birdsData from "../../../../data/birds"

function List({
    birdNumber

}) {
    const level = useSelector(state => state.app.level)
    const checkBird = (index) => {
       if(birdNumber===index){
           console.log("found")
       }
     }
    

    return (
        <div className="list">
            {birdsData[level].map((item, index) => {
                return <div onClick={()=>checkBird(index)} className="birdlist">{item.name}</div>
            })}
        </div>
    );

}
export default List;