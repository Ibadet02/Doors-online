import '../styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faEnvelope, faPhoneAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
export const Footer = () =>{
    const footerLinks=
    [
        ["EXTRAS","Brands","Gift Certificates","Affiliate","Specials","Site Map"],
        ["INFORMATION","About Us","Privacy Policy","Terms & Conditions", "Contact Us", "Site Map"],
        ["MY ACCOUNT","My Account","Order History","Wish List","Newsletter","Returns"]
    ]
    return (
        <footer className='footer' id='services'>
            <div className='footer-wrapper'>
                {
                    footerLinks.map((el,index)=>{
                        return (
                            <div className='footer-box'>
                                {
                                    el.map((link,i)=>{
                                        return (
                                            i === 0?<h3>{link}</h3>:<a href='#'>{link}</a>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
                <div className='footer-box'>
                    <h3>CONTACT US</h3>
                    <div>
                        <span>
                            <FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon>
                        </span>
                        &nbsp;20 Dream House, Dreamm street, 0200
                    </div>
                    <div>
                        Dreamville, Azerbaijan
                    </div>
                    <div>
                        <span>
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                        </span>
                        &nbsp;ibadetismayilov20@gmail.com
                    </div>
                    <div>
                        <span>
                            <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
                        </span>
                        &nbsp;(050) 692-23-21
                    </div>
                    <div>
                        <span>
                            <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
                        </span>
                        &nbsp;Baku, Azerbaijan
                    </div>
                </div>
            </div>
        </footer>
    )
}