//React Helper
/**
 */
async function register(cred){
    try {
        let url = `{{ADD_URL_HERE}}`
        let res = await axios.post(url)
        //stores apiKey in LocalStorage
        localStorage("apiKey", res.user.apiKey)
    }catch (e) {
    }
}
async function login(cred){
    try {
        let url = `{{ADD_URL_HERE}}`
        let res = await axios.post(url)
        localStorage("apiKey", res.user.apiKey)
    }catch (e) {
    }
}
//copy the following code to your app.js
function App () {
    const [isAuth, setAuth] = React.useState(false)
    const [user, setUser] = React.useState({})
    function logout(){
        //delete from localStorage
        localStorage.removeItem("apiKey")
        //reset state to default
        setAuth(false)
        setUser({})
    }
    async function loadUser() {
        try {
            let url = `{{ADD_URL_HERE}}?apiKey=${localStorage.apiKey}`
            let res = await axios.get(url)
            //set state
            setUser(res.data.user)
            setAuth(true)
        } catch (e) {
            logout()
        }
    }
    React.useEffect(() => {
        //on every reload try to fetch user
        //details so as to keep track
        // of user status
        loadUser()
    },[])
    return(
        <div></div>
    )
}