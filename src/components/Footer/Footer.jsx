import { Link, NavLink } from 'react-router-dom'
import { Icon1, Icon2, Icon3, Logo } from '../../icons/svj'
import cls from './styles.module.scss'
import GreenButton from '../Buttons/GreenButton'

export const Footer = () => {
  return (
    <>
      <div className='container'>
        <div className={cls.footer}>
          <div classname={cls.logoBox}>
            <Link to="/"><Logo /></Link>
            <div className={cls.sotcial}>
              <button className={cls.footerIcons}><Link to="/"><Icon1 /></Link></button>
              <button className={cls.footerIcons}><Link to="/"><Icon2 /></Link></button>
              <button className={cls.footerIcons}><Link to="/"><Icon3 /></Link></button>
            </div>
          </div >
          <div className={cls.footerRightContent}>
            <div className={cls.footerColumn}>
              <span className={cls.footerTitle}>Resource</span>
              <ul>
                <li className={cls.footerLink}><Link className={cls.footerLink} to="">About Us</Link></li>
                <li className={cls.footerLink}><Link className={cls.footerLink} to="">Blog</Link></li>
                <li className={cls.footerLink}><Link className={cls.footerLink} to="">Contact</Link></li>
                <li className={cls.footerLink}><Link className={cls.footerLink} to="">FAQ</Link></li>
              </ul>
            </div>
            <div className={cls.footerColumn}>
              <span className={cls.footerTitle}>Legal Stuff</span>
              <ul>
                <li className={cls.footerLink}><Link className={cls.footerLink} to="">Disclaimer</Link></li>
                <li className={cls.footerLink}><Link className={cls.footerLink} to="">Financing</Link></li>
                <li className={cls.footerLink}><Link className={cls.footerLink} to="">Privacy Policy</Link></li>
                <li className={cls.footerLink}><Link className={cls.footerLink} to="">Terms of Service</Link></li>
              </ul>
            </div>
            <div className={cls.footerColumn}>
              <span className={cls.inputTitle}>knowing you're always on the best energy deal.
              </span>
              <input type="text" className={cls.footerInput} placeholder="" />

              <button className={cls.greenButton}> <GreenButton >Sign up Now</GreenButton></button>
            </div>
          </div>
        </div >
        <div className={cls.madeText}>Made With Love By Figmaland All Right Reserved
        </div>
      </div >
    </>
  )
}
