import { Fragment } from 'react'
import Link from 'next/link'

const NewsPage: React.FC = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href=''>NextJS Is A Great Framework</Link>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  )
}

export default NewsPage
