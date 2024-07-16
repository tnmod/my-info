import React from 'react';
import { AnimatedText } from './AnimatedText';
import { useViewport } from '@/hooks/useViewport';
import { ProjectView } from './ProjectView';


export const Project = () => {

  const { viewportWidth } = useViewport();



  return (
    <div className='p-6 md:p-12 lg:p-24 flex flex-col gap-8'>
      <AnimatedText
        once
        text="MY PROJECTS."
        delay={0.04}
        duration={0.6}
        containerDelay={0.1}
        variants="large"
        textColor="#cbd5e1"
      />
      <div className=''>
        <ProjectView />
      </div>
    </div>
  )
}
