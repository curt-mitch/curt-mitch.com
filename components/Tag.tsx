import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  // using legacyBehavior to avoid 'Error: Invalid <Link> with <a> child'
  return (
    <Link href={`/tags/${kebabCase(text)}`} legacyBehavior>
      <a className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
