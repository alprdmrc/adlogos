import * as React from "react"
import {useState} from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Form = () => {
    const [name,setName] = useState(0)

    return (
        <Layout pageTitle="Form">
            {/* <form>
                <label>
                    Name
                    <input type="text" name="name"/>
                </label>
                <button type="submit" onClick={(e)=>{e.preventDefault();console.log(e)}}>Submit</button>
            </form> */}
            <iframe src="https://airtable.com/embed/shrOyOVVbROH2PtQy?backgroundColor=blue" width="500" height="1555"></iframe>
        </Layout>
    )
}

export const Head = () => <Seo title="Form" />

export default Form