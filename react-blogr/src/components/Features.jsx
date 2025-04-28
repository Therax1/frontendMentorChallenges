import React from 'react';

function Features() {
    return(
        <main className='mx-auto pt-24 pb-64 flex flex-col gap-32'>
            <h2 className='text-4xl text-center font-semibold'>Designed for the future</h2>
            <section className="text-bodycopy flex flex-col gap-16 pl-[15%] overflow-hidden py-32">
                <div className="flex gap-4 w-full relative">
                    <div className="w-[50%] flex flex-col gap-12">
                        <div className="flex flex-col gap-4">
                            <h3 className='text-2xl font-semibold'>Introducing an extensible editor</h3>
                            <p className='text-xl'>Blogr features an exceedingly intuitive interface
                                which lets you focus on one thing: creating content.
                                The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown.
                                Extensibility with plugins and themes provides easy ways to add functionality and change the look and feel of a blog.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className='text-2xl font-semibold'>Robust content management</h3>
                            <p className='text-xl'>Flexible content management enables users 
                                to easily move through posts. 
                                Increase the usability of your blog by adding customized categories, sections, format, or flow.
                                With this functionality, you're in full control.
                            </p>
                        </div>
                    </div>
                    
                    <div className="absolute -top-28 -right-32">
                        <img 
                            src="/assets/illustration-editor-desktop.svg"  // Chemin depuis le dossier `public/`
                            alt="Description"
                            className="w-[740px]"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-darkgrayblue h-[22rem] rounded-tr-footer rounded-bl-footer text-white flex gap-10">
                <div className="relative h-full w-full z-[2]">
                    <img 
                        src="/assets/illustration-phones.svg"  // Chemin depuis le dossier `public/`
                        alt="phones"
                        className='relative -top-16 left-[15%]'
                    />  
                </div>
                
                <div className="self-center justify-start py-8 px-32 flex flex-col gap-6">
                    <h2 className='text-4xl'>State of the Art Infrastructure</h2>
                    <p className='text-base'>With reliability and speed in mind, 
                        worldwide data centers provide the backbone for ultra-fast connectivity.
                        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                    </p>
                </div>
            </section>
            <section className='flex pt-32 pr-[15%] gap-12 relative'>
                <div className="flex justify-end w-full">
                    <div className="w-[50%] absolute -left-20 top-0">
                        <img 
                            src="/assets/illustration-laptop-desktop.svg"  // Chemin depuis le dossier `public/`
                            alt=""
                            className="w-[800px] "
                        />
                    </div>
                    <div className="flex flex-col gap-6 w-[50%] pl-24">
                        <div className="flex flex-col gap-4">
                            <h2 className='text-2xl font-semibold'>Free, open, simple</h2>
                            <p className='text-base'>Blogr is a free and open source application backed by a large community of helpful developers. 
                                It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics.
                                The architecture is clean and is relatively easy to learn.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 ">
                            <h2 className='text-2xl font-semibold'>Powerful tooling</h2>
                            <p className='text-base'>
                                Batteries included. We built a simple and straightforward CLI tool that makes customization 
                                and deployment a breeze, but capable of producing even the most complicated sites.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Features;