import getPostMetaData from '@/components/getPostMetadata'
import PostPreview from '@/components/PostPreview'


const Page = () => {
  const postMetaData = getPostMetaData()
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} post={post}/>
  ))
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>{postPreviews}</div>
  )
}

export default Page