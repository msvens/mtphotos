import clsx from "clsx";
import {ReactNode, useState} from "react";

enum Direction {
  Left,
  Right,
  Top,
  Bottom
}

type DrawerProps = {
  open: boolean,
  direction?: Direction,
  onClose: () => void,
  children: ReactNode
}

export default function Drawer({open, onClose, children}: DrawerProps) {
  
  const [isOpen, setIsOpen] = useState<boolean> (open)
  
  return (
    <div className={clsx('fixed top-0 right-0 h-screen w-screen flex flex-row z-50', {
      'transition ease-in duration-150 translate-x-0': open,
      'transition-all delay-150 translate-x-full': !open
    })}>
      <div className="bg-black h-full w-2/4 opacity-20" onClick={() => onClose()}>
      </div>
      <div className="bg-white h-full w-2/4">
        {children}
      </div>
    </div>
  )
}