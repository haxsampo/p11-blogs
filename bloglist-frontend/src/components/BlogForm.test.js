import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BlogForm from './BlogForm'
import userEvent from '@testing-library/user-event'

test('lomaketesti blog creation', async () => {
    //Tee uuden blogin luomisesta huolehtivalle lomakkelle testi, joka varmistaa, että lomake kutsuu
    // propsina saamaansa takaisinkutsufunktiota oikeilla tiedoilla siinä vaiheessa kun blogi luodaan.
    const user = userEvent.setup()
    const createBlogMock = jest.fn()
    render(<BlogForm createBlog={createBlogMock} />)

    //const show_button = screen.getByText('new blog')
    //await user.click(show_button)
    const titleinp = screen.getByPlaceholderText('enter blog title here')
    const authorinp = screen.getByPlaceholderText('author here')
    const urlinp = screen.getByPlaceholderText('and url here')
    const createButt = screen.getByText('Create')

    await userEvent.type(titleinp, "testi_titteli")
    await userEvent.type(authorinp, "testi_kirjoittaja")
    await userEvent.type(urlinp, "testi_urli")
    //const inputs = screen.getAllByRole('textbox')


    await user.click(createButt)
    //console.log("CREATEBLOGMOCK", createBlogMock.mock.calls[0][0].title)
    expect(createBlogMock.mock.calls).toHaveLength(1)
    expect(createBlogMock.mock.calls[0][0].title).toBe('testi_titteli')
    expect(createBlogMock.mock.calls[0][0].author).toBe('testi_kirjoittaja')
    expect(createBlogMock.mock.calls[0][0].url).toBe('testi_urli')
})