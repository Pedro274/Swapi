import React from 'react'
import './SocialMediaLinks.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faYoutube} from '@fortawesome/free-brands-svg-icons'


function SocialMediaLinks() {
    return (
        <div className='linksContainer'>
            <div className='icon'><FontAwesomeIcon icon={faFacebookF} /></div>
            <div className='icon'><FontAwesomeIcon icon={faTwitter} /></div>
            <div className='icon'><FontAwesomeIcon icon={faInstagram} /></div>
            <div className='icon'><FontAwesomeIcon icon={faYoutube} /></div>
        </div>
    )
}

export default SocialMediaLinks
