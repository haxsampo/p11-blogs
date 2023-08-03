import { useState } from 'react'
import PropTypes from 'prop-types'

const BlogForm = ({ createBlog }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    const addBlog = (event) => {
        event.preventDefault()
        const blogObj = {
            title: title,
            author: author,
            url: url
        }

        createBlog(blogObj)
        setTitle('')
        setAuthor('')
        setUrl('')
    }

    return (
        <form onSubmit={addBlog}>
            <div>
                Title
                <input
                    id="newblog_title"
                    type="text"
                    value={title}
                    name="Title"
                    onChange={({ target }) => setTitle(target.value)}
                    placeholder="enter blog title here"
                />
            </div>
            <div>
                Author
                <input
                    id="newblog_author"
                    type="text"
                    value={author}
                    name="Author"
                    onChange={({ target }) => setAuthor(target.value)}
                    placeholder="author here"
                />
            </div>
            <div>
                Url
                <input
                    id="newblog_url"
                    type="text"
                    value={url}
                    name="Url"
                    onChange={({ target }) => setUrl(target.value)}
                    placeholder="and url here"
                />
            </div>
            <button id="newblog_submit" type="submit">Create</button>
        </form>
    )
}

BlogForm.propTypes = {
    createBlog: PropTypes.func.isRequired
}

export default BlogForm