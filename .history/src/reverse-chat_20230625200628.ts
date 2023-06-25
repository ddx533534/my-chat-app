// import dotenv from 'dotenv-safe'
import { oraPromise } from 'ora'

import { ChatGPTUnofficialProxyAPI } from 'chatgpt'

var OPENAI_ACCESS_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJkZHgxMDI0ODg1NzEzQDE2My5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZX0sImh0dHBzOi8vYXBpLm9wZW5haS5jb20vYXV0aCI6eyJ1c2VyX2lkIjoidXNlci1COVFHemNaTVNsRnU2SEcxWXUxZndwOXoifSwiaXNzIjoiaHR0cHM6Ly9hdXRoMC5vcGVuYWkuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTE1NTIzNjc5Njg1MTU4ODY5MTQ2IiwiYXVkIjpbImh0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEiLCJodHRwczovL29wZW5haS5vcGVuYWkuYXV0aDBhcHAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY4NjgxMjE5MywiZXhwIjoxNjg4MDIxNzkzLCJhenAiOiJUZEpJY2JlMTZXb1RIdE45NW55eXdoNUU0eU9vNkl0RyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgbW9kZWwucmVhZCBtb2RlbC5yZXF1ZXN0IG9yZ2FuaXphdGlvbi5yZWFkIG9yZ2FuaXphdGlvbi53cml0ZSJ9.AGp9kgSrAcihe4wa-ibK316XraiRvOHxjLPVuR6_YRqWZMtb6sdQfAVDtMPNPuF4EWTeHgxwffOJ5EIi5GVFF6AAuFqZfj2po1y0mc1WLfLJwvkDJqCcpJxx2KM3qxQyO4kCYxIRCu_guOiAMrU1RO5NSfg1H_WvwFEKKZ7j96Zn4lEzSyKuerdkqHND9OR_cS1RQaj9eT69cgfjU6CqIoCkJaqkR0NvOtG-6HHBYc5nY5LKkGjqVbMPKsUbPVxr5hyTY35CN306X5U161rwfwSSOOPRgOc8bAGlZBVmuthXDqESC3A0ajGOPMSPTQULe8FKRwKOCpyo6DEAjq2Lbg";
// dotenv.config()

/**
 * Demo for testing conversation support using a reverse proxy which provides
 * access to the unofficial ChatGPT API.
 *
 */
async function chat(msg) {
    // WARNING: this method will expose your access token to a third-party. Please be
    // aware of the risks before using this method.
    const api = new ChatGPTUnofficialProxyAPI({
        // optionally override the default reverse proxy URL (or use one of your own...)
        // apiReverseProxyUrl: 'https://chat.duti.tech/api/conversation',
        // apiReverseProxyUrl: 'https://gpt.pawan.krd/backend-api/conversation',
        // https://bypass.churchless.tech/api/conversation
        apiReverseProxyUrl: "https://ai.fakeopen.com/api/conversation	",

        accessToken: OPENAI_ACCESS_TOKEN,
        debug: false
    })

    const prompt = '介绍下快速排序算法'

    let res = await oraPromise(api.sendMessage(prompt), {
        text: prompt
    })

    console.log('\n' + res.text + '\n')
}

