// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', ({ username, password }) => {
    cy.request('POST', 'http://localhost:3003/api/login', {
        username, password
    }).then(({ body }) => {
        localStorage.setItem('loggedBlogAppUser', JSON.stringify(body))
        cy.visit('http://localhost:3000')
    })
})

Cypress.Commands.add('post_blog', ({ title, author, url }) => {
    const token = JSON.parse(window.localStorage.getItem('loggedBlogAppUser'))
    const config = {
        headers: { Authorization: token }
    }
    const newB = {
        title: title,
        author: author,
        url: url
    }
    const ret = cy.request('POST', 'http://localhost:3003/api/blogs', newB, config)
    console.log(ret)
})

Cypress.Commands.add('setup_user', () => {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
        name: 'Latti Muukkainen',
        username: 'lmuukkai',
        password: 'salasana'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
})