import { VelocityScroll } from './magicui/scroll-based-velocity'

const Footer = () => {
  return (
    <div>
        <VelocityScroll
      text="NoxHD &nbsp;"
      default_velocity={5}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
    </div>
  )
}

export default Footer