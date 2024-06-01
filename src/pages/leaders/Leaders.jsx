import leader from "./Leader"
import { Link } from "react-router-dom"
const Leaders = () => {
    return(
        <react.Fragment>
            <Banner MainTittle='leader' description="our all time leader"/>


            <section className="leaders">
                <leader FullName="Alex Githinji" twitterUrl="alexgithiji.com"/>
            </section>
        </react.Fragment>
    )
}

export default Leaders