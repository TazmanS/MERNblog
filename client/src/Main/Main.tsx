import React from 'react'

import Section from './Section/Section'
import RnavBar from './RnavBar/RnavBar'

interface Main {}

const Main:React.FC<Main> = () => {
    return(
        <main className='row Content'>
            <section className="col-12 order-2 order-lg-1 col-lg-8 content">
                <Section />
            </section>
            <aside className="col-12 order-1 order-lg-2 col-lg-3 RnavBar">
                <RnavBar />
            </aside>
        </main>
    )
}

export default Main