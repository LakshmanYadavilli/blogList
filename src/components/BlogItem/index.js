// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {data} = props
  const {title, description, publishedDate} = data

  return (
    <li>
      <div className="date">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
    </li>
  )
}

export default BlogItem
