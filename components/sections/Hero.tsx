import { Input } from '../ui/input'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-ring/15 w-full py-4 px-4 md:py-6 md:px-6 lg:px-[120px]">
        <div className="py-6 px-2 flex flex-col lg:flex-row">
          <div className="text-foreground lg:max-w-xl">
            <h1 className="text-2xl md:text-[40px] font-bold text-center lg:text-left">
              Capture, organize, and tackle your to-dos from anywhere.
            </h1>
            <p className="text-lg md:text-xl text-center lg:text-left mb-6">
              Escape the clutter and chaos—unleash your productivity with
              Trello.
            </p>
            <form className="flex items-center md:justify-center lg:justify-start gap-2">
              <Input
                type="email"
                placeholder="Email"
                className="hidden md:block max-w-sm h-13 text-lg text-foreground"
              />
              <Link
                href="/signup"
                className="bg-primary py-4 px-6 text-secondary text-base rounded cursor-pointer w-full md:max-w-[200px] text-center"
              >
                Sign up - it&apos;s free!
              </Link>
            </form>
          </div>
          <div className="w-full">
            <video src="/trello-video.mp4" autoPlay muted preload="none">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
  )
}

export default Hero