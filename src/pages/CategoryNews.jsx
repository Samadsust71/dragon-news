import { useLoaderData } from "react-router-dom"
import NewsCard from "../components/NewsCard"


const CategoryNews = () => {
  const {data}=useLoaderData()
  
  return (
    <div>
      <h2 className="font-semibold">Dragon News Home</h2>
      <div className="space-y-3 mt-6">
      {
        data.map(news=><NewsCard key={news._id} news={news}></NewsCard>)
      }
    </div>
    </div>
  )
}

export default CategoryNews
