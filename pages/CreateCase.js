export const Locators  = {
    createCaseBtn :  'data-test-id=CreateRoom_NewButton',
    ispNoField : 'data-test-id=CreateRoom_inspectionNumber'

}






export const createCaseBtn = (page) => {
    return page.locator()
}

export const ISPnoField = (page) => {
    return page.locator('data-test-id=CreateRoom_inspectionNumber')
}

export const PhoneNoField = (page) => {
    return page.locator('data-test-id=CreateRoom_phoneNo')
}

export const FirstNameField = (page) => {
    return page.locator('data-test-id=CreateRoom_firstName')
}

export const LastNameField = (page) => {
    return page.locator('data-test-id=CreateRoom_LastName')
}

export const saveAndSendBtn = (page) => {
    return page.locator('data-test-id=CreateRoom_SubmitButton')
}

export const closeBtn = (page) => {
    return page.locator('data-test-id=CreateRoom_CloseButton')
}

export const inputCaseInfomation = async (page, ISPno, phoneNo, firstName, lastName) => {
    await page.locator(Locators.createCaseBtn).click()

    const createCaseBtn = createCaseBtn(page)
    const ISPnoBtn = ISPnoBtn(page)
    const PhoneNoField = PhoneNoField(page)
    const FirstNameField = FirstNameField(page)
    const LastNameField = LastNameField(page)
    const saveAndSendBtn = saveAndSendBtn(page)
    const closeBtn = closeBtn(page)

    await createCaseBtn.click();
    await ISPnoBtn.fill(ISPno);
    await PhoneNoField.fill(phoneNo);
    await  LastNameField.
    




}