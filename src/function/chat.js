import { ChatGPTUnofficialProxyAPI } from 'chatgpt'

var OPENAI_ACCESS_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJkZHgxMDI0ODg1NzEzQDE2My5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZX0sImh0dHBzOi8vYXBpLm9wZW5haS5jb20vYXV0aCI6eyJ1c2VyX2lkIjoidXNlci1COVFHemNaTVNsRnU2SEcxWXUxZndwOXoifSwiaXNzIjoiaHR0cHM6Ly9hdXRoMC5vcGVuYWkuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTE1NTIzNjc5Njg1MTU4ODY5MTQ2IiwiYXVkIjpbImh0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEiLCJodHRwczovL29wZW5haS5vcGVuYWkuYXV0aDBhcHAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY4ODM4MzI3NCwiZXhwIjoxNjg5NTkyODc0LCJhenAiOiJUZEpJY2JlMTZXb1RIdE45NW55eXdoNUU0eU9vNkl0RyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgbW9kZWwucmVhZCBtb2RlbC5yZXF1ZXN0IG9yZ2FuaXphdGlvbi5yZWFkIG9yZ2FuaXphdGlvbi53cml0ZSJ9.zGzwVT8EHOKV1TUp24RtcK_YaKbOFR23xinoW9t-Cc7qsBWYUVsTxIWf2aufMeb_iPSgACwy4Lxwp8Hg1-CM5CmWaOrBR6Uvee2TuvnU2XweG6DfSdw0LLmQ4SdFoq3SjJQM6KCJDJ7xxKf8gx8GSTNgOvM1vTOR_MHpkkIX6etLxBiGdwW0f23uDiIlXa_bCzO4EpI0sl_ry2XN4qnsWgmXDSgS3-HFtArxU_Oy_k6ykcNL025wtw2ByaxfRWy17c28m1blpwUg5HCSNU_O1XnDLssPRItG4FOjpTNicOFGrvqbIydBcgmeb8lDE76lKuWctcGgODf9QAEBGqa3XQ";


async function Chat(msg) {
    const api = new ChatGPTUnofficialProxyAPI({
        // optionally override the default reverse proxy URL (or use one of your own...)
        // apiReverseProxyUrl: 'https://chat.duti.tech/api/conversation',
        //apiReverseProxyUrl: 'https://gpt.pawan.krd/backend-api/conversation',
        //apiReverseProxyUrl: 'https://bypass.churchless.tech/api/conversation',
        apiReverseProxyUrl: "https://ai.fakeopen.com/api/conversation",

        accessToken: OPENAI_ACCESS_TOKEN,
        debug: false
    })

    return await api.sendMessage(msg)
}
export default Chat; 