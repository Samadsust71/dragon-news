import { AiFillStar, AiOutlineEye, AiOutlineStar, AiTwotoneStar } from "react-icons/ai";

import { Link } from "react-router-dom";

const NewsCard = ({news}) => {

    const renderStars = (rating) => {

        const fullStars = Math.floor(rating); // Number of full stars
        const halfStar = rating % 1 !== 0; // Determine if there's a half star
        const stars = [];
    
        // Push full stars
        for (let i = 0; i < fullStars; i++) {
          stars.push(<AiFillStar key={`full-${i}`} className="text-[#FF8C47]" />);
        }
    
        // Push half star if necessary
        if (halfStar) {
          stars.push(<AiTwotoneStar key="half" className="text-[#FF8C47]" />);
        }
    
        // Add remaining empty stars to make a total of 5
        for (let i = stars.length; i < 5; i++) {
          stars.push(<AiOutlineStar key={`empty-${i}`} className="text-gray-300" />);
        }
    
        return stars;
      };
    
  return (
    <div>
      <div className="card bg-base-100 shadow-md p-4 rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="h-10 w-10 rounded-full object-cover mr-2"
          />
          <div>
            <h2 className="font-semibold">{news.author.name}</h2>
            <p className="text-sm text-gray-500">{new Date(news.author.published_date).toLocaleDateString()}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
        {news.others_info.is_todays_pick && (
          <span className="text-xs badge badge-primary">Top picks</span>
        )}
        {news.others_info.is_trending && (
          <span className="badge badge-primary text-xs">Trending</span>
        )}
        </div>
      </div>
      <Link to={`/news/${news._id}`} className="hover:underline">
        <h3 className="text-lg font-semibold mb-2">
          {news.title}
        </h3>
      </Link>
      <img src={news.thumbnail_url} alt="Thumbnail" className="w-full h-[500px] object-cover rounded-lg mb-2" />
      <div>
      <p className="text-gray-600 text-sm mb-2 line-clamp-3">{news.details}</p>
      <Link to={`/news/${news._id}`} className="text-[#FF8C47] text-sm font-semibold">Read More</Link>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {renderStars(news.rating.number)}
            <span className="ml-1">{news.rating.number}</span>
          </div>
          <p className="text-xs badge badge-primary">{news.rating.badge}</p>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <AiOutlineEye className="h-5 w-5 mr-1" />
          <span>{news.total_view} views</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default NewsCard;
