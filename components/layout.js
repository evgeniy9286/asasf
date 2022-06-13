import Menu from "./header/Menu"
import Footer from './footer/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  )
}