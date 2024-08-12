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
        <AccordionTrigger className="text-2xl text-left">Is it accessible hahahahahahahahahah?</AccordionTrigger>
        <AccordionContent className="text-xl text-left">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-2xl text-left">Is it styled?</AccordionTrigger>
        <AccordionContent className="text-xl text-left">
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-2xl text-left">Is it animated?</AccordionTrigger>
        <AccordionContent className="text-xl text-left">
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
  )
}

export default Faq