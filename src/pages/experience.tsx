import * as React from "react"
import Page from "../components/Page";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import Job from "../components/Job";

const ExpPage = () => {
    return (
        <Layout>
            <Sidebar/>
            <Page headerText='EXPERIENCE'>
                <article className="flex flex-col">
                    <header className="mx-auto text-3xl">Senior Software Engineer</header>
                    <section className="my-5">
                        Professional, dedicated, friendly senior full-stack engineer leading remote-first projects with a focus on security. Helped start-up clients raise capital, win an Emmy, and scale.
                        <section className="mt-3 whitespace-pre">
                            JavaScript (<i>Expert</i>), <wbr/>Node (<i>Expert</i>), <wbr/>Python (<i>Competent</i>)
                        </section>
                    </section>
                    <Job company="CLEVERTECH" startDateTime="2015-07" endDateTime="2020-12" >
                        <li>Created Enterprise Web Applications in Full-Stack JavaScript</li>
                        <li>Trained teams of senior engineers</li>
                        <li>Managed client directly, setting scope and expectations</li>
                        <li>Lead on greenfield project: raised capital, $750k MRR</li>
                        <li>Architected solution awarded Engineering Emmy</li>
                    </Job>
                    <Job company="FUZZ PRODUCTIONS" startDateTime="2013-09" endDateTime="2015-06" >
                        <li>Built REST APIs in various MVC Frameworks and technologies</li>
                        <li>Automated testing, including mocks, in JS and PHP</li>
                        <li>Audited security with Burpsuite, SQLMap, Nmap, etc.</li>
                    </Job>
                    <Job company="KATHODE RAY MEDIA" startDateTime="2012-05" endDateTime="2013-08" >
                        <li>Projects included Joomla, Code Igniter, WordPress, ASP</li>
                        <li>Converted PSDs to HTML in addition to backend development</li>
                    </Job>
                </article>
            </Page>
        </Layout>
    )
}

export default ExpPage
