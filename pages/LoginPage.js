export const LoginPage = {
    fillUsername : (page,username) => {
        return page.getByLabel('Username or email').fill(username)
    },
    fillPassword : (page,password) => {
        return page.getByLabel('Password').fill(password);
    },
    clickLogin : (page) => {
       return  page.getByRole('button', { name: 'Log In' }).click()
    },
}

export const inputUserName = async (page, username, password) => {
    await LoginPage.fillUsername(page,username)
    await LoginPage.fillPassword(page,password)
    await LoginPage.clickLogin(page)
}