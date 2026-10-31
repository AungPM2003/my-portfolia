
import { CATERGORIES_QUERY_RESULT } from '@/sanity.types'
import CatergoryBtn from '../../catergoryBtn'
type Props = {
  catergories:CATERGORIES_QUERY_RESULT
}
export default function index({catergories}:Props) {
  return (
    <div className="grow flex flex-wrap gap-2 rounded-md ">
          {catergories.map((catergory) =>(
            <CatergoryBtn key={catergory._id} title={catergory.title}/>
          ))}
    </div>
  )
}
