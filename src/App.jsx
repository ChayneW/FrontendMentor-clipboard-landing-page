import React, {useState, useEffect} from 'react'

import header_bg_m from './assets/images/bg-header-mobile.png'
import header_bg_d from './assets/images/bg-header-desktop.png'

import logo from './assets/images/logo.svg'
import logo_facebook from './assets/images/icon-facebook.svg' 
import logo_instagram from './assets/images/icon-instagram.svg'
import logo_twitter from './assets/images/icon-twitter.svg'
import logo_hp from './assets/images/logo-hp.png'
import logo_ibm from './assets/images/logo-ibm.png'
import logo_google from './assets/images/logo-google.png'
import logo_microsoft from './assets/images/logo-microsoft.png'
import logo_vg from './assets/images/logo-vector-graphics.png'
import logo_preview from './assets/images/icon-preview.svg'
import logo_text from './assets/images/icon-text.svg'
import logo_blacklist from './assets/images/icon-blacklist.svg'

import comp_img from './assets/images/image-computer.png'
import device_img from './assets/images/image-devices.png'

const App = () => {
  
  const [screenSize, setScreenSize] = useState(getCurrentDimension())
  
    function getCurrentDimension(){
      return {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }
  
    useEffect(() => {
      console.log('inside useEffect():')
      console.log(screenSize.width)
      function updateDimension(){
        setScreenSize(getCurrentDimension())
      }
      window.addEventListener('resize', updateDimension)
      
      return (() => {
        window.removeEventListener('resize', updateDimension)
      })
    }, [screenSize])

    return (
        <div className='landing-cont'>
            {/* HEADER LESSER */}
            {screenSize.width <= 600 ?
                (<header className='header w-full h-full flex flex-col text-center justify-center' 
                    style={{backgroundImage: `url(${header_bg_m})`,
                    width: '100vw',
                    height: '100vh',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <img 
                        className='h-logo mx-auto my-20'
                        src={logo}
                        width='fit-object'
                        height='fit-object'
                    />
                    <div>
                        <h1 className='hero-catch text-2xl font-semibold mx-16'>
                            A history of everything you copy
                        </h1>
                        <p className='hero-desc text-grayish-blue pt-5 pb-10'>
                            Clipboard allows you to track and organize everything you copy. 
                            Instantly access your clipboard on all your devices.
                        </p>
                    </div>

                    <div className='hero-buttons grid mx-10'>
                        <button className='w-200 my-5 py-3 bg-strong-cyan rounded-full text-white font-semibold'>
                            Download for iOS
                        </button>
                        
                        <button className='w-200 my-5 py-3 bg-light-blue rounded-full text-white font-semibold'>
                            Download for Mac
                        </button>
                    </div>
                </header>
            
            )
            :
            (
                <header className='header flex flex-col text-center justify-center' 
                    style={{backgroundImage: `url(${header_bg_d})`,
                    width: '100vw',
                    height: '100vh',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <img 
                        className='h-logo mx-auto my-20'
                        src={logo}
                        width={200}
                        height={200}
                    />
                    <div className='mx-30'>
                        <h1 className='hero-catch text-4xl font-semibold mx-16'>
                            A history of everything you copy
                        </h1>
                        <p className='hero-desc text-grayish-blue pt-5 pb-10'>
                            Clipboard allows you to track and organize everything you copy. Instantly
                            <br></br> 
                            access your clipboard on all your devices.
                        </p>
                    </div>

                    <div className='hero-buttons w-full flex justify-around'>
                        <button className='w-200 ml-auto mr-2 bg-strong-cyan rounded-full text-white font-semibold'>
                            <h1 className='px-5 py-2'>Download for iOS</h1>
                        </button>
                        
                        <button className='w-200 mr-auto ml-2 bg-light-blue rounded-full text-white font-semibold'>
                            <h1 className='px-5'>Download for Mac</h1>
                        </button>
                    </div>
                </header>
            )}
            {/* ----------------------- */}

            {/* EX-1 LESSER */}
            {screenSize.width <= 600 ?
            (<div className='ex-1m grid my-40'>
                <h1 className='text-2xl font-semibold pb-5 mx-16'>
                    Keep track of your 
                    <br></br>
                    snippets
                </h1>
                <p className='ft-18 text-grayish-blue mx-10'>
                    Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. 
                    Our Mac and iOS apps will help you organize everything.
                </p>

                <img  
                    className='px-10 mt-10'
                    src={comp_img}
                    width='fit-object'
                    height='fit-object'
                />

                <div className='my-10'> 
                    <h2 className='text-xl font-semibold'>Quick Search</h2>
                    <p className='ft-18 text-grayish-blue mt-2 mb-10 mx-10'>
                        Easily search your snippets by content, category, web address, application, and more.
                    </p>

                    <h2 className='text-xl font-semibold'>ICloud Sync</h2>
                    <p className='ft-18 text-grayish-blue mt-2 mb-10 mx-10'>
                        Instantly saves and syncs snippets across all your devices.
                    </p>

                    <h2 className='text-xl font-semibold'>Complete History</h2>
                    <p className='ft-18 text-grayish-blue mt-2 mb-10 mx-10'>
                        Retrieve any snippets from the first moment you started using the app.
                    </p>
                </div>
            </div>
            )
            : 
            (
            <div className='ex-1 my-5'>
                <h1 className='text-2xl font-semibold pb-5 mx-16'>
                    Keep track of your snippets
                </h1>
                <p className=' text-grayish-blue mx-10 pb-20'>
                    Clipboard instantly stores any item you copy in the cloud, meaning you can access 
                    <br></br>
                    your snippets immediately on all your devices. 
                    Our Mac and iOS apps will help you 
                    <br></br>
                    organize everything.
                </p>
                <div className='flex mx-auto'>
                    <img  
                        className='comp-img mt-10 relative overflow-hidden'
                        src={comp_img}
                        width='fit-object'
                        height='fit-object'
                    />

                    <div className='my-auto text-left mr-20'> 
                        <h2 className='text-xl font-semibold'>Quick Search</h2>
                        <p className='ft-18 text-grayish-blue mt-2 mb-10'>
                            Easily search your snippets by content,
                            <br></br> 
                            category, web address, application, and more.
                        </p>

                        <h2 className='text-xl font-semibold'>ICloud Sync</h2>
                        <p className='ft-18 text-grayish-blue mt-2 mb-10'>
                            Instantly saves and syncs snippets across 
                            <br></br>
                            all your devices.
                        </p>

                        <h2 className='text-xl font-semibold'>Complete History</h2>
                        <p className='ft-18 text-grayish-blue mt-2 mb-10'>
                            Retrieve any snippets from the first moment 
                            <br></br>
                            you started using the app.
                        </p>
                    </div>
                </div>
            </div>
            )}

            {/* ----------------------- */}
            {/* EX-2 LESSTHAN */}
            {screenSize.width <= 600 ?
            (<div className='ex-2 my-5 pb-20'>

                <div className='pb-20'>
                    <h1 className='text-2xl font-semibold pb-5 mx-16'>Access Clipboard Anywhere</h1>
                    <p className='ft-18 text-grayish-blue'>
                        Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.
                    </p>

                    <img  
                        className='mx-auto mt-10'
                        src={device_img}
                        width={300}
                        height='fit-object'
                    />
                </div>

                <div className='my-10 mx-auto'> 
                    <h2 className='text-xl font-semibold mx-20'>Supercharge your workflow</h2>
                    <p className=' text-grayish-blue mt-2 mb-10 mx-auto px-5 py-2'>
                        We've got the tools to boost your productivity.
                    </p>
                
                    <img
                        className='mx-auto py-10'
                        src={logo_blacklist}
                        alt='blacklist.svg'
                    />

                    <h2 className='text-xl font-semibold pb-2'>
                        Create blacklists
                    </h2>
                    <p className='ft-18 text-grayish-blue mt-2 mb-10 mx-10'>
                        Ensure sensitive information never makes its way to your clipboard by excluding certain sources.
                    </p>

                    <img
                        className='mx-auto py-10'
                        src={logo_text}
                        alt='logo-text.svg'
                    />

                    <h2 className='text-xl font-semibold pb-2'>
                        Plain text snippets
                    </h2>
                    <p className='ft-18 text-grayish-blue mt-2 mb-10 mx-5'>
                        Remove unwanted formatting from copied text for a consitent look.
                    </p>

                    <img
                        className='mx-auto py-10'
                        src={logo_preview}
                        alt='logo-preview.svg'
                    />

                    <h2 className='text-xl font-semibold pb-2'>
                        Sneak preview
                    </h2>
                    <p className='ft-18 text-grayish-blue mt-2 mb-10 mx-10'>
                        Quick preview of all snippets on your Clipboard for easy access.
                    </p>
                </div>
            </div>
            ) 
            :
            (
            <div className='ex-2 flex flex-col pt-40'>
                <h1 className='text-2xl font-semibold mb-5 mx-16'>Access Clipboard Anywhere</h1>
                <p className='ft-18 text-grayish-blue mb-10'>
                    Whether you're on the go, or at your computer, you can access all your Clipboard 
                    <br></br>
                    snippets in a few simple clicks.
                </p>

                <img  
                    className='mx-auto mt-10'
                    src={device_img}
                    width='fit-object'
                    height='fit-object'
                />

                <div className='grid my-10'> 
                    <h2 className='text-2xl font-semibold mx-20'>Supercharge your workflow</h2>
                    <p className='ft-18 text-grayish-blue mt-2 mb-10 mx-5 py-2'>
                        We've got the tools to boost your productivity.
                    </p>

                    <div className='device-feat mx-auto grid'>
                        
                        <div className=''>
                            <img
                                className='mx-auto py-9'
                                src={logo_blacklist}
                                alt='blacklist.svg'
                            />

                            <h2 className='text-xl font-semibold pb-2'>
                                Create blacklists
                            </h2>
                            <p className='ft-18 text-grayish-blue mt-2 mb-10 mx-10'>
                                Ensure sensitive information never makes its way to your clipboard by excluding certain sources.
                            </p>
                        </div>

                        <div>
                            <img
                                className='mx-auto py-10'
                                src={logo_text}
                                alt='logo-text.svg'
                            />

                            <h2 className='text-xl font-semibold pb-2'>
                                Plain text snippets
                            </h2>
                            <p className='ft-18 text-grayish-blue mt-2 mb-10 mx-5'>
                                Remove unwanted formatting from copied text for a consitent look.
                            </p>
                        </div>

                        <div> 
                            <img
                                className='mx-auto py-10'
                                src={logo_preview}
                                alt='logo-preview.svg'
                            />

                            <h2 className='text-xl font-semibold pb-2'>
                                Sneak preview
                            </h2>
                            <p className='ft-18 text-grayish-blue mt-2 mb-10 mx-10'>
                                Quick preview of all snippets on your Clipboard for easy access.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            )}

            {/* ----------------------- */}
            {/* EX-3 LESSTHAN */}
            {screenSize.width <= 600 ?
            (<div className='ex-3'>

                <img
                    className='mx-auto my-20'
                    src={logo_google}
                    alt='logo-google.svg'
                />
                
                <img
                    className='mx-auto my-20'
                    src={logo_ibm}
                    alt='logo-ibm.svg'
                />

                <img
                    className='mx-auto my-20'
                    src={logo_microsoft}
                    alt='logo-microsoft.svg'
                />

                <img
                    className='mx-auto my-20'
                    src={logo_hp}
                    alt='logo-hp.svg'
                />

                <img
                    className='mx-auto my-20'
                    src={logo_vg}
                    alt='logo-vg.svg'
                />

            </div>
            )
            :
            (<div className='icon-logo grid mx-auto px-5'>
                
                <img
                    className='mx-auto my-20'
                    src={logo_google}
                    alt='logo-google.svg'
                    height='fit-object'
                    width='fit-object'
                />
       

                <img
                    className='mx-auto my-20'
                    src={logo_ibm}
                    alt='logo-ibm.svg'
                    height='fit-object'
                    width='fit-object'
                />

                <img
                    className='mx-auto my-20'
                    src={logo_microsoft}
                    alt='logo-microsoft.svg'
                    height='fit-object'
                    width='fit-object'
                />

                <img
                    className='mx-auto my-20'
                    src={logo_hp}
                    alt='logo-hp.svg'
                    height='fit-object'
                    width='fit-object'
                />

                <img
                    className='mx-auto my-20'
                    src={logo_vg}
                    alt='logo-vg.svg'
                    height='fit-object'
                    width='fit-object'
                />
            </div>
            )}

            {/* ----------------------- */}
            {screenSize.width <= 600 ?
            (<div>
                <div>
                    <h1 className='hero-catch text-2xl font-semibold mx-16'>
                        Clipboard for iOS and Mack OS
                    </h1>
                    <p className='hero-desc text-grayish-blue pt-5 pb-10'>
                        Available for free on the App Store.
                        Download for Mac or iOS, sync with ICloud and you're ready to start adding to your clipboard.
                    </p>
                </div>

                <div className='hero-buttons grid mx-10'>
                    <button className='w-200 my-5 py-3 bg-strong-cyan rounded-full text-white font-semibold'>
                        Download for iOS
                    </button>
                    
                    <button className='w-200 my-5 py-3 bg-light-blue rounded-full text-white font-semibold'>
                        Download for Mac
                    </button>
                </div>
            </div>
            )
            :
            (
            <div className='flex flex-col my-40'>
                <div>
                    <h1 className='hero-catch text-2xl font-semibold mx-16'>
                        Clipboard for iOS and Mack OS
                    </h1>
                    <p className='hero-desc text-grayish-blue pt-5 pb-10'>
                        Available for free on the App Store.
                        Download for Mac or iOS, sync with ICloud and
                        <br></br>
                        you're ready to start adding to your clipboard.
                    </p>
                </div>

                <div className='hero-buttons w-full flex justify-around'>
                    <button className='w-200 ml-auto mr-2 bg-strong-cyan rounded-full text-white font-semibold'>
                        <h1 className='px-5 py-2'>Download for iOS</h1>
                    </button>
                    
                    <button className='w-200 mr-auto ml-2 bg-light-blue rounded-full text-white font-semibold'>
                        <h1 className='px-5'>Download for Mac</h1>
                    </button>
                </div>
            </div>
            )}

            {/* ----------------------- */}
            {screenSize.width <= 600 ?
            (<footer className='footer'>
                <img 
                    className='mx-auto my-20 pt-20'
                    src={logo}
                    width='fit-object'
                    height='fit-object'
                />
                <div className='options grid gap-3'>
                    <h1 className='option'>FAQ's</h1>
                    <h1 className='option'>Contact Us</h1>
                    <h1 className='option'>Privacy Policy</h1>
                    <h1 className='option'>Press Kit</h1>
                    <h1 className='option'>Install Guide</h1>
                </div>

                <div className='icons flex justify-around'>
                    <img 
                        className='icon-social mx-auto my-20'
                        src={logo_facebook}
                        width='fit-object'
                        height='fit-object'
                    />
                    <img 
                        className='icon-social mx-auto my-20'
                        src={logo_twitter}
                        width='fit-object'
                        height='fit-object'
                    />
                    <img 
                        className='icon-social mx-auto my-20'
                        src={logo_instagram}
                        width='fit-object'
                        height='fit-object'
                    />
                </div>
                
            </footer>
            )
            :
            (
            <footer className='flex justify-around my-auto'>
                <div className='my-auto'>
                    <img 
                        className=''
                        src={logo}
                        width={60}
                        height={60}
                    />
                </div>
                
                <div className='options grid text-left px-20 my-auto py-5'>
                    <div className='my-auto mr-20 py-2'><h1 className='option'>FAQ's</h1></div>
                    <div className='my-auto mr-20 py-2'><h1 className='option'>Privacy Policy</h1></div>
                    <div className='my-auto mr-20 py-2'><h1 className='option'>Install Guide</h1></div>
                    <div className='my-auto mr-20 py-2'><h1 className='option'>Contact Us</h1></div>
                    <div className='my-auto mr-20 py-2'><h1 className='option'>Press Kit</h1></div>
                </div>

                <div className='icons flex my-auto'>
                    <img 
                        className='icon-social mx-3 my-10'
                        src={logo_facebook}
                        width='fit-object'
                        height='fit-object'
                    />
                    <img 
                        className='icon-social mx-3 my-10'
                        src={logo_twitter}
                        width='fit-object'
                        height='fit-object'
                    />
                    <img 
                        className='icon-social mx-3 my-10'
                        src={logo_instagram}
                        width='fit-object'
                        height='fit-object'
                    />
                </div>
            </footer>
            )}

        </div>
    )

}

export default App