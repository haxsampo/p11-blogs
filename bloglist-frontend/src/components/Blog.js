import { useState } from 'react'

const Blog = ({ blog, updateFunc, delFunc }) => {
  const [showFull, setShowFull] = useState(false)


  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  const hideWhenVisible = { display: showFull ? 'none' : '' }
  const showWhenVisible = { display: showFull ? '' : 'none' }

  const fullBlog = (blog) => {
    const ifuser = window.localStorage.getItem('loggedUserId')
    let userid = ""
    if (ifuser) {
      userid = ifuser.toString().replaceAll('"', '')
    }
    //console.log('userid', userid, typeof (userid))
    //console.log('blog.user.id', blog.user.id, typeof (blog.user.id))
    const showdel = userid === blog.user.id ? true : false
    return (
      <div>
        <div>
          {blog.title}
        </div>
        <div>{blog.author}</div>
        <div>{blog.likes}</div>
        <div>{blog.url}</div>

        <button onClick={() => updateFunc(blog.id)}>like</button>
        {showdel &&
          <button onClick={() => delFunc(blog.id)}>delete</button>
        }
      </div>
    )

  }

  const miniBlog = (blog) => (
    <div>
      {blog.title}
    </div>
  )

  const toggleVisibility = () => {
    setShowFull(!showFull)
  }

  return (
    <div className="blog_class" style={blogStyle}>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>show</button>
      </div>
      <div style={showWhenVisible}>
        <button onClick={toggleVisibility}>hide</button>
      </div>
      {showFull && fullBlog(blog)}
      {!showFull && miniBlog(blog)}

    </div>
  )
}

export default Blog