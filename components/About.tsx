import React from 'react'

const About = () => {

    const socialIcons = [
        { src: '/icons/x.png', alt: 'x.com', width: 11, height: 9 },
        { src: '/icons/facebook.png', alt: 'facebook', width: 6, height: 13 },
        { src: '/icons/youtube.png', alt: 'youtube', width: 11, height: 7 },
        { src: '/icons/instagram.png', alt: 'instagram', width: 11, height: 11 },
        { src: '/icons/pinterest.png', alt: 'pinterest', width: 11, height: 13 },
        { src: '/icons/tiktok.png', alt: 'tiktok', width: 11, height: 13 },
    ];

    const footerData = [
        {
        title: "About",
        links: ["Features", "Works", "Career"],
        },
        {
        title: "Help",
        links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"],
        },
        {
        title: "Legal",
        links: ["Free eBooks", "How to - Blog"],
        },
    ];


  return (
    <div className='h-[365px] bg-[#0B7285] px-[60px] py-[80px] flex justify-between'>

            <div className='flex flex-col gap-[24px] w-[50%]'>
                <h2 className='text-[18px] font-semibold text-white'>About scan2lab</h2>
                <p className='text-[13px] text-[#BECED1]'>Scan2Lab is a digital platform that enables laboratories, researchers, and educators to scan, digitize, and manage physical specimens with unmatched precision. Our technology bridges the gap between physical reality and digital science workflows.</p>
                
                <div className='flex gap-[12px]'>
                {socialIcons.map((icon, index) => (
                    <div
                        key={index}
                        className='w-[32px] h-[32px] rounded-full bg-[#0C606F] flex items-center justify-center cursor-pointer transition'
                    >
                        <img
                            style={{ width: `${icon.width}px`, height: `${icon.height}px` }}
                            src={icon.src}
                            alt={icon.alt}
                        />
                    </div>
                ))}
            </div>
        </div>

        <div className='flex gap-22'>
        {footerData.map((section) => (
          <div key={section.title}>
            <h3 className="font-semibold text-[14px] text-[#FFFFFF] mb-6">{section.title}</h3>
            <ul className="space-y-4 text-gray-300">
              {section.links.map((link) => (
                <li key={link} className="hover:text-white hover:underline cursor-pointer transition text-[14px] text-[#BECED1]">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
