import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import Blog from './Blog'

test('renders content', () => {
    const blag = {
        title: 'testititteli'
    }

    render(<Blog blog={blag} />)

    const element = screen.getByText('testititteli')
    expect(element).toBeDefined()

})

test('pressing show - url, likes user showed', async () => {
    //Tee testi, joka varmistaa että myös url, likejen määrä ja käyttäjä näytetään,
    //kun blogin kaikki tiedot näyttävää nappia on painettu.
    const blag = {
        title: 'testititteli',
        url: 'testiurli.com',
        likes: 1,
        author: 'jaska',
        user: {
            id: 'aaaaaaaaa333333333'
        }
    }
    render(<Blog blog={blag} />)
    const user = userEvent.setup()
    const button = screen.getByText('show')
    await user.click(button)
    const element = screen.getByText('testititteli')
    const el1 = screen.getByText('testiurli.com')
    expect(element).toBeDefined()
    expect(el1).toBeDefined()
})

test('pressing button does things as many times as it is supposed to do', async () => {
    //Tee testi, joka varmistaa, että jos komponentin like-nappia painetaan kahdesti,
    // komponentin propsina saamaa tapahtumankäsittelijäfunktiota kutsutaan kaksi kertaa.
    const blag = {
        title: 'testititteli',
        url: 'testiurli.com',
        likes: 1,
        author: 'jaska',
        user: {
            id: 'aaaaaaaaa333333333'
        }
    }
    window.localStorage.setItem('loggedUserId', JSON.stringify("aaaaaaaaa333333333"))
    const mockHandler = jest.fn()
    render(<Blog blog={blag} updateFunc={mockHandler} />)
    const user = userEvent.setup()
    const button = screen.getByText('show')
    await user.click(button)
    const likebutton = screen.getByText('like')
    await user.click(likebutton)
    await user.click(likebutton)
    expect(mockHandler.mock.calls).toHaveLength(2)

})