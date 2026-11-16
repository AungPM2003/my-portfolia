
import { CATERGORIES_QUERY_RESULT } from '@/sanity.types'
import CatergoryBtn from '@/app/_components/GeneralComponents/CatergoryBtn';

type Props = {
  catergories: CATERGORIES_QUERY_RESULT
}
export default function ArticleCatergory({ catergories }: Props) {

  return (
    <div className=" flex flex-wrap gap-2 rounded-md ">
      {catergories.map((catergory) => (
        <CatergoryBtn key={catergory._id} title={catergory.title} articleCount={catergory.articleCount} />
      ))}
    </div>
  )
}
