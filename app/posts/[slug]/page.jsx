import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import getPostMetaData from '@/components/getPostMetadata'
const getPostContent = (slug) => {
    const folder = 'posts'
    const file = `${folder}/${slug}.md`
    const content = fs.readFileSync(file,'utf8')
    const matterResult = matter(content)
    return matterResult
}

export const generateStaticParams = async() => {
    const posts = getPostMetaData()
    return posts.map((post) => ({
        slug:post.slug
    }))
}

const page = (props) => {
    const slug = props.params.slug
    const post = getPostContent(slug)
  return (
    <div>
        <div className='my-12 text-center'>
            <h1 className='text-2xl text-violet-700'>{post.data.title}</h1>
            <p className='text-slate-400 mt-2'>{post.data.date}</p>
        </div>
        <article class="prose">
        <Markdown>
            {post.content}
        </Markdown>
        </article>
    </div>
  )
}

export default page