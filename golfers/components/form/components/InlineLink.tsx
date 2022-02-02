import Link from 'next/link'

interface InlineLinkProps {
  text: string
  textLink: string
  link: string
}

const InlineLink: React.FC<InlineLinkProps> = ({ text, textLink, link }) => (
  <div className='textLight'>
    <p style={{ marginRight: '10px' }}>{text}</p>

    <Link href={link}>
      <div
        className='navigate'
        role='button'
        tabIndex={0}
        onKeyDown={() => null}
      >
        {textLink}
      </div>
    </Link>
  </div>
)

export default InlineLink
