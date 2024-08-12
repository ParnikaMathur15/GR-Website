import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
function Faq() {
  return (
    <div className='text-white text-2xl mx-7 sm:mx-44 mt-28 p-10 rounded-3xl sm:shadow-[0px_0px_100px_0px_#3182ce] shadow-[0px_0px_50px_0px_#3182ce]'>
        <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-2xl text-left">What is Geek Room?</AccordionTrigger>
        <AccordionContent className="text-xl text-left">
        Geek Room is a coding community of Delhi consisting of various colleges and people who have a passion to become the best coder in their field.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-2xl text-left">So, what is Geek Room IITM?</AccordionTrigger>
        <AccordionContent className="text-xl text-left">
          Each college associated with Geek Room is its chapter. Simply put, Geek Room IITM is a part of Geek Room which is represented by the IITM college.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-2xl text-left">Do you host any coding events, and are they open for everyone?</AccordionTrigger>
        <AccordionContent className="text-xl text-left">
          Yes, and yes! We hold lots of coding-related events, which are generally free to join!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
  )
}

export default Faq