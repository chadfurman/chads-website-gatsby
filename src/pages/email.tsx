import * as React from "react"
import Page from "../components/Page";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";

const EmailPage = () => {
    return (
        <Layout>
            <Sidebar/>
            <Page headerText='EMAIL'>
                <section className="flex flex-col">
                    <form className="flex flex-col" name="blog-contact" data-netlify="true" data-netlify-honeypot="bot-field" method="post">
                        <input type="hidden" name="form-name" value="blog-contact" />
                        <fieldset className="flex flex-col sm:flex-row py-5 sm:py-10 border-b-2 border-pond-light md:shadow-neumorphic md:rounded-3xl md:px-5 md:border-b-0 md:mb-14">
                            <label className="w-24 mb-2" htmlFor="email">From:</label>
                            <input className="w-full md:w-96 mx-auto outline-pond-light rounded-lg shadow-inner text-pond-dark p-2 bg-gray-300 text-pond placeholder-pond-light" type="email" id="email" name="email" placeholder="you@email.com"/>
                        </fieldset>
                        <fieldset className="flex flex-col sm:flex-row py-5 sm:py-10 border-b-2 border-pond-light md:shadow-neumorphic md:rounded-3xl md:px-5 md:border-b-0 md:mb-14">
                            <label className="w-24 mb-2" htmlFor="topic">Topic:</label>
                            <select name="topic" id="topic" className="w-full md:w-96 mx-auto rounded-lg shadow-inner text-pond-dark p-2 bg-gray-300 text-pond">
                                <option value="none" selected>Select</option>
                                <optgroup label="Business">
                                    <option value="new-client">New Client</option>
                                    <option value="hire-recruiter">Hire / Recruiter</option>
                                    <option value="full-time">Full-time</option>
                                </optgroup>
                                <optgroup label="Other">
                                    <option value="question">Question</option>
                                    <option value="conversation">Conversation</option>
                                    <option value="third-choice">Third Choice</option>
                                </optgroup>
                            </select>
                        </fieldset>
                        <fieldset className="flex py-5 flex-col sm:flex-row sm:py-10 border-b-2 border-pond-light md:shadow-neumorphic md:rounded-3xl md:px-5 md:border-b-0 md:mb-5">
                            <label className="w-24 mb-2" htmlFor="message">Message:</label>
                            <textarea className="w-full md:w-96 outline-pond-light mx-auto rounded-lg shadow-inner text-pond-dark p-2 bg-gray-300 text-pond placeholder-pond-light" id="message" name="message" placeholder="Enter a message" rows={10} cols={80}/>
                        </fieldset>
                        <button type="submit" className="w-full hover:bg-pond-light focus:bg-pond-light sm:w-24 px-5 py-2 border-2 m-auto border-pond-light mt-5 mx-auto md:shadow-neumorphic md:rounded-3xl md:px-5 md:border-0 md:mb-5" id="submit-btn">
                            Submit
                        </button>
                    </form>
                </section>
            </Page>
        </Layout>
    )
}

export default EmailPage
