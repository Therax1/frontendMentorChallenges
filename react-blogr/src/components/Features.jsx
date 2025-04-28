import React from 'react';

function Features() {
    return(
        <main className='mx-auto py-24 flex flex-col gap-8'>
            <h2 className='text-4xl text-center font-semibold'>Designed for the future</h2>
            <section className="text-bodycopy flex flex-col gap-16 pl-[15%]">
                <div className="flex gap-4 w-full relative">
                    <div className="w-[50%] flex flex-col gap-12">
                        <div className="flex flex-col gap-4">
                            <h3 className='text-2xl font-semibold'>Introducing an extensible editor</h3>
                            <p className='text-2xl'>Blogr features an exceedingly intuitive interface
                                which lets you focus on one thing: creating content.
                                The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown.
                                Extensibility with plugins and themes provides easy ways to add functionality and change the look and feel of a blog.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className='text-2xl font-semibold'>Robust content management</h3>
                            <p className='text-2xl'>Flexible content management enables users 
                                to easily move through posts. 
                                Increase the usability of your blog by adding customized categories, sections, format, or flow.
                                With this functionality, you're in full control.
                            </p>
                        </div>
                    </div>
                    
                    <div className="relative top-[-164px] -right-32">
                        <img 
                            src="/assets/illustration-editor-desktop.svg"  // Chemin depuis le dossier `public/`
                            alt="Description"
                            className="w-[930px]"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-darkgrayblue h-[22rem] rounded-tr-footer rounded-bl-footer text-white flex">
                <div className="relative h-full w-full z-[2]">
                    <img 
                        src="/assets/illustration-phones.svg"  // Chemin depuis le dossier `public/`
                        alt="phones"
                        className='relative -top-16 left-[15%]'
                    />  
                </div>
                
                <div className="w-[50%] self-center justify-start">
                    <h2 className=''>State of the Art Infrastructure</h2>
                    <p>With reliability and speed in mind, 
                        worldwide data centers provide the backbone for ultra-fast connectivity.
                        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                    </p>
                </div>
            </section>
        </main>
    );
}

export default Features;