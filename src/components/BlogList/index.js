// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul>
      {blogsList.map(n => (
        <BlogItem key={n.id} data={n} />
      ))}
    </ul>
  )
}

export default BlogList
