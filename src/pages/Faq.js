import React from 'react';
import '../assets/styles/faq.scss';
import MediaGroup from '../components/FaqGroups/MediaGroup';
import { FaqGroup } from '../components/FaqGroups/FaqGroup';
import { faqArray } from '../components/FaqArrays/FaqArray';
import { mediaArray } from '../components/FaqArrays/MediaArray';

const Faq = () => {

  return (
    <div className='page-container'>
      <section className='section-top-page'>
        <main className='section-main'>
          <MediaGroup type='main' content={mediaArray[0].content[0]} />
        </main>
        <aside className='section-side'>
          <MediaGroup type='aside' content={mediaArray[1].content[0]} />
          <MediaGroup type='aside' content={mediaArray[1].content[1]} />
        </aside>
      </section>
      <section className='section-bottom-page'>
        <div className='section-bottom'>
          <div className='faq-list'>
            {faqArray.map((faq, index) => (
              <FaqGroup key={index} question={faq.question} answer={faq.answer} subItems={faq.subItems} itemIndex={index} spanItem={index === 1 || index === 4 ? 2 : 1}/>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Faq;