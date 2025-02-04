import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import HeaderModal from '../components/headerModal'
import NormalLayout from '../components/NormalLayout'
import Footer from '../components/footer'

class PageModelTitle {
  name: string
  title: string
  constructor(title: string, name: string) {
    this.name = name
    this.title = title
  }
}

const IndexPage = () => {
  let pageModel = new PageModelTitle('Home', 'new-index')
  return <div>{NormalLayout(Main(), pageModel)}</div>
}
export default IndexPage

function Main() {
  useEffect(() => {
    let body = document.getElementsByTagName('body')[0]
    body.style.background = '#0A0A0A'
  }, [])

  return (
    <div className={'home-page'}>
      <HeaderModal />
      <div className={'banner-box'}>
        <div className={'banner'}></div>
        <div className={'content-h5'}>
          <div className={'content container'}>
            <h2 className={'page-pc'}>WE SUPPORT RMS</h2>
            <h2 className={'page-h5'}>
              WE
              <br />
              SUPPORT
              <br />
              RMS
            </h2>
            <div className={'page-pc'}>
              <div className={'header'}>
                <Link to="/aboutrms/">
                  About RMS<i></i>
                </Link>
                <Link to="/campaign/">
                  The Campaign<i></i>
                </Link>
                <Link to="/support/">
                  How to Support<i></i>
                </Link>
                <Link to="/community/">
                  Join the Community<i></i>
                </Link>
                <Link to="/about/">
                  About US<i></i>
                </Link>
              </div>
            </div>

            <p>
              Richard Matthew Stallman, frequently known as RMS, has been at the heart of the information technology
              revolution in recent decades.
            </p>

            <p>
              We launched a <i>WeSuuportRMS</i> campaign.
            </p>

            <p className={'join'}>
              Join us at{' '}
              <a href="https://github.com/wesupportrms/wesupportrms.org" target="_blank">
                Github
              </a>{' '}
              or{' '}
              <a href="https://t.me/WeSupportRMS" target="_blank">
                Telegram
              </a>
              &nbsp;!
            </p>
            <div className={'page-h5'}>
              <Footer />
            </div>
            <div className={'page-pc footer-modal-box'}>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
