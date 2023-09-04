import React from 'react';
import '../assets/styles/faq.scss';
import { faqArray, mediaArray, MediaGroup, FaqGroup } from '../components/Faqs';

const Faq = () => {

  return (
    <div className='page-container'>
    <section className='section-top-page'>
      <div className='faq-list'>
        {faqArray.map((faq, index) => (
          <FaqGroup key={index} question={faq.question} answer={faq.answer} subItems={faq.subItems}/>
        ))}
      </div>
      </section>
      <section className='section-bottom-page'>
        <main className='section-main'>
          <MediaGroup type='main' content={mediaArray[0].content[0]} />
        </main>
        <aside className='section-aside'>
          <MediaGroup type='aside' content={mediaArray[1].content[0]} index={0}/>
          <MediaGroup type='aside' content={mediaArray[1].content[1]} index={1}/>
        </aside>
      </section>
      
    </div>
  )
}

export default Faq;