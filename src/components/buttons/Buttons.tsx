import { ArrowRight } from 'lucide-react'

interface ButtonProps {
    text: string;
    onClick?: () => void;
    href?: string;
    className?: string;
    variant?: 'primary' | 'secondary' | 'navtext' | 'cardbtn';
}

const VARIANT = {
    primary: 'px-6 py-2 bg-blue-500/80 text-white rounded-md hover:bg-blue-700 transition duration-300 inline-block text-center',
    secondary: 'px-6 py-2 bg-transparent border border-gray-300 text-white rounded-md hover:bg-gray-300/30 transition duration-300 inline-block text-center',
    navtext: 'transition duration-300 inline-block text-center underline hover:scale-105',
    cardbtn: 'w-full py-3 border border-[#a48e60] text-[#a48e60] text-xs uppercase tracking-widest font-semibold hover:bg-[#a48e60] hover:text-white transition-colors duration-300'
}

export default function Buttons({ text, onClick, href, className = '', variant = 'primary' }: ButtonProps) {
  const styles = `${VARIANT[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={styles} onClick={onClick}>
        <span className='flex items-center gap-2'>{text} <ArrowRight size={18} /></span>
      </a>
    );
  }

  return (
    <button className={styles} onClick={onClick}>
      {text}
    </button>
  )
}
