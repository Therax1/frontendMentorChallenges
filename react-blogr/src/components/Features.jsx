import React from 'react';

function Features() {
    return(
        <main className='mx-auto py-24 flex flex-col gap-16'>
            <h2 className='text-3xl text-center font-semibold'>Designed for the future</h2>
            <section className="w-[70%] text-bodycopy flex flex-col gap-16">
                <div className="flex gap-4 w-full">
                    <div className="w-[50%] flex flex-col gap-12">
                        <div className="flex flex-col gap-4">
                            <h3 className='text-xl font-semibold'>Introducing an extensible editor</h3>
                            <p>Blogr features an exceedingly intuitive interface
                                which lets you focus on one thing: creating content.
                                The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown.
                                Extensibility with plugins and themes provides easy ways to add functionality and change the look and feel of a blog.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className='text-xl font-semibold'>Robust content management</h3>
                            <p>Flexible content management enables users 
                                to easily move through posts. 
                                Increase the usability of your blog by adding customized categories, sections, format, or flow.
                                With this functionality, you're in full control.
                            </p>
                        </div>
                    </div>
                    
                    <div className="">
                        <img 
                            src="/assets/illustration-editor-desktop.svg"  // Chemin depuis le dossier `public/`
                            alt="Description"
                            className="w-[1000px]"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-darkgrayblue h-[22rem] rounded-tr-footer rounded-bl-footer text-white">
                <div className="flex items-center h-full overflow-hidden">
                    <div className="w-[50%] relative">
                        <div className="overflow-hidden absolute w-full h-full z-[1]">
                            <img 
                                src="/assets/bg-pattern-circles.svg"  // Chemin depuis le dossier `public/`
                                alt="Description"
                                className="absolute top-[-3%] w-full" 
                            />
                        </div>
                        <div className="relative h-full w-full z-[2]">
                            <img 
                                src="/assets/illustration-phones.svg"  // Chemin depuis le dossier `public/`
                                alt="phones"
                                className='relative -top-16 left-[15%]'
                            />  
                        </div>
                    </div>
                    <div className="w-[50%]">
                        <h2 className=''>State of the Art Infrastructure</h2>
                        <p>With reliability and speed in mind, 
                            worldwide data centers provide the backbone for ultra-fast connectivity.
                            This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Features;