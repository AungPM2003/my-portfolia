
import CatergoryBtn from '../../catergoryBtn'

export default function index({catergories}) {
  return (
    <div className="flex flex-wrap gap-2 content-start justify-center p-2  border border-deep-3 rounded-md ">
          {catergories.map((catergory) =>(
            <CatergoryBtn key={catergory._id} catergory={catergory}/>
          ))}
    </div>
  )
}
