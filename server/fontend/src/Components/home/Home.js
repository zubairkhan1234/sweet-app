import {LoginSignup} from '../routes/AppRouting'
import CardPost  from '../card/CardPost'



function Home() {

    return (
        <>
            <LoginSignup />
            <h1>This is Home page</h1>
            <CardPost />


        </>
    )

}

export default Home;