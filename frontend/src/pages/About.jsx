import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

export default function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus sint beatae voluptatum fugiat laboriosam eum cupiditate minus nisi ex facere, hic repellat alias nesciunt iste nobis corrupti corporis architecto quos.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, enim nihil rem nobis porro optio ad sequi id quam tenetur officia vitae, neque voluptatibus beatae exercitationem dolores quod, natus eius.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore blanditiis culpa corrupti? A minus dolores alias architecto magni fugiat perspiciatis facilis corporis sint officia? Repellat et natus quia repellendus quam.</p>
          </div>
      </div>
      <div className="text-xl py-4">
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-2- flex flex-col gap-5">
        <b>Quality Assurance:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus voluptas soluta facilis provident iste, sit dolorem .</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-2- flex flex-col gap-5">
        <b>Convenience:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus voluptas soluta facilis provident iste, sit dolorem .</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-2- flex flex-col gap-5">
        <b>Exceptional Customer Service:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus voluptas soluta facilis provident iste, sit dolorem .</p>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}
